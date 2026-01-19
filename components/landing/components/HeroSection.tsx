import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-warm/15 via-brand-sand/20 to-brand-terracotta/10"></div>
      <div className="container mx-auto px-4 pt-20 md:pt-32 pb-20 md:pb-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 md:gap-20 items-center">
          <div className="text-center md:text-left space-y-8">
              <h1 className="mb-8 flex flex-col gap-2 md:gap-3 text-foreground">
                  <span>Den største gave,</span>
                  <span>du kan give din partner er</span>
              </h1>
            <h3 className="-mt-2 md:-mt-3 flex flex-col gap-2 md:gap-3 text-4xl uppercase tracking-[0.4em] font-medium">
              <span className="text-brand-warm">at forstå dem</span>
            </h3>
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <Button
                size="xl"
                asChild
              >
                <Link href="/partnertesten">
                    Prøv partnertesten helt gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
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

            <p className="text-sm text-muted-foreground mt-6">
              ✨ Kommer snart • 🔒 100% anonymt • 🇪🇺 Servere i EU
            </p>
          </div>

          <div className="hidden md:block relative z-10">
            <div className="relative z-0 max-w-[70%] mx-auto">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5]">
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
