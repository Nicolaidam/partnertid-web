import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-warm/30 via-brand-sand/20 to-brand-terracotta/10"></div>
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-hero lg:gap-8">
          <div className="space-y-6 text-center md:space-y-8 md:text-left">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="text-foreground">
                Den største gave,
              </h1>
              <h1 className="text-foreground">
                du kan give er
              </h1>
              <h1 className="uppercase tracking-display text-brand-warm">
                at forstå
              </h1>
            </div>
            <div className="mx-auto mb-10 flex max-w-xl flex-col space-y-0 text-foreground/80 md:mx-0 md:mb-12 md:space-y-1 md:text-left">
              <p>
                  Et sundt parforhold handler ikke kun om kærlighed –
                  men om nysgerrighed, vilje og forståelse.
              </p>
              <p>
                  De stærkeste par venter ikke på, at krisen rammer.
              </p>
              <p>
                  De taler. De lytter. Og de tager hinanden alvorligt – også når alt føles godt.
              </p>
              {/*<p>*/}
              {/*  Partnertid er et alternativ til traditionel parterapi, som for nogle kan føles grænseoverskridende. I kommer til at forstå hinanden bedre, løse konflikter og vokse som par – uden at skulle tale med en fremmed.*/}
              {/*</p>*/}
            </div>

            <div className="mb-8 flex flex-col gap-4">
              <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start md:gap-4">
                <Button
                  size="xl"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <Link href="/partnertesten">
                      Bliv klogere på jeres match <span aria-hidden="true">→</span>
                  </Link>
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <Link href="/#howitworks">📩 Skriv dig op på venteliste</Link>
                </Button>
              </div>
            </div>

            <p className="mt-4 text-small text-muted-foreground md:text-left">
              ✨ Kommer snart • 🔒 100% anonymt • 🇪🇺 Servere i EU
            </p>
          </div>

          <div className="relative z-10 hidden justify-center md:flex lg:justify-end">
            <div className="relative z-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
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
