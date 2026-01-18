import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-warm/20 via-brand-sand/25 to-brand-terracotta/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/60 to-transparent"></div>
      
      {/* Blurred Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-warm/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-brand-sand/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-cyan-300/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-terracotta/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-teal-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-88 h-88 bg-sky-300/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 md:pt-32 pb-20 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="text-center md:text-left space-y-8">
            <h1 className="text-7xl md:text-7xl lg:text-6xl font-cormorant font-extrabold text-foreground leading-tight mb-8">
              <span className="block">Prioritér det vigtigste</span>
              <span className="block italic text-brand-warm mt-3">
              Jeres kærlighed til hinanden
              </span>
            </h1>
            
            <p className="text-xl md:text-lg text-foreground/70 max-w-xl mx-auto md:mx-0 font-cormorant mb-12 leading-relaxed">
            Stærke forhold sker ikke af sig selv. Ligesom alt andet der betyder noget, har kærligheden brug for opmærksomhed. Partnertid giver jer en enkel, ugentlig rutine, der forebygger afstand og styrker jeres forbindelse.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <Button
                size="lg" 
                className="py-6 px-8 text-lg min-h-[56px]"
                asChild
              >
                <Link href="/auth/sign-up">
                  Prøv gratis i 30 dage
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 min-h-[56px] text-lg" 
                asChild
              >
                <Link href="/#howitworks">Sådan fungerer det</Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground font-cormorant mt-6">
              ✨ Første måned gratis • 🔒 100% anonymt • 💰 69 kr./måned
            </p>
          </div>
          
          <div className="hidden md:block relative z-10">
            <div className="relative z-0 max-w-[70%] mx-auto">
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5]">
                <Image 
                  src="/image_love.png"
                  alt="Par i solnedgang ved vandet" 
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 768px) 35vw, 70vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
