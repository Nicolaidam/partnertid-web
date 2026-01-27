import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testBenefits = [
  "✔️ Gratis",
  "✔️ Tager kun få minutter",
  "✔️ Giver dig en værdifuld indikation af jeres parforhold",
];

const discBirds = [
  {
    name: "Due",
    style: "S",
    description:
      "Rolig og omsorgsfuld, går op i harmoni og står stærkt i stabilitet – søger tryghed og langsigtet tillid.",
    image: "/bird_dove.png",
  },
  {
    name: "Ørn",
    style: "D",
    description:
      "Beslutsom og målrettet, sætter retning og resultater højt, men kan bruge lidt plads til at høre andres tempo.",
    image: "/bird_eagle.png",
  },
  {
    name: "Ugle",
    style: "C",
    description:
      "Detaljeorienteret og reflekteret, ønsker klarhed og struktur og støtter relationen med gennemarbejdede løsninger.",
    image: "/bird_owl.png",
  },
  {
    name: "Papegøje",
    style: "I",
    description:
      "Varm og energisk, dyrker nærvær og spontanitet, men har brug for at blive set og anerkendt undervejs.",
    image: "/bird_parrot.png",
  },
];

const pairingInsights = [
  {
    partners: "Due + Ørn",
    styles: "DISC S + D",
    summary:
      "Omsorgens rolige rytme møder resultatorienteret fremdrift, så spændingen er, om trygheden lader sig måle i handling.",
    dynamic:
      "Due inviterer til langsom nærhed, mens Ørn hurtigt vil tage ledelse – uden klar aftale kan Due føle sig tilsidesat og Ørn irriteret over mangel på beslutningskraft.",
    needsTriggers:
      "Due har brug for klare signaler om, at der er tid til at bygge tillid; Ørn har brug for synlig bevægelse og præcis feedback på, at retningen er fælles.",
    actions: [
      {
        who: "Due",
        text: "Sig højt, hvad der gør dig tryg ved at følge med – det giver Ørn konkret retning uden at miste din blide tone.",
      },
      {
        who: "Ørn",
        text: "Skab hurtige kontaktpunkter, hvor du spørger ind til hvad der føles stabilt for Due, så fremdrift bliver en fælles aftale.",
      },
    ],
    script:
      "\"Kan vi beslutte tre små skridt, der giver dig ro og samtidig holder kursen?\"",
    experiment:
      "Lav en ‘bilans’ hver uge: Ørn leverer resultaterne, Due deler, hvad der føles trygt, og I justerer tempoet sammen.",
  },
  {
    partners: "Due + Ugle",
    styles: "DISC S + C",
    summary:
      "Tryghed og struktur går fint hånd i hånd, men risikoen er, at forsigtighed fastholder jer i samme rytme uden nye beslutninger.",
    dynamic:
      "Begge søger stabilitet, men Due kan blive frustreret over Uglen, der søger mere tid til analyse, og Ugle kan føle sig presset af Dues behov for hurtige afklaringer.",
    needsTriggers:
      "Due har brug for tydelig sikkerhed og gentagende omsorg; Ugle har brug for undersøgelse og ro til at samle facts, ellers trækker hun sig.",
    actions: [
      {
        who: "Due",
        text: "Giv Ugle lov til at sende en kort oversigt med kommende emner før en beslutning, og sig, hvad du har brug for at føle dig tryggere, så hun kan tage hensyn.",
      },
      {
        who: "Ugle",
        text: "Del din analyse i små bidder og vær eksplicit omkring, hvilke detaljer der kræver tid, så Due oplever fremdrift og ikke mister tillid.",
      },
    ],
    script:
      "\"Lad os tage to minutter til at nævne ét, vi begge er stolte af i forholdet, og én ting vi gerne vil udforske næste uge.\"",
    experiment:
      "Planlæg en weekenddag med et kort tempo-forløb: én tryg rutine (på Due-siden) og én lille, dokumenteret afprøvning (på Uglen).",
  },
  {
    partners: "Due + Papegøje",
    styles: "DISC S + I",
    summary:
      "Omsorgens stabilitet kan hurtigt blive udfordret af begejstringens behov for bevægelse og energi.",
    dynamic:
      "Due søger ro og rytme, mens Papegøje puster til stemningen og inviterer til impulsive eventyr – uden koordinering kan Due trække sig og Papegøje blive såret.",
    needsTriggers:
      "Due har brug for forudsigelige rammer og løbende bekræftelse; Papegøje har brug for at blive set og have plads til spontanitet.",
    actions: [
      {
        who: "Due",
        text: "Fortæl, hvilke øjeblikke der giver dig tryghed, så Papegøje kan forankre sine forslag i jeres fælles virkelighed.",
      },
      {
        who: "Papegøje",
        text: "Inddrag Due med et kort tjek på, hvordan hun har det, før du foreslår noget nyt – det skaber sikkerhed og lyst.",
      },
    ],
    script:
      "\"Hvad har du brug for i dag for at føle dig set, før vi beslutter os for noget nyt?\"",
    experiment:
      "Planlæg én spontan udflugt og én rolig ceremoni i den kommende uge og skriv kort ned, hvordan de føltes i forhold til hinandens behov.",
  },
  {
    partners: "Ørn + Ugle",
    styles: "DISC D + C",
    summary:
      "Resultatorienteret drivkraft møder analytisk præcision – potentielt en stærk kombination, men også en kilde til konflikt om detaljens betydning.",
    dynamic:
      "Ørn vil skære igennem, hvor Ugle ønsker tid til deltaljer og dokumentation; uden respekt for begge sider bliver der enten fejl eller frustration.",
    needsTriggers:
      "Ørn har brug for klar handleplan; Ugle har brug for at kende kriterierne og få sin grundighed anerkendt.",
    actions: [
      {
        who: "Ørn",
        text: "Giv et kort overblik over målet først, og bed Ugle om at fremhæve, hvilke oplysninger hun har brug for, inden I går videre.",
      },
      {
        who: "Ugle",
        text: "Sæt en timebox på din gennemgang og del hovedpointerne tidligt, så Ørn kan holde momentum uden at føle sig stoppet.",
      },
    ],
    script:
      "\"Lad os blive enige om, hvad der kræver din beslutning i dag, og hvad jeg skal uddybe bagefter.\"",
    experiment:
      "Del en liste: Ørn noterer hurtige wins, Ugle noterer detaljerende spørgsmål, og I fastlægger, hvordan de bliver mødt.",
  },
  {
    partners: "Ørn + Papegøje",
    styles: "DISC D + I",
    summary:
      "Stærke initiativer og begejstring skaber momentum, men uenighed om tempo og opmærksomhed kan blæse gnister op.",
    dynamic:
      "Ørn leder mod resultater og vil have handling nu, mens Papegøje søger fælles energi og løbende bekræftelse af værdien i sammenværet.",
    needsTriggers:
      "Ørn har brug for klar respekt og at skabe retning uden for meget smalltalk; Papegøje har brug for at blive hørt og fejret, ellers trækker energien sig.",
    actions: [
      {
        who: "Ørn",
        text: "Indram beslutninger med en hurtig agenda og afslut med en bekræftelse af, hvad I fejrer sammen – det skaber plads til Papegøjes lyst til at blive set.",
      },
      {
        who: "Papegøje",
        text: "Sæt ord på, hvad du har brug for, og luk et par korte checkpoints ind i Ørns plan, så dine følelser bliver en fast del af tempoet.",
      },
    ],
    script:
      "\"Kan vi tage fem minutter til at tælle op, hvad vi har nået i dag, og hvordan vi plejer hinanden?\"",
    experiment:
      "Afhold en 10-minutters hurtig check-in to gange i den kommende uge og afslut altid med et konkret anerkendelsespunkt.",
  },
  {
    partners: "Ugle + Papegøje",
    styles: "DISC C + I",
    summary:
      "Detaljeorienteret klarhed bliver udfordret af spontan energi; begge kan lære at udnytte hinandens styrker med lidt struktur.",
    dynamic:
      "Ugle fokuserer på præcision og risikostyring, mens Papegøje forsøger at holde stemningen let og igangsætte nye idéer.",
    needsTriggers:
      "Ugle har brug for tid og fakta, så hun ikke bliver overrumplet; Papegøje har brug for at føle sig inspireret og ikke bremset.",
    actions: [
      {
        who: "Ugle",
        text: "Del dine konklusioner i korte bullets med en klar anbefaling, så Papegøje ikke tror, du spærrer for spontaniteten.",
      },
      {
        who: "Papegøje",
        text: "Tag ansvar for at vise den stemning, du ønsker, og foreslå én konkret, kreativ idé, der matcher Uglenes rammer.",
      },
    ],
    script:
      "\"Hvad er dine vigtigste facts lige nu, og hvordan kan jeg gøre det legende, så vi kan handle?\"",
    experiment:
      "Sæt et fælles møde op: Ugle præsenterer en mini-plan, Papegøje tilføjer én energigivende vinkel, og I beslutter, hvor meget spontanitet der får plads.",
  },
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
                Hvilken fugl er du i dit parforhold?
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
                              src="/birds.png"
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
      <section id="disc-intro" className="py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="ui-caption">DISC-test</p>
            <h2>
              Få en klarere forståelse med DISC
            </h2>
            <p className="mt-4 text-body text-foreground/70">
              DISC fortæller jer, hvordan I hver især foretrækker at navigere i relationer, håndtere konflikter og vise omsorg. I får et fælles sprog, så I kan læse hinandens signaler og følge med i, hvor balancen tipper.
            </p>
          </div>
        </div>
      </section>
      <section id="disc-birds" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {discBirds.map((bird) => (
              <article
                key={bird.name}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-background">
                    <Image
                      src={bird.image}
                      alt={`${bird.name} DISC-fugl`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 10rem, 12rem"
                    />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-eyebrow text-foreground/60">
                      DISC-{bird.style}
                    </p>
                    <h3 className="text-xl">{bird.name}</h3>
                  </div>
                </div>
                <p className="text-body text-foreground/70">{bird.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="disc-pairings" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="ui-caption">Parringsindsigter</p>
            <h2>Sådan kan fuglene understøtte hinanden</h2>
            <p className="mt-3 text-body text-foreground/70">
              Hver DISC-kombination har sin fortælling om hvilke behov, der kolliderer, hvad der giver ro, og hvordan I kan gøre et aktivt valg omkring jeres fælles rytmer.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pairingInsights.map((pair) => (
              <article
                key={pair.partners}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-eyebrow text-foreground/60">
                      {pair.styles}
                    </p>
                    <h3 className="text-xl">{pair.partners}</h3>
                  </div>
                </div>
                <p className="text-body text-foreground/70">{pair.summary}</p>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p className="font-semibold text-foreground">Dynamik</p>
                  <p>{pair.dynamic}</p>
                  <p className="font-semibold text-foreground">Behov og triggere</p>
                  <p>{pair.needsTriggers}</p>
                </div>
                <div className="grid gap-3 text-sm text-foreground/70">
                  {pair.actions.map((action) => (
                    <div
                      key={`${pair.partners}-${action.who}`}
                      className="rounded-2xl bg-background/50 p-3"
                    >
                      <p className="text-xs uppercase tracking-eyebrow text-foreground/60">
                        {action.who}
                      </p>
                      <p>{action.text}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p className="font-semibold text-foreground">Samtalescript</p>
                  <p>{pair.script}</p>
                  <p className="font-semibold text-foreground">Lille eksperiment</p>
                  <p>{pair.experiment}</p>
                </div>
              </article>
            ))}
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
