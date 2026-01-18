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
  <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-brand-warm/10">
          <Heart className="h-6 w-6 text-brand-warm" fill="#E9985A" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Hvad andre kvinder siger om Partnertid
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
          Fortællinger fra kvinder, der har valgt at investere proaktivt i deres forhold – før problemer opstår.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border border-border/50 hover:shadow-lg transition-all duration-300 bg-white"
          >
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Quote className="h-5 w-5 text-brand-warm/30 mr-2 flex-shrink-0 mt-1" />
                <p className="text-foreground italic font-body text-base leading-relaxed flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="flex items-center mt-6 pt-4 border-t border-border/30">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-brand-warm/20 text-brand-warm font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.relationship}</p>
                  <div className="mt-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-brand-sand/20 text-brand-warm">
                      {testimonial.scenario}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border border-brand-warm/30 bg-gradient-to-br from-brand-warm/5 to-brand-sand/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-extrabold text-foreground mb-4">
              Hvorfor kvinder vælger Partnertid
            </h3>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Mange i et forhold oplever, at de er dem, der ofte tager initiativ til at arbejde på forholdet. 
              Partnertid giver jer begge en struktureret måde at investere i jeres forhold på – sammen. 
              Det handler om at føle sig set, hørt og forstået. Om at have et trygt rum, hvor I kan 
              udforske jeres følelser og behov. Om at bygge en stærkere forbindelse gennem konsistent praksis.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-white/60 text-sm font-medium text-foreground">
                Føle sig set og hørt
              </span>
              <span className="px-4 py-2 rounded-full bg-white/60 text-sm font-medium text-foreground">
                Bedre kommunikation
              </span>
              <span className="px-4 py-2 rounded-full bg-white/60 text-sm font-medium text-foreground">
                Mere nærvær
              </span>
              <span className="px-4 py-2 rounded-full bg-white/60 text-sm font-medium text-foreground">
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
  <section className="py-24 bg-gradient-to-br from-primary/5 to-brand-sand/10">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-sand/40 to-brand-warm/30 rounded-3xl blur-3xl opacity-70 transform -rotate-1"></div>
        
        <div className="relative bg-white shadow-xl rounded-3xl p-8 md:p-16 border border-white/50 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-warm/20 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-terracotta/20 to-transparent rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-brand-warm/10">
              <HeartHandshake className="h-6 w-6 text-brand-warm" fill="#E9985A" strokeWidth={1.5} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground leading-tight">
              Start jeres ugentlige <br className="hidden md:block" />
              <span className="text-brand-warm">rutine</span> i dag
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
              Ligesom du tager en vitaminpille hver dag, kan I hver uge kigge hinanden i øjnene og være der for hinanden. 
              Alle parforhold med intention om at blive sammen bør arbejde på det – start mens I har det godt sammen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-4 rounded-lg bg-brand-sand/5">
                <div className="text-2xl mb-2">✨</div>
                <p className="text-sm font-medium text-foreground font-body">Første måned gratis</p>
                <p className="text-xs text-muted-foreground mt-1">Ingen binding</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-brand-sand/5">
                <div className="text-2xl mb-2">🔒</div>
                <p className="text-sm font-medium text-foreground font-body">100% anonymt</p>
                <p className="text-xs text-muted-foreground mt-1">Alt mellem jer to</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg bg-brand-sand/5">
                <div className="text-2xl mb-2">⏱️</div>
                <p className="text-sm font-medium text-foreground font-body">30-45 min/uge</p>
                <p className="text-xs text-muted-foreground mt-1">I jeres tempo</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg" 
                className="py-6 px-10 text-lg min-h-[56px]"
                asChild
              >
                <Link href="/auth/sign-up">
                  Start jeres rejse sammen – første måned gratis <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-muted-foreground font-body">
                  Ingen kreditkort påkrævet i prøveperioden
                </p>
                <p className="text-xs text-muted-foreground font-body">
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
