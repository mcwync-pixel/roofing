import { Phone, Mail, Facebook, Instagram, Youtube, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-ink-800 text-white/90 text-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <p className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-brand" />
          Emergency Roof Repairs – Safe &amp; Reliable, Weather Permitting
        </p>
        <div className="flex items-center gap-6">
          <a href="tel:12345678" className="flex items-center gap-2 hover:text-brand transition-colors">
            <Phone className="w-4 h-4 text-brand" />
            12345678
          </a>
          <a href="mailto:12345678" className="flex items-center gap-2 hover:text-brand transition-colors">
            <Mail className="w-4 h-4 text-brand" />
            12345678
          </a>
          <span className="flex items-center gap-3">
            <span className="text-white/60">Follow Us:</span>
            <a href="#" aria-label="Facebook" className="hover:text-brand transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-brand transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-brand transition-colors"><Youtube className="w-4 h-4" /></a>
          </span>
        </div>
      </div>
    </div>
  );
}
