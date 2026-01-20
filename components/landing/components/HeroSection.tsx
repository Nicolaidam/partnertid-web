import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-warm/30 via-brand-sand/20 to-brand-terracotta/10"></div>
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 items-center gap-0 md:grid-cols-hero">
          <div className="space-y-8 text-center md:text-left">
              <div className="flex flex-col gap-6">
                  <h1 className="text-foreground">
                      Den største gave,
                  </h1>
                  <h1 className="text-foreground">
                      du kan give den du elsker er
                  </h1>
                  <h1 className="uppercase tracking-display text-brand-warm">
                      at forstå
                  </h1>
              </div>
            <div className="mb-12 flex flex-col space-y-3 text-foreground/80">
              <p>
                Et sundt parforhold handler ikke bare om kærlighed, men også om læringer, vilje
                og forståelse.
              </p>
              <p>
                De stærkeste par venter ikke på, at krisen rammer.
                sammen.
              </p>
                <p>
                    De taler. De lytter. De tager hinanden alvorligt - også når alt føles godt.
                </p>
              <p>
                Partnertid er et alternativ til traditionel parterapi, som for nogle kan føles grænseoverskridende. I kommer til at forstå hinanden bedre, løse konflikter og vokse som par – uden at skulle tale med en fremmed.
              </p>
            </div>

            <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button
                size="xl"
                asChild
              >
                <Link href="/partnertesten">
                    Start med en gratis Partnertest
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                asChild
              >
                <Link href="/#howitworks">📩 Skriv dig op på venteliste</Link>
              </Button>
            </div>

            <p className="mt-6 text-small text-muted-foreground">
              ✨ Kommer snart • 🔒 100% anonymt • 🇪🇺 Servere i EU
            </p>
          </div>

          <div className="relative z-10 hidden md:block">
            <div className="relative z-0 mx-auto w-full max-w-[400px]">
              <div className="relative aspect-4/5 overflow-hidden rounded-5xl">
                <Image
                  src="/image_love.png"
                  alt="Par i solnedgang ved vandet"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
