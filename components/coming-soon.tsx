"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Skriv venligst en emailadresse.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setMessage(result.message ?? "Noget gik galt. Prøv igen.");
        return;
      }

      setStatus("success");
      setMessage("✅ Tak! Du er nu skrevet op.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Noget gik galt. Prøv igen.");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 size-64 rounded-full bg-brand-sand/60 blur-3xl" />
        <div className="absolute right-0 top-1/3 size-72 rounded-full bg-brand-warm/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-72 rounded-full bg-brand-green/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-small uppercase tracking-caps text-foreground/70 shadow-sm">
              Under udvikling
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            </span>
            <h1 className="text-h1 text-foreground">Partnertid er på vej.</h1>
            <p className="max-w-xl text-body text-foreground/70">
              👉 Vi er i gang med at skabe Partnertid – en moderne platform for
              online parterapi. Tilmeld dig her og vær blandt de første, der får
              adgang, når vi åbner.
            </p>
          </section>
          <section className="rounded-2xl border border-border bg-card/90 p-6 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="space-y-4">
              <h2 className="text-h3 text-foreground">Skriv dig op på email</h2>
              <p className="text-body text-foreground/70">
                Vi sender kun en kort besked, når vi er klar til at byde jer
                indenfor.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <label
                  className="text-small font-medium text-foreground/80"
                  htmlFor="mce-EMAIL"
                >
                  Din email
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    id="mce-EMAIL"
                    name="EMAIL"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="navn@eksempel.dk"
                    className="h-11 bg-background"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={status === "loading"}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-11"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sender..." : "Skriv mig op"}
                  </Button>
                </div>
                {message ? (
                  <p
                    className={`text-small ${status === "error" ? "text-red-500" : "text-foreground/70"}`}
                    aria-live="polite"
                  >
                    {message}
                  </p>
                ) : null}
                <p className="text-small text-foreground/60">
                  Alternativt kan du skrive direkte til{" "}
                  <a
                    className="font-semibold text-primary"
                    href="mailto:nicolaidam96@gmail.dk"
                  >
                    nicolaidam96@gmail.dk
                  </a>
                  .
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
