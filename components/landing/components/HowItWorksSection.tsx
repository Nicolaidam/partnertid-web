
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Separator } from "@/components/separator";
import { Users, BookOpen, MessageCircle, LineChart, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Users className="size-6 text-brand-warm" />,
      title: "Skab et fælles fundament",
      description: "I starter sammen og deler jeres tanker om, hvad I ønsker at opnå med hinanden."
    },
    {
      icon: <BookOpen className="size-6 text-brand-warm" />,
      title: "Ugentlig refleksion – jeres rutine",
      description: "Hver uge reflekterer I over spørgsmål der åbner for nye perspektiver. Ligesom en vitaminpille – en fast del af jeres uge."
    },
    {
      icon: <Sparkles className="size-6 text-brand-warm" />,
      title: "Indsigter der forbinder",
      description: "Jeres individuelle refleksioner bliver til fælles samtalepunkter og forståelser – ugentligt."
    },
    {
      icon: <MessageCircle className="size-6 text-brand-warm" />,
      title: "Kig hinanden i øjnene hver uge",
      description: "Gennem guidede samtaler finder I nye veje til at forstå hinanden. En ugentlig check-in der styrker jeres forbindelse."
    },
    {
      icon: <LineChart className="size-6 text-brand-warm" />,
      title: "Byg muskelstyrke gennem konsistens",
      description: "Se hvordan jeres ugentlige rutine skaber varige ændringer og et stærkere forhold over tid – ligesom træning."
    }
  ];

  return (
    <section id="howitworks" className="bg-gradient-to-b from-background via-brand-sand/5 to-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 animate-fade-in text-center">
          <h1>
            Jeres ugentlige <span className="text-brand-warm">rutine</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body text-muted-foreground">
            Ligesom du tager en vitaminpille hver dag, er Partnertid jeres ugentlige check-in. 
            En fast rutine der styrker jeres forhold gennem konsistent praksis.
          </p>
          <div className="mt-8 flex justify-center">
            <Separator className="h-0.5 w-24 bg-brand-warm/30" />
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {steps.map((step, index) => (
                <Card 
                  key={index} 
                  className="group animate-fade-in overflow-hidden border border-brand-sand/30 shadow-sm transition-all duration-300 hover:shadow-md" 
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <div className="flex items-start p-6">
                    <div className="mr-6 shrink-0">
                      <div className="flex size-12 items-center justify-center rounded-full bg-brand-warm/10 transition-colors group-hover:bg-brand-warm/20">
                        <span className="font-display font-normal tracking-button text-brand-warm">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center">
                        <span className="mr-3">{step.icon}</span>
                        <h3 className="text-body font-normal tracking-emphasis text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="col-span-1 animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <Card className="h-full overflow-hidden border border-brand-sand/30 bg-gradient-to-br from-card to-brand-sand/10 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-body">Eksempel på ugentlig check-in</CardTitle>
                <CardDescription>Se hvordan jeres ugentlige rutine kan se ud</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="animate-fade-in border border-brand-sand/50 bg-card/80 shadow-sm" style={{ animationDelay: "0.7s" }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-small font-normal tracking-label text-brand-warm">
                      <MessageCircle className="mr-2 size-4" />
                      Samtalepunkter
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      <li className="rounded-lg border border-muted/50 bg-muted/30 p-3 text-small">
                        <p className="italic text-foreground">
                          &quot;I har begge udtrykt et ønske om mere nærvær i hverdagen. Hvordan ser meningsfuld tid sammen ud for hver af jer?&quot;
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in border border-brand-sand/50 bg-card/80 shadow-sm" style={{ animationDelay: "0.9s" }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-small font-normal tracking-label text-brand-green">
                      <Users className="mr-2 size-4" />
                      Fælles udforskning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="rounded-lg border border-muted/50 bg-muted/30 p-3 text-small">
                      <p className="font-medium">Dybdelytning: 2x10 minutter</p>
                      <p className="mt-1 text-small text-muted-foreground">
                        Tag på skift 10 minutter til at dele noget, der betyder noget for dig.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in border border-brand-sand/50 bg-card/80 shadow-sm" style={{ animationDelay: "1.1s" }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-small font-normal tracking-label text-brand-terracotta">
                      <Sparkles className="mr-2 size-4" />
                      Fælles refleksion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="rounded-lg border border-muted/50 bg-muted/30 p-3 text-small">
                      <p>
                        &quot;Denne uge viser jeres refleksioner en fælles bevægelse mod mere åbenhed.&quot;
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
