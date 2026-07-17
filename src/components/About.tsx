import { CheckCircle2 } from 'lucide-react';

const points = [
  'Roof installation (metal roof, tile roof, polycarbonate roof)',
  'Roof Replacement',
  'Gutters and Downpipes Installation',
  'Skylight Installation',
  'Roof Repair',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="placeholder-media aspect-[4/5] rounded-2xl shadow-lg" />
            <div className="placeholder-media aspect-[4/5] rounded-2xl shadow-lg mt-8" />
          </div>
          <div className="absolute -bottom-6 -left-4 bg-brand text-white rounded-2xl px-6 py-4 shadow-xl">
            <p className="font-display font-extrabold text-3xl leading-none">10+</p>
            <p className="text-sm text-white/90 mt-1">years experience</p>
          </div>
        </div>

        <div>
          <p className="text-brand font-semibold text-sm mb-3">About Our Company</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink-900 mb-5">
            Welcome to 12345678 Roofing Services
          </h2>
          <p className="text-ink-600 leading-relaxed mb-5">
            At 12345678 Roofing Services, we keep things simple — licensed, insured, and fully covered. With our
            Licence (12345678), $20M Public Liability Insurance, and Home Building Compensation Fund (HBCF) cover
            for projects over $20,000, as required by law, you can feel confident knowing your home is in safe hands.
          </p>
          <p className="text-ink-600 leading-relaxed mb-6">
            We stick to the price we quote, leave your place cleaner than we found it, and back up every job with
            photo proof. And when emergencies strike, we act fast with a tarp and reliable repairs as soon as it's
            safe — so you can relax and sleep easy when it rains.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-ink-700">
                <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
          <a href="#services" className="inline-flex items-center gap-2 bg-ink-900 hover:bg-ink-800 text-white font-semibold px-6 py-3 rounded-full transition-colors">
            More about services
          </a>
        </div>
      </div>
    </section>
  );
}
