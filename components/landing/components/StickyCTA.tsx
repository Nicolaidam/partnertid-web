"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/components/use-mobile";
import Link from "next/link";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show sticky CTA after user has scrolled past hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  if (!isMobile || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-normal font-display tracking-[0.08em] text-foreground truncate">
              Start jeres rejse sammen
            </p>
            <p className="text-xs text-muted-foreground">
              Første måned gratis
            </p>
          </div>
          <Button
            size="sm"
            className="flex-shrink-0"
            asChild
          >
            <Link href="/auth/sign-up">
              Prøv nu
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
