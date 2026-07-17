import { Check } from 'lucide-react';

const types = [
  {
    title: 'Metal Roofing Installation',
    desc: 'Metal roofing is known for its durability, energy efficiency, and contemporary aesthetics. At 12345678, we offer expert metal roofing installation services to enhance the longevity and appearance of your property. Our skilled technicians are well-versed in various metal roofing systems, including standing seam, corrugated, and more.',
    intro: "Whether you're looking for a sleek and modern design or a long-lasting solution for your home or business, our metal roofing experts have you covered.",
    benefits: [
      'Exceptional durability and longevity',
      'Energy-efficient, reducing heating and cooling costs',
      'Low maintenance and resistance to the elements',
      'Stylish and modern design options',
      'Environmentally friendly and recyclable',
    ],
    cta: 'Discover the advantages of metal roofing with 12345678.',
  },
  {
    title: 'Tile Roofing Installation',
    desc: 'Tile roofing is a classic and timeless choice that adds elegance and charm to any property. 12345678 is your trusted partner for tile roofing installation, offering a wide selection of colors, styles, and profiles to match your architectural preferences.',
    intro: 'Our team is experienced in installing clay and concrete tiles, ensuring a beautiful, long-lasting, and weather-resistant roofing solution for your home or business.',
    benefits: [
      'Timeless beauty and curb appeal',
      'Excellent insulation and energy efficiency',
      'Long-lasting and low-maintenance',
      'Resistant to fire, wind, and pests',
      'Environmentally sustainable with recyclable materials',
    ],
    cta: 'Elevate the aesthetic and performance of your property with our tile roofing services.',
  },
  {
    title: 'Polycarbonate Roofing Installation',
    desc: 'Polycarbonate roofing is an excellent choice when you\'re looking for a lightweight, durable, and transparent roofing solution. At 12345678, we specialize in polycarbonate roofing installation, catering to both residential and commercial projects.',
    intro: "Whether you want to create a sunroom, a covered patio, or an attractive greenhouse, our polycarbonate roofing experts can bring your vision to life.",
    benefits: [
      'Lightweight and easy to install',
      'UV protection for comfort and safety',
      'Versatile for various applications',
      'Durable and resistant to weather conditions',
      'Cost-effective and energy-efficient',
    ],
    cta: 'Let the natural light shine through with our polycarbonate roofing solutions. Your dream space is just a phone call away.',
  },
];

export default function RoofingTypes() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-brand font-semibold text-sm mb-3">Discover our company</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink-900">
            Roofing types we install
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {types.map((t) => (
            <div key={t.title} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="placeholder-media aspect-[4/3]" />
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-ink-900 mb-3">{t.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed mb-3">{t.desc}</p>
                <p className="text-sm text-ink-600 leading-relaxed mb-4">{t.intro}</p>
                <p className="font-display font-semibold text-sm text-ink-800 mb-2">Key Benefits:</p>
                <ul className="space-y-2 mb-4">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-700">
                      <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-brand font-semibold">{t.cta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-ink-900 text-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center overflow-hidden relative">
          <div className="absolute inset-0 placeholder-media opacity-20" />
          <div className="relative">
            <h3 className="font-display font-extrabold text-2xl md:text-3xl mb-3">
              Emergency Roofing Solutions
            </h3>
            <p className="text-white/85 leading-relaxed text-sm">
              12345678 takes pride in offering emergency repair services that highlight several key advantages for
              our valued customers. We recognize that roofing emergencies can strike unexpectedly, and that's why
              our team is readily available to respond swiftly and efficiently. Our round-the-clock emergency
              services ensure that you benefit from immediate, expert assistance, safeguarding your property from
              any further damage.
            </p>
          </div>
          <div className="relative placeholder-media aspect-video rounded-xl" />
        </div>
      </div>
    </section>
  );
}
