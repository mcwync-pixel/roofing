import { Phone, AlertTriangle } from 'lucide-react';

export default function Emergency() {
  return (
    <section className="relative bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0 placeholder-media opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 to-ink-900/80" />
      <div className="container mx-auto relative px-4 py-20 md:py-24 grid lg:grid-cols-3 gap-10 items-center">
        <div className="lg:col-span-2">
          <p className="inline-flex items-center gap-2 text-brand font-semibold text-sm mb-4">
            <AlertTriangle className="w-4 h-4" /> 24/7 Emergency Service
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-5">
            Emergency Roof Repairs – Safe &amp; Reliable, Weather Permitting
          </h2>
          <p className="text-white/85 leading-relaxed mb-4 max-w-2xl">
            We understand that roofing emergencies can happen at any time. Whether it's a severe storm, unexpected
            damage, or a sudden leak, our emergency repair services are here to provide you with swift and reliable
            assistance when you need it the most. Our team of experienced roofing experts is available around the
            clock to address urgent issues, ensuring your property remains safe and protected.
          </p>
          <p className="text-white/85 leading-relaxed max-w-2xl">
            Your peace of mind is our priority, and we're just a phone call away, ready to handle your roofing
            emergencies with the utmost care and professionalism.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="font-display font-bold text-xl mb-2">Emergency Assistance Request</h3>
          <p className="text-white/75 text-sm mb-5">Need quick help? Call us now — we tarp ASAP.</p>
          <a href="tel:12345678" className="inline-flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded-full transition-colors">
            <Phone className="w-4 h-4" /> 12345678
          </a>
        </div>
      </div>
    </section>
  );
}
