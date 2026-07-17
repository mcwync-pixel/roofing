import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0 placeholder-media dark opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/70 to-transparent" />

      <div className="container mx-auto relative px-4 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-brand font-semibold text-sm mb-5 animate-fade-up">
            <span className="w-8 h-px bg-brand" />
            12345678
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 animate-fade-up" style={{ animationDelay: '0.05s' }}>
            Specializing in all aspects of roofing
          </h1>
          <p className="text-lg text-white/85 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Licensed. Insured. HBCF-covered. Sleep easy when it rains.
          </p>
          <div className="flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              Free quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:12345678"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-brand hover:text-brand text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" /> 12345678
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand" /> Licence 12345678</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand" /> $20M Public Liability</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand" /> HBCF covered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
