import { Shield, Lock, Eye, XCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/card";

const trustPoints = [
  {
    icon: <Lock className="h-6 w-6 text-brand-green" />,
    title: "100% anonymt og fortroligt",
    description:
      "Alt, I deler i Partnertid, forbliver mellem jer to. Ingen eksterne terapeuter eller tredjeparter har adgang til jeres refleksioner eller samtaler.",
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-green" />,
    title: "Sikker databehandling",
    description:
      "Vi overholder GDPR og bruger krypteret datalagring. Jeres information er beskyttet med samme sikkerhedsstandarder som banker og sundhedsplatforme.",
  },
  {
    icon: <Eye className="h-6 w-6 text-brand-green" />,
    title: "Alt mellem jer to",
    description:
      "Der er ingen eksterne terapeuter eller vejledere, der læser jeres indhold. Partnertid skaber bare rammerne – I skaber indholdet sammen.",
  },
  {
    icon: <XCircle className="h-6 w-6 text-brand-green" />,
    title: "Ingen binding",
    description:
      "Opsig når som helst. Ingen skjulte gebyrer eller binding. Jeres forhold, jeres valg, jeres tempo.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-brand-green/10">
            <Shield className="h-6 w-6 text-brand-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-normal tracking-[0.04em] text-foreground mb-4">
            Trygt og sikkert
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jeres forhold er jeres private rum. Vi skaber rammerne – I bestemmer indholdet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustPoints.map((point, index) => (
            <Card
              key={index}
              className="border border-border/50 hover:shadow-md transition-shadow text-center"
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-brand-green/10">
                    {point.icon}
                  </div>
                </div>
                <h3 className="font-normal tracking-[0.04em] text-foreground mb-2 text-lg">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border border-brand-sand/30 bg-gradient-to-br from-brand-sand/5 to-white">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle2 className="h-6 w-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-normal tracking-[0.04em] text-foreground mb-3 text-lg">
                    Sådan fungerer anonymiteten
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Når I bruger Partnertid, er alt krypteret og sikkert opbevaret. Vi kan ikke se jeres refleksioner, 
                    jeres svar eller jeres samtaler. Systemet fungerer som et trygt rum, hvor I kan udforske jeres 
                    forhold sammen – uden at nogen udefra kan se ind. Jeres data deles aldrig med tredjeparter, 
                    og I kan slette alt med ét klik, hvis I ønsker det. Det er jeres forhold, jeres valg, jeres kontrol.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
