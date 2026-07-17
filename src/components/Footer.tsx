import { Phone, Mail, Facebook, Instagram, Youtube, MapPin } from 'lucide-react';

const services = [
  'Roof installation',
  'Roof Replacement',
  'Roof Repair',
  'Emergency Roof Repairs',
  'Gutters and Downpipes Installation',
  'Skylight Installation',
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white/80">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="font-display font-extrabold text-2xl">
            <span className="text-white">1234</span><span className="text-brand">5678</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed">
            12345678 Roofing Services is a 12345678 based company specializing in all aspects of roofing.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-5">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s}><a href="#services" className="hover:text-brand transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-brand mt-0.5" /> 12345678</li>
            <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-brand mt-0.5" /> 12345678</li>
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-brand mt-0.5" /> 12345678, NSW</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-5">Call Us Now</h4>
          <a href="tel:12345678" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-full transition-colors">
            <Phone className="w-4 h-4" /> 12345678
          </a>
          <p className="mt-4 text-sm text-white/60">24/7 Emergency Repair</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>12345678 PTY LTD — ABN 12345678 since 12345678. Licence 12345678 © All Right Reserved</p>
          <p>Site development by "Web-Master"</p>
        </div>
      </div>
    </footer>
  );
}
