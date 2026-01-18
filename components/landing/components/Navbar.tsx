"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';
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
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <Heart className="h-5 w-5 mr-1 text-brand-warm" strokeWidth={2} />
                <span className="text-xl font-cormorant font-medium tracking-wider text-primary">Partnertid</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="nav-link">Funktioner</a>
                <a href="#howitworks" className="nav-link">Sådan virker det</a>
                <a href="#pricing" className="nav-link">Pris</a>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
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
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#features" className="nav-link block font-semibold text-xl">Funktioner</a>
          <a href="#howitworks" className="nav-link block font-semibold text-xl">Sådan virker det</a>
          <a href="#pricing" className="nav-link block font-semibold text-xl">Pris</a>
          <div className="mt-4 flex flex-col space-y-2 pt-2 border-t">
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
