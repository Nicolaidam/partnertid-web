import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-warm/15 via-brand-sand/20 to-brand-terracotta/10"></div>
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-hero md:gap-20">
          <div className="space-y-8 text-center md:text-left">
              <h1 className="mb-2 flex flex-col gap-2 text-foreground md:gap-3">
                  <span>Den største gave,</span>
                  <span>du kan give din partner er</span>
              </h1>
            <h5 className="-mt-0.5 flex flex-col gap-2 text-display font-medium uppercase tracking-ultra md:-mt-1 md:gap-3">
              <span className="text-brand-warm">at forstå dem</span>
            </h5>
            <div className="mb-12 space-y-6 text-foreground/80">
              <p>
                Parforhold handler ikke kun om lyst, men også om læringer, vilje
                og forståelse.
              </p>
              <p>
                De stærkeste par venter ikke på, at krisen rammer. De taler
                sammen. De lytter. De tager hinanden alvorligt - også når alt
                føles godt.
              </p>
              <p>
                Partnertid er et alternativ til traditionel parterapi, som for nogle kan føles grænseoverskridende.
              </p>
            </div>

            <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button
                size="xl"
                asChild
              >
                <Link href="/partnertesten">
                    Prøv partnertesten helt gratis
                  <ArrowRight className="ml-2 size-5" />
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

            <p className="mt-6 text-body-sm text-muted-foreground">
              ✨ Kommer snart • 🔒 100% anonymt • 🇪🇺 Servere i EU
            </p>
          </div>

          <div className="relative z-10 hidden md:block">
            <div className="relative z-0 mx-auto max-w-70p">
              <div className="relative aspect-4/5 overflow-hidden rounded-5xl">
                <Image
                  src="/image_love.png"
                  alt="Par i solnedgang ved vandet"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 768px) 35vw, 70vw"
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
