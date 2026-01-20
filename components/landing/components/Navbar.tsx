"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <nav className="fixed z-50 w-full bg-background/80 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/partnertid_icon.png"
                  alt="Partnertid"
                  width={20}
                  height={20}
                  className="mr-2 size-5"
                  priority
                />
                <span className="ui-caption">
                  Partnertid
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#features" className="nav-link">Funktioner</Link>
                <Link href="/#howitworks" className="nav-link">Sådan virker det</Link>
                <Link href="/#pricing" className="nav-link">Pris</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <Button variant="outline" className="mr-3 border-2" asChild>
                <Link href="/auth/login">Log ind</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/sign-up">Kom i gang</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} size-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} size-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="space-y-1 bg-card px-2 pb-3 pt-2 shadow-lg sm:px-3">
          <Link href="/#features" className="nav-link block text-h4">Funktioner</Link>
          <Link href="/#howitworks" className="nav-link block text-h4">Sådan virker det</Link>
          <Link href="/#pricing" className="nav-link block text-h4">Pris</Link>
          <div className="mt-4 flex flex-col space-y-2 border-t pt-2">
            <Button variant="outline" className="border-2" asChild>
              <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                Log ind
              </Link>
            </Button>
            <Button asChild>
              <Link href="/auth/sign-up" onClick={() => setIsMenuOpen(false)}>
                Kom i gang
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
