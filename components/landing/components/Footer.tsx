
import { Heart } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-light tracking-wider mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-1 text-brand-warm" fill="#E9985A" strokeWidth={1.5} />
              <span>Partnertid</span>
            </h3>
            <p className="text-gray-400 font-body text-lg">
              Moderne parterapi guidet af AI, baseret på videnskabeligt anerkendte metoder.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">Links</h4>
            <ul className="space-y-2 font-body text-lg">
              <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Funktioner</Link></li>
              <li><Link href="/#howitworks" className="text-gray-400 hover:text-white transition-colors">Sådan virker det</Link></li>
              <li><Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pris</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vilkår og betingelser</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privatlivspolitik</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-4">Kontakt</h4>
            <p className="text-gray-400 mb-2 font-body text-lg">Har du spørgsmål? Kontakt os.</p>
            <a href="mailto:info@partnertid.dk" className="text-primary hover:text-primary/80 transition-colors font-body">
              info@partnertid.dk
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm font-body">
          <p>&copy; 2026 Partnertid. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
