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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card shadow-lg duration-300 animate-in slide-in-from-bottom md:hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-small font-normal tracking-button text-foreground">
              Start jeres rejse sammen
            </p>
            <p className="text-caption text-muted-foreground">
              Første måned gratis
            </p>
          </div>
          <Button
            size="sm"
            className="shrink-0"
            asChild
          >
            <Link href="/auth/sign-up">
              Prøv nu
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
