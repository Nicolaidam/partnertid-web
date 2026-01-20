import { Button } from "@/components/ui/button";
import { Check, Heart, ArrowRight } from "lucide-react";
import { Card } from "@/components/card";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gradient-to-b from-background to-muted py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-h2 font-normal tracking-emphasis text-foreground md:text-h1">
            En investering i jeres forholds sundhed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-muted-foreground">
            Alle parforhold med intention om at blive sammen bør arbejde på det. Ligesom du investerer i din egen sundhed, 
            er Partnertid en investering i jeres forholds velvære – en ugentlig rutine der forebygger problemer og styrker jeres forbindelse.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Card className="overflow-hidden rounded-3xl border-0 shadow-xl">
            <div className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {/* Left Column - Plan Info */}
              <div className="bg-gradient-to-br from-brand-warm/10 to-brand-sand/20 p-8 md:p-10">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 rounded-full bg-brand-warm/20 p-3">
                    <Heart className="size-7 text-brand-warm" strokeWidth={1.5} fill="currentColor" />
                  </div>
                  <h3 className="text-h3 font-normal tracking-emphasis">Partnertid</h3>
                </div>
                
                <div className="mb-8">
                  <div className="mb-2 flex items-baseline">
                    <span className="text-h1">69 kr</span>
                    <span className="ml-2 text-body text-muted-foreground">/måned</span>
                  </div>
                  <p className="font-medium text-brand-warm">
                    Månedlig betaling, ingen binding
                  </p>
                </div>
                
                <div className="mb-8 text-body">
                  <p>
                    Ligesom en vitaminpille hver dag holder dig sund, holder Partnertid jeres forhold stærkt. 
                    En ugentlig rutine der passer ind i jeres liv – for alle par der vil hinanden.
                  </p>
                </div>
                
                <div className="mb-8 space-y-3">
                  <div className="inline-flex items-center rounded-full bg-brand-warm/10 px-4 py-2 text-brand-warm">
                    <span className="font-display text-small font-normal tracking-button">📅 Første måned gratis</span>
                  </div>
                </div>
                
                <Button
                  size="xl"
                  className="w-full rounded-xl hover:bg-brand-warm-dark"
                  asChild
                >
                  <Link href="/auth/sign-up">
                      Prøv en gratis parforholdstest<ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Middle Column - Features */}
              <div className="bg-card p-8 md:col-span-2 md:p-10">
                <h4 className="mb-6 text-body font-normal tracking-button">Det får I:</h4>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Ugentlig træning",
                      description: "En fast rutine hver uge – ligesom træning eller en vitaminpille"
                    },
                    {
                      title: "Kig hinanden i øjnene",
                      description: "Struktureret tid til at være der for hinanden og lytte"
                    },
                    {
                      title: "Forebyggende vedligeholdelse",
                      description: "Start mens I har det godt sammen og styrk jeres forhold løbende"
                    },
                    {
                      title: "Byg muskelstyrke over tid",
                      description: "Se hvordan jeres konsistente indsats styrker jeres forbindelse"
                    },
                    {
                      title: "Fortroligt og sikkert rum",
                      description: "Alt foregår mellem jer to – privat og trygt"
                    },
                    {
                      title: "For alle par der vil hinanden",
                      description: "Ikke kun for par i krise, men for alle der vil investere i deres forhold"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex">
                      <div className="mr-3 shrink-0">
                        <div className="flex size-6 items-center justify-center rounded-full bg-brand-green/20">
                          <Check className="size-4 text-brand-green" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-normal tracking-button text-foreground">{feature.title}</h5>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 border-t border-border pt-6 text-center">
                  <div className="inline-flex items-center justify-center rounded-full bg-muted px-4 py-2 text-small text-muted-foreground">
                    <Heart className="mr-2 size-4 text-brand-terracotta" fill="currentColor" strokeWidth={1.5} />
                    <span>Ingen kreditkort påkrævet i prøveperioden</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm">
            <p className="text-body italic text-muted-foreground">
              &quot;Et parforhold er en muskel der skal trænes. Ligesom du tager en vitaminpille hver dag, 
              bør I hver uge kigge hinanden i øjnene og være der for hinanden. Det er ikke terapi – det er vedligeholdelse.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
