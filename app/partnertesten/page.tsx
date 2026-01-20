import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/card";
import Image from "next/image";

const testBenefits = [
  "✔️ Gratis",
  "✔️ Tager kun få minutter",
  "✔️ Giver dig en værdifuld indikation af jeres parforhold",
];

export default function PartnertestenHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-sand-light/50 via-background to-background">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-10%] size-72 rounded-full bg-brand-warm/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-10%] top-20 size-72 rounded-full bg-brand-green/20 blur-3xl"
        />
        <div className="container relative mx-auto px-4 pb-20 pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="ui-caption">Partnertesten</p>
              <h1 className="mt-4">
                Test om I er et godt match
              </h1>
              <div className="mt-6 space-y-4 text-body text-foreground/70">
                <p>Måske har du følelsen af, at I er skabt for hinanden.</p>
                <p>
                  Måske sniger tanken sig ind indimellem: “Er vi egentlig et
                  match?”
                </p>
                <p>
                  Med Partnertesten kan du nemt og hurtigt få en indikation af,
                  hvordan det står til i jeres parforhold – og om relationen er
                  sund og i balance, eller om der er tegn på udfordringer, som er
                  værd at tage alvorligt.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="xl" asChild>
                  <Link href="#cta">
                    Tag testen <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
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
      </section>
      <section id="temperatur" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2>
              Tal om tingene inden det er for sent
            </h2>
            <div className="mt-6 space-y-4 text-body text-foreground/70">
              <p>
                Undersøgelser viser, at der i gennemsnit går op til seks år, fra
                de første tegn på problemer i et parforhold opstår, til man søger
                hjælp. Samtidig ender omkring halvdelen af alle parforhold i
                skilsmisse.
              </p>
              <p>
                Det betyder ikke, at jeres forhold er dømt til at mislykkes –
                tværtimod. Erfaring viser, at trivsel og tilfredshed øges
                markant, når parforholdet bliver prioriteret, plejet og forstået
                i tide.
              </p>
              <p>
                Partnertesten giver dig et hurtigt overblik og kan være et første
                skridt mod større indsigt, bedre kommunikation og et stærkere
                forhold.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="border border-border/60 bg-card">
              <CardContent className="space-y-3 p-6">
                <h3>
                    Mange par venter for længe
                </h3>
                <p className="text-body text-foreground/70">
                    De fleste par lever i årevis med små tegn på udfordringer, før de stopper op og tager dem alvorligt. Når man skaber forståelse i tide, kan selv små indsigter føre til store forandringer.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border/60 bg-card">
              <CardContent className="space-y-3 p-6">
                <h3>
                    Relationer kræver læring
                </h3>
                <p className="text-body text-foreground/70">
                    Omkring halvdelen af alle parforhold ender i skilsmisse – ikke fordi kærligheden mangler, men fordi relationer har brug for opmærksomhed, indsigt og løbende udvikling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="cta" className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl border border-brand-warm/30 bg-gradient-to-br from-brand-sand/30 via-background to-brand-warm/10 p-8 shadow-xl md:p-12">
            <div
              aria-hidden
              className="absolute right-[-15%] top-[-20%] size-56 rounded-full bg-brand-warm/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-3xl text-center">
              <h2>
                Prøv partnerstesten i dag
              </h2>
              <div className="mt-6 space-y-3 text-body text-foreground/70">
                {testBenefits.map((benefit) => (
                  <p key={benefit}>{benefit}</p>
                ))}
              </div>
              <p className="mt-6 text-body text-foreground/70">
                Tag testen – og få indsigt i jeres relation allerede i dag.
              </p>
              <div className="mt-8">
                <Button size="xl" asChild>
                  <Link href="#cta">Tag testen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
