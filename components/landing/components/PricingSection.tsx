import { Button } from "@/components/ui/button";
import { Check, Heart, ArrowRight } from "lucide-react";
import { Card } from "@/components/card";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            En investering i jeres forholds sundhed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Alle parforhold med intention om at blive sammen bør arbejde på det. Ligesom du investerer i din egen sundhed, 
            er Partnertid en investering i jeres forholds velvære – en ugentlig rutine der forebygger problemer og styrker jeres forbindelse.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-xl rounded-3xl">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Left Column - Plan Info */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-brand-warm/10 to-brand-sand/20">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-warm/20 p-3 rounded-full mr-4">
                    <Heart className="h-7 w-7 text-brand-warm" strokeWidth={1.5} fill="#E9985A" />
                  </div>
                  <h3 className="text-2xl font-extrabold">Partnertid</h3>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl">69 kr</span>
                    <span className="text-lg text-muted-foreground ml-2">/måned</span>
                  </div>
                  <p className="text-brand-warm font-medium">
                    Månedlig betaling, ingen binding
                  </p>
                </div>
                
                <div className="font-body text-lg mb-8">
                  <p>
                    Ligesom en vitaminpille hver dag holder dig sund, holder Partnertid jeres forhold stærkt. 
                    En ugentlig rutine der passer ind i jeres liv – for alle par der vil hinanden.
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-warm/10 text-brand-warm">
                    <span className="text-sm font-medium">📅 Første måned gratis</span>
                  </div>
                </div>
                
                <Button
                  size="xl"
                  className="w-full hover:bg-brand-warm-dark rounded-xl"
                  asChild
                >
                  <Link href="/auth/sign-up">
                    Prøv gratis i 30 dage <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              {/* Middle Column - Features */}
              <div className="p-8 md:p-10 bg-white md:col-span-2">
                <h4 className="font-extrabold text-lg mb-6">Det får I:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <div className="flex-shrink-0 mr-3">
                        <div className="h-6 w-6 rounded-full bg-brand-green/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-brand-green" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">{feature.title}</h5>
                        <p className="font-body text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <div className="inline-flex items-center justify-center bg-gray-50 px-4 py-2 rounded-full text-sm text-muted-foreground">
                    <Heart className="h-4 w-4 mr-2 text-brand-terracotta" fill="#D97F54" strokeWidth={1.5} />
                    <span>Ingen kreditkort påkrævet i prøveperioden</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 max-w-2xl mx-auto">
            <p className="text-muted-foreground font-body text-lg italic">
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
