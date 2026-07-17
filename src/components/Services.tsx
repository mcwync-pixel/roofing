import { ArrowRight, Hammer, RefreshCw, Droplets, Sun, Wrench } from 'lucide-react';

const services = [
  { n: '1', icon: Hammer, title: 'Roof installation', desc: 'We specialize in professional roof installation services to ensure that your property remains safe, secure, and aesthetically pleasing.' },
  { n: '2', icon: RefreshCw, title: 'Roof Replacement', desc: 'We specialize in providing top-notch roof replacement services to homeowners and businesses. A well-maintained roof is essential for the protection of your property and the safety of those inside.' },
  { n: '3', icon: Droplets, title: 'Gutters and Downpipes Installation', desc: 'We understand the importance of efficient water management, and we offer professional gutters and downpipes installation services that will keep your property safe and dry.' },
  { n: '4', icon: Sun, title: 'Skylight Installation', desc: 'Skylights are a fantastic way to introduce natural light and fresh air into your interior spaces while enhancing the aesthetic appeal of your home.' },
  { n: '5', icon: Wrench, title: 'Roof Repair', desc: 'Our expert roof repair services are designed to restore the integrity and functionality of your roof, ensuring your home or business stays safe and dry.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0 placeholder-media opacity-25" />
      <div className="absolute inset-0 bg-ink-900/80" />
      <div className="container mx-auto relative px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-brand font-semibold text-sm mb-3">12345678 is 12345678 based company</p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl">
              Specializing in all aspects of roofing
            </h2>
          </div>
          <a href="#quote" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light">
            More about services <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.n} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display font-extrabold text-2xl text-brand">{s.n}</span>
                <div className="w-11 h-11 rounded-xl bg-brand/15 text-brand flex items-center justify-center">
                  <s.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{s.desc}</p>
            </div>
          ))}
          <div className="rounded-2xl p-6 bg-brand text-white flex flex-col justify-center items-center text-center">
            <h3 className="font-display font-bold text-xl mb-2">Need a custom quote?</h3>
            <p className="text-white/90 text-sm mb-4">Tell us about your roof and we'll be in touch today.</p>
            <a href="#quote" className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors">
              Get free quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
