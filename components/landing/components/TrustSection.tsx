import { Shield, Lock, Eye, XCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/card";

const trustPoints = [
  {
    icon: <Lock className="size-6 text-brand-green" />,
    title: "100% anonymt og fortroligt",
    description:
      "Alt, I deler i Partnertid, forbliver mellem jer to. Ingen eksterne terapeuter eller tredjeparter har adgang til jeres refleksioner eller samtaler.",
  },
  {
    icon: <Shield className="size-6 text-brand-green" />,
    title: "Sikker databehandling",
    description:
      "Vi overholder GDPR og bruger krypteret datalagring. Jeres information er beskyttet med samme sikkerhedsstandarder som banker og sundhedsplatforme.",
  },
  {
    icon: <Eye className="size-6 text-brand-green" />,
    title: "Alt mellem jer to",
    description:
      "Der er ingen eksterne terapeuter eller vejledere, der læser jeres indhold. Partnertid skaber bare rammerne – I skaber indholdet sammen.",
  },
  {
    icon: <XCircle className="size-6 text-brand-green" />,
    title: "Ingen binding",
    description:
      "Opsig når som helst. Ingen skjulte gebyrer eller binding. Jeres forhold, jeres valg, jeres tempo.",
  },
];

const TrustSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand-green/10 p-3">
            <Shield className="size-6 text-brand-green" />
          </div>
          <h2 className="mb-4 text-section-title font-normal tracking-emphasis text-foreground md:text-display">
            Trygt og sikkert
          </h2>
          <p className="mx-auto max-w-2xl text-lead text-muted-foreground">
            Jeres forhold er jeres private rum. Vi skaber rammerne – I bestemmer indholdet.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <Card
              key={index}
              className="border border-border/50 text-center transition-shadow hover:shadow-md"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-brand-green/10 p-3">
                    {point.icon}
                  </div>
                </div>
                <h3 className="mb-2 text-lead font-normal tracking-emphasis text-foreground">
                  {point.title}
                </h3>
                <p className="text-body-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <Card className="border border-brand-sand/30 bg-gradient-to-br from-brand-sand/5 to-card">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="mr-4 shrink-0">
                  <CheckCircle2 className="size-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="mb-3 text-lead font-normal tracking-emphasis text-foreground">
                    Sådan fungerer anonymiteten
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
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
