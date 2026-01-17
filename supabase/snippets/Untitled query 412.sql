-- =========================
-- PROFILES → ACCOUNT
-- =========================

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  invited_email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- =========================
-- RELATIONSHIPS
-- =========================

CREATE TABLE IF NOT EXISTS public.relationships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user1_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user2_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc', now())
);

ALTER TABLE public.relationships ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own relationships" ON public.relationships;
CREATE POLICY "Users can read own relationships"
  ON public.relationships
  FOR SELECT
  USING (auth.uid() = user1_id OR auth.uid() = user2_id);

DROP POLICY IF EXISTS "Users can insert own relationships" ON public.relationships;
CREATE POLICY "Users can insert own relationships"
  ON public.relationships
  FOR INSERT
  WITH CHECK (auth.uid() = user1_id);

DROP POLICY IF EXISTS "Users can update own relationships" ON public.relationships;
CREATE POLICY "Users can update own relationships"
  ON public.relationships
  FOR UPDATE
  USING (auth.uid() = user1_id OR auth.uid() = user2_id);

CREATE INDEX IF NOT EXISTS relationships_user1_id_idx ON public.relationships(user1_id);
CREATE INDEX IF NOT EXISTS relationships_user2_id_idx ON public.relationships(user2_id);

-- =========================
-- UPDATED_AT TRIGGER
-- =========================

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc', now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_relationships_updated_at ON public.relationships;
CREATE TRIGGER update_relationships_updated_at
  BEFORE UPDATE ON public.relationships
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- =========================
-- SINGLE RELATIONSHIP ENFORCEMENT
-- =========================

CREATE OR REPLACE FUNCTION public.check_user_single_relationship()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM public.relationships
    WHERE id IS DISTINCT FROM NEW.id
      AND (user1_id = NEW.user1_id OR user2_id = NEW.user1_id)
  ) THEN
    RAISE EXCEPTION 'User % already has a relationship', NEW.user1_id;
  END IF;

  IF NEW.user2_id IS NOT NULL AND EXISTS (
    SELECT 1 FROM public.relationships
    WHERE id IS DISTINCT FROM NEW.id
      AND (user1_id = NEW.user2_id OR user2_id = NEW.user2_id)
  ) THEN
    RAISE EXCEPTION 'User % already has a relationship', NEW.user2_id;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS enforce_single_relationship_per_user ON public.relationships;
CREATE TRIGGER enforce_single_relationship_per_user
  BEFORE INSERT OR UPDATE ON public.relationships
  FOR EACH ROW
  EXECUTE FUNCTION public.check_user_single_relationship();

-- =========================
-- AUTO-LINK PARTNER
-- =========================

CREATE OR REPLACE FUNCTION public.auto_link_partner_by_email(
  user_id UUID,
  user_email TEXT
)
RETURNS VOID AS $$
DECLARE
  pending_relationship_id UUID;
BEGIN
  SELECT r.id INTO pending_relationship_id
  FROM public.relationships r
  JOIN public.profiles p ON r.user1_id = p.id
  WHERE LOWER(p.invited_email) = LOWER(user_email)
    AND r.user2_id IS NULL
    AND r.user1_id != user_id
  LIMIT 1;

  IF pending_relationship_id IS NOT NULL THEN
    UPDATE public.relationships
      SET user2_id = user_id
      WHERE id = pending_relationship_id;

    UPDATE public.profiles
      SET invited_email = NULL
      WHERE id = (
        SELECT user1_id FROM public.relationships WHERE id = pending_relationship_id
      );
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =========================
-- HANDLE NEW USER
-- =========================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);

  PERFORM public.auto_link_partner_by_email(NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- =========================
-- RENAME TO FINAL TABLES
-- =========================

ALTER TABLE public.relationships RENAME TO couple;
ALTER TABLE public.profiles RENAME TO account;

ALTER INDEX IF EXISTS relationships_user1_id_idx RENAME TO couple_user1_id_idx;
ALTER INDEX IF EXISTS relationships_user2_id_idx RENAME TO couple_user2_id_idx;

-- =========================
-- FINAL RLS (COUPLE)
-- =========================

ALTER TABLE public.couple ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own couple" ON public.couple;
CREATE POLICY "Users can read own couple"
  ON public.couple
  FOR SELECT
  USING (auth.uid() = user1_id OR auth.uid() = user2_id);

DROP POLICY IF EXISTS "Users can insert own couple" ON public.couple;
CREATE POLICY "Users can insert own couple"
  ON public.couple
  FOR INSERT
  WITH CHECK (auth.uid() = user1_id);

DROP POLICY IF EXISTS "Users can update own couple" ON public.couple;
CREATE POLICY "Users can update own couple"
  ON public.couple
  FOR UPDATE
  USING (auth.uid() = user1_id OR auth.uid() = user2_id);

-- =========================
-- FINAL RLS (ACCOUNT)
-- =========================

ALTER TABLE public.account ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own account" ON public.account;
CREATE POLICY "Users can read own account"
  ON public.account
  FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own account" ON public.account;
CREATE POLICY "Users can update own account"
  ON public.account
  FOR UPDATE
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own account" ON public.account;
CREATE POLICY "Users can insert own account"
  ON public.account
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- =========================
-- USER PREFERENCES
-- =========================

ALTER TABLE public.account
  ADD COLUMN IF NOT EXISTS ai_tone TEXT,
  ADD COLUMN IF NOT EXISTS notifications_enabled BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS reminder_frequency TEXT;