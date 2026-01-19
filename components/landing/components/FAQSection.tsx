import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Hvordan får jeg min partner med på idéen?",
    answer:
      "Mange par starter med at dele idéen som en investering i jeres forhold – ligesom I investerer i jeres sundhed eller karriere. Partnertid er ikke terapi, det er forebyggende vedligeholdelse. Prøv at sige: 'Jeg tænkte, vi kunne starte en ugentlig rutine sammen, hvor vi tager tid til at kigge hinanden i øjnene og være der for hinanden. Det tager kun 30-45 minutter om ugen, og vi kan prøve det gratis i en måned.' Mange partnere bliver positive, når de forstår, at det handler om at styrke noget, der allerede fungerer godt.",
  },
  {
    question: "Hvad hvis vi ikke har tid?",
    answer:
      "Partnertid er designet til at passe ind i en travl hverdag. En ugentlig session tager typisk 30-45 minutter – mindre end en Netflix-episode. Mange par finder, at de faktisk får mere kvalitetstid sammen, fordi de bevidst sætter tid af til hinanden. Det kan være om søndagen, efter børnene er lagt i seng, eller en hverdag aften. Konsistens er vigtigere end perfektion – selv 20 minutter om ugen kan gøre en forskel.",
  },
  {
    question: "Er det terapi eller noget andet?",
    answer:
      "Partnertid er ikke terapi. Det er forebyggende vedligeholdelse af jeres forhold – ligesom at tage en vitaminpille hver dag eller træne regelmæssigt. Vi bruger metoder inspireret af parterapi og relationel psykologi, men formålet er at styrke jeres forhold, før problemer opstår. Der er ingen eksterne terapeuter involveret – alt foregår mellem jer to i jeres eget tempo. Det er for par, der vil hinanden og vil investere i deres forhold.",
  },
  {
    question: "Hvor meget tid tager det?",
    answer:
      "En ugentlig session tager typisk 30-45 minutter. Det inkluderer individuel refleksion (hver af jer tænker over nogle spørgsmål) og derefter en guided samtale sammen. Mange par finder, at de hurtigt kommer i rutinen, og det bliver en naturlig del af deres uge. Konsistens er vigtigere end længde – selv kortere sessioner kan være værdifulde, hvis I gør det regelmæssigt.",
  },
  {
    question: "Hvad hvis vi allerede har det godt sammen?",
    answer:
      "Perfekt! Partnertid er netop designet til par, der har det godt sammen. Ligesom du tager en vitaminpille hver dag for at holde dig sund, selvom du er rask, er Partnertid jeres ugentlige 'vitaminpille' for forholdet. Det handler om at vedligeholde og styrke det, I allerede har. Mange par finder, at de opdager nye sider af hinanden og får endnu dybere forbindelse, selv når de starter fra et godt sted. Forebyggende vedligeholdelse er den bedste investering.",
  },
  {
    question: "Er det virkelig anonymt?",
    answer:
      "Ja, 100%. Alt, I deler i Partnertid, forbliver mellem jer to. Der er ingen eksterne terapeuter, der læser jeres refleksioner eller deltager i jeres samtaler. Alt data er krypteret og opbevares sikkert i overensstemmelse med GDPR. Vi kan ikke se jeres indhold, og vi deler det aldrig med nogen. Jeres forhold er jeres private rum – vi skaber bare rammerne for, at I kan arbejde på det sammen.",
  },
  {
    question: "Hvad hvis vi har børn og ikke kan finde tid alene?",
    answer:
      "Mange par med børn bruger Partnertid om aftenen, efter børnene er lagt i seng, eller om søndagen. Det kan også være, at I tager jeres individuelle refleksioner hver for sig (f.eks. om morgenen eller i pausen) og så finder 20-30 minutter sammen til selve samtalen. Nogle par finder også, at det fungerer at have sessionen, mens børnene leger eller ser TV i et andet rum. Det vigtigste er at finde en rutine, der virker for jer.",
  },
  {
    question: "Kan vi prøve det, før vi binder os?",
    answer:
      "Ja, absolut! I kan prøve Partnertid gratis i 30 dage uden binding. Ingen kreditkort påkrævet i prøveperioden. Hvis det ikke er noget for jer, kan I opsige når som helst – også efter prøveperioden. Vi tror på, at I skal føle, at det giver værdi, før I betaler. Prøv det i en måned, og se hvordan det føles at have en fast rutine sammen.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-gradient-to-b from-background via-muted/50 to-background py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand-warm/10 p-3">
            <HelpCircle className="size-6 text-brand-warm" />
          </div>
          <h2 className="mb-4 text-section-title text-foreground md:text-display">
            Ofte stillede spørgsmål
          </h2>
          <p className="mx-auto max-w-2xl text-lead text-muted-foreground">
            Her er svar på nogle af de spørgsmål, vi ofte får fra kvinder, der overvejer at starte med Partnertid.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-border/50 bg-card px-4 shadow-sm transition-shadow hover:shadow-md md:px-6"
              >
                <AccordionTrigger className="min-h-11 py-4 text-left text-body font-normal text-foreground hover:no-underline md:py-6 md:text-lead">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-body-sm leading-relaxed text-muted-foreground md:pb-6 md:text-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
