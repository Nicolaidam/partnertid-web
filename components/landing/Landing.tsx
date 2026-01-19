"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";
import { HeartHandshake, ArrowRight, Heart, Quote } from "lucide-react";
import HowItWorksSection from "./components/HowItWorksSection";
import FAQSection from "./components/FAQSection";
import TrustSection from "./components/TrustSection";
import StickyCTA from "./components/StickyCTA";
import { Avatar, AvatarFallback } from "@/components/avatar";
import { Card, CardContent } from "@/components/card";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Vi startede med Partnertid mens vi havde det godt sammen. Det er blevet vores ugentlige rutine – ligesom at tage en vitaminpille. Vi føler, at vi træner vores forhold hver uge.",
    name: "Maria",
    age: 32,
    relationship: "Sammen i 4 år",
    scenario: "Efter vi fik børn",
    initials: "M",
  },
  {
    quote:
      "Jeg investerer i min sundhed, min karriere og nu også i mit forhold. Partnertid er vores ugentlige check-in – en fast rutine der gør os stærkere sammen.",
    name: "Louise",
    age: 28,
    relationship: "Sammen i 3 år",
    scenario: "I en travl hverdag",
    initials: "L",
  },
  {
    quote:
      "Et parforhold er en muskel der skal trænes. Vi startede med Partnertid fordi vi vil hinanden – ikke fordi vi havde problemer. Det er den bedste investering vi har gjort.",
    name: "Sofie",
    age: 35,
    relationship: "Gift i 6 år",
    scenario: "Når vi begge har karriere",
    initials: "S",
  },
  {
    quote:
      "Efter vi fik børn, følte vi os nogle gange som to skibe i natten. Partnertid gav os tilbage vores fælles sprog. Nu har vi en fast tid hver uge, hvor vi kigger hinanden i øjnene igen.",
    name: "Emma",
    age: 30,
    relationship: "Sammen i 5 år",
    scenario: "Efter vi fik børn",
    initials: "E",
  },
  {
    quote:
      "Vi begge har travle karrierer, og det var svært at finde tid til hinanden. Partnertid har givet os en struktureret måde at prioritere vores forhold på – selv når tiden er knap.",
    name: "Anna",
    age: 29,
    relationship: "Sammen i 2 år",
    scenario: "Når vi begge har karriere",
    initials: "A",
  },
  {
    quote:
      "Jeg føler mig set og hørt på en helt ny måde. Det er ikke terapi – det er bare en måde at være der for hinanden på. Vores kommunikation er blevet så meget bedre.",
    name: "Camilla",
    age: 33,
    relationship: "Sammen i 7 år",
    scenario: "Mere nærvær i hverdagen",
    initials: "C",
  },
];

