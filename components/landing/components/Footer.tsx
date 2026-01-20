
import { Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 flex items-center text-h3 font-normal tracking-label">
              <Heart className="mr-1 size-5 text-brand-warm" fill="currentColor" strokeWidth={1.5} />
              <span>Partnertid</span>
            </h3>
            <p className="text-body text-background/70">
              Moderne parterapi guidet af AI, baseret på videnskabeligt anerkendte metoder.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-body font-normal tracking-button">Links</h4>
            <ul className="space-y-2 text-body">
              <li><Link href="/#features" className="text-background/70 transition-colors hover:text-background">Funktioner</Link></li>
              <li><Link href="/#howitworks" className="text-background/70 transition-colors hover:text-background">Sådan virker det</Link></li>
              <li><Link href="/#pricing" className="text-background/70 transition-colors hover:text-background">Pris</Link></li>
              <li><a href="#" className="text-background/70 transition-colors hover:text-background">Vilkår og betingelser</a></li>
              <li><a href="#" className="text-background/70 transition-colors hover:text-background">Privatlivspolitik</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-body font-normal tracking-button">Kontakt</h4>
            <p className="mb-2 text-body text-background/70">Har du spørgsmål? Kontakt os.</p>
            <a href="mailto:info@partnertid.dk" className="text-primary transition-colors hover:text-primary/80">
              info@partnertid.dk
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-background/10 pt-8 text-center text-small text-background/50">
          <p>&copy; 2026 Partnertid. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
