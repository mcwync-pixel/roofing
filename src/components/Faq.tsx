import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Can you come on weekends or after hours?', a: 'Yes. Emergencies don’t wait. We tarp asap where access and weather allow.' },
  { q: 'Will you deal with my insurer or strata?', a: 'Yes. We provide photo evidence, scope of works and can speak with your insurer/strata manager to speed things up.' },
  { q: 'Do you charge extra once the job starts?', a: 'No surprise charges. If hidden damage appears (e.g., rotten timber), we’ll show photos and price it before proceeding.' },
  { q: 'What deposit do you take? How do I pay?', a: 'Staged payments tied to milestones. For jobs over AUD 20k we arrange HBCF cover and follow NSW payment rules.' },
  { q: 'Are you licensed and insured?', a: 'Yes — NSW Contractor Licence 12345678 and current Public Liability Insurance AUD $20 million. Certificates available on request.' },
  { q: 'Do you really clean up? What about nails?', a: 'Zero-Mess Promise. We magnet-sweep for nails, collect offcuts and leaf debris, and leave paths and driveways tidy. Final photos included.' },
  { q: 'Will the fix actually last?', a: 'For non-structural repairs we provide a 2-year workmanship warranty; for structural work — 6-year (per NSW Home Building Act). Materials follow manufacturer warranties.' },
  { q: 'Do I need gutter guards?', a: 'Sometimes. They pay back on leaf-heavy streets; otherwise, an annual clean is smarter. We’ll recommend only if it saves you money.' },
  { q: 'Can you start if it’s raining?', a: 'We can tarp and make safe in most conditions. Permanent repairs happen when it’s dry enough to be safe and compliant.' },
  { q: 'What does a ‘free roof check’ include?', a: 'Visual inspection, photos, basic moisture check and a clear quote. If invasive testing is required, we’ll discuss options first.' },
  { q: 'Do you use subcontractors?', a: 'Core work is done by our in-house crew. Where specialists are needed (e.g., scaffold), we supervise and take full responsibility.' },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="placeholder-media aspect-square rounded-2xl shadow-lg" />
            <div className="placeholder-media aspect-square rounded-2xl shadow-lg mt-8" />
          </div>
        </div>
        <div>
          <p className="text-brand font-semibold text-sm mb-3">Useful and interesting</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink-900 mb-2">About roofing</h2>
          <p className="text-ink-500 mb-8">FAQ</p>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display font-semibold text-ink-800 text-sm md:text-base">{f.q}</span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-sm text-ink-600 leading-relaxed animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
