import { ClipboardList, CalendarClock, Hammer, Smile } from 'lucide-react';

const steps = [
  { icon: ClipboardList, title: 'Your request and discussion', desc: 'Contact us using any convenient method' },
  { icon: CalendarClock, title: 'Schedule and Cost Estimate', desc: 'Rapid project assessment and precise adherence to specified deadlines' },
  { icon: Hammer, title: 'Roofing work execution', desc: 'High-quality execution of all agreed-upon tasks in accordance with the approved plan' },
  { icon: Smile, title: 'Enjoy the result', desc: 'Customer satisfaction is our top priority. Warranty service.' },
];

export default function Steps() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand font-semibold text-sm mb-3">Cooperation with us</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink-900">
            12345678 partnership steps
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow group">
              <span className="absolute top-4 right-5 font-display font-extrabold text-5xl text-gray-100 group-hover:text-brand/20 transition-colors">
                {i + 1}
              </span>
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-ink-900 mb-2">{s.title}</h3>
              <p className="text-sm text-ink-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