const Testimonials = () => (
  <section className="bg-gradient-to-b from-muted to-background py-24">
    <div className="container mx-auto px-4">
      <div className="mb-16 text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-brand-warm/10 p-3">
          <Heart className="size-6 text-brand-warm" fill="currentColor" strokeWidth={1.5} />
        </div>
        <h2 className="mb-4 text-section-title font-normal tracking-emphasis text-foreground md:text-display">
          Hvad andre kvinder siger om Partnertid
        </h2>
        <p className="mx-auto max-w-2xl text-lead text-muted-foreground">
          Fortællinger fra kvinder, der har valgt at investere proaktivt i deres forhold – før problemer opstår.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border border-border/50 bg-card transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <div className="mb-4 flex items-start">
                <Quote className="mr-2 mt-1 size-5 shrink-0 text-brand-warm/30" />
                <p className="flex-1 text-body italic leading-relaxed text-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="mt-6 flex items-center border-t border-border/30 pt-4">
                <Avatar className="mr-3 size-10">
                  <AvatarFallback className="bg-brand-warm/20 font-display font-normal tracking-button text-brand-warm">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-body-sm font-semibold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-caption text-muted-foreground">{testimonial.relationship}</p>
                  <div className="mt-1">
                    <span className="inline-flex items-center rounded-full bg-brand-sand/20 px-2 py-0.5 font-display text-caption font-normal tracking-button text-brand-warm">
                      {testimonial.scenario}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto max-w-4xl">
        <Card className="border border-brand-warm/30 bg-gradient-to-br from-brand-warm/5 to-brand-sand/10">
          <CardContent className="p-8 text-center">
            <h3 className="mb-4 text-title font-normal tracking-emphasis text-foreground">
              Hvorfor kvinder vælger Partnertid
            </h3>
            <p className="mb-6 text-lead leading-relaxed text-muted-foreground">
              Mange i et forhold oplever, at de er dem, der ofte tager initiativ til at arbejde på forholdet. 
              Partnertid giver jer begge en struktureret måde at investere i jeres forhold på – sammen. 
              Det handler om at føle sig set, hørt og forstået. Om at have et trygt rum, hvor I kan 
              udforske jeres følelser og behov. Om at bygge en stærkere forbindelse gennem konsistent praksis.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-card/60 px-4 py-2 font-display text-body-sm font-normal tracking-button text-foreground">
                Føle sig set og hørt
              </span>
              <span className="rounded-full bg-card/60 px-4 py-2 font-display text-body-sm font-normal tracking-button text-foreground">
                Bedre kommunikation
              </span>
              <span className="rounded-full bg-card/60 px-4 py-2 font-display text-body-sm font-normal tracking-button text-foreground">
                Mere nærvær
              </span>
              <span className="rounded-full bg-card/60 px-4 py-2 font-display text-body-sm font-normal tracking-button text-foreground">
                Mindre konflikter
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="bg-gradient-to-br from-primary/5 to-brand-sand/10 py-24">
    <div className="container mx-auto px-4">
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute inset-0 -rotate-1 rounded-3xl bg-gradient-to-r from-brand-sand/40 to-brand-warm/30 opacity-70 blur-3xl"></div>
        
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-xl backdrop-blur-sm md:p-16">
          <div className="absolute right-0 top-0 size-64 -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-bl from-brand-warm/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 size-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-brand-terracotta/20 to-transparent"></div>
          
          <div className="relative text-center">
            <div className="mb-8 inline-flex items-center justify-center rounded-full bg-brand-warm/10 p-3">
              <HeartHandshake className="size-6 text-brand-warm" fill="currentColor" strokeWidth={1.5} />
            </div>
            
            <h2 className="mb-6 text-section-title font-normal leading-tight tracking-emphasis text-foreground md:text-display">
              Start jeres ugentlige <br className="hidden md:block" />
              <span className="text-brand-warm">rutine</span> i dag
            </h2>
            
            <p className="mx-auto mb-8 max-w-2xl text-subtitle text-muted-foreground">
              Ligesom du tager en vitaminpille hver dag, kan I hver uge kigge hinanden i øjnene og være der for hinanden. 
              Alle parforhold med intention om at blive sammen bør arbejde på det – start mens I har det godt sammen.
            </p>

            <div className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg bg-brand-sand/5 p-4">
                <div className="mb-2 text-title">✨</div>
                <p className="font-display text-body-sm font-normal tracking-button text-foreground">Første måned gratis</p>
                <p className="mt-1 text-caption text-muted-foreground">Ingen binding</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-brand-sand/5 p-4">
                <div className="mb-2 text-title">🔒</div>
                <p className="font-display text-body-sm font-normal tracking-button text-foreground">100% anonymt</p>
                <p className="mt-1 text-caption text-muted-foreground">Alt mellem jer to</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-brand-sand/5 p-4">
                <div className="mb-2 text-title">⏱️</div>
                <p className="font-display text-body-sm font-normal tracking-button text-foreground">30-45 min/uge</p>
                <p className="mt-1 text-caption text-muted-foreground">I jeres tempo</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg" 
                className="min-h-14 px-10 py-6 text-lead"
                asChild
              >
                <Link href="/auth/sign-up">
                  Start jeres rejse sammen – første måned gratis <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <div className="flex flex-col items-center gap-2">
                <p className="text-body-sm text-muted-foreground">
                  Ingen kreditkort påkrævet i prøveperioden
                </p>
                <p className="text-caption text-muted-foreground">
                  Opsig når som helst – ingen binding
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  useEffect(() => {
    document.title = "Partnertid – Træn jeres forhold hver uge";
    // Enable smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="pb-20 md:pb-0">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <TrustSection />
      <PricingSection />
      <FAQSection />
      <HowItWorksSection />
      <Testimonials />
      <CtaSection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;
