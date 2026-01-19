
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
      icon: <Users className="h-6 w-6 text-brand-warm" />,
      title: "Skab et fælles fundament",
      description: "I starter sammen og deler jeres tanker om, hvad I ønsker at opnå med hinanden."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-brand-warm" />,
      title: "Ugentlig refleksion – jeres rutine",
      description: "Hver uge reflekterer I over spørgsmål der åbner for nye perspektiver. Ligesom en vitaminpille – en fast del af jeres uge."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-brand-warm" />,
      title: "Indsigter der forbinder",
      description: "Jeres individuelle refleksioner bliver til fælles samtalepunkter og forståelser – ugentligt."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-brand-warm" />,
      title: "Kig hinanden i øjnene hver uge",
      description: "Gennem guidede samtaler finder I nye veje til at forstå hinanden. En ugentlig check-in der styrker jeres forbindelse."
    },
    {
      icon: <LineChart className="h-6 w-6 text-brand-warm" />,
      title: "Byg muskelstyrke gennem konsistens",
      description: "Se hvordan jeres ugentlige rutine skaber varige ændringer og et stærkere forhold over tid – ligesom træning."
    }
  ];

  return (
    <section id="howitworks" className="py-24 bg-gradient-to-b from-white via-brand-sand/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1>
            Jeres ugentlige <span className="text-brand-warm">rutine</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Ligesom du tager en vitaminpille hver dag, er Partnertid jeres ugentlige check-in. 
            En fast rutine der styrker jeres forhold gennem konsistent praksis.
          </p>
          <div className="mt-8 flex justify-center">
            <Separator className="w-24 bg-brand-warm/30 h-0.5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {steps.map((step, index) => (
                <Card 
                  key={index} 
                  className="border border-brand-sand/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group animate-fade-in" 
                  style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                  <div className="flex items-start p-6">
                    <div className="flex-shrink-0 mr-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-warm/10 group-hover:bg-brand-warm/20 transition-colors">
                        <span className="text-brand-warm font-display font-normal tracking-[0.08em]">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="mr-3">{step.icon}</span>
                        <h3 className="text-lg font-normal tracking-[0.04em] text-foreground">
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
            <Card className="h-full bg-gradient-to-br from-white to-brand-sand/10 border border-brand-sand/30 shadow-md overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-normal tracking-[0.04em]">Eksempel på ugentlig check-in</CardTitle>
                <CardDescription>Se hvordan jeres ugentlige rutine kan se ud</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="border border-brand-sand/50 shadow-sm bg-white/80 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-normal tracking-[0.12em] text-brand-warm flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Samtalepunkter
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      <li className="bg-muted/30 p-3 rounded-lg text-sm border border-muted/50">
                        <p className="italic text-foreground">
                          &quot;I har begge udtrykt et ønske om mere nærvær i hverdagen. Hvordan ser meningsfuld tid sammen ud for hver af jer?&quot;
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-brand-sand/50 shadow-sm bg-white/80 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-normal tracking-[0.12em] text-brand-green flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Fælles udforskning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="bg-muted/30 p-3 rounded-lg text-sm border border-muted/50">
                      <p className="font-medium">Dybdelytning: 2x10 minutter</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tag på skift 10 minutter til at dele noget, der betyder noget for dig.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-brand-sand/50 shadow-sm bg-white/80 animate-fade-in" style={{ animationDelay: "1.1s" }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-normal tracking-[0.12em] text-brand-terracotta flex items-center">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Fælles refleksion
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="bg-muted/30 p-3 rounded-lg text-sm border border-muted/50">
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
