import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    date: '01 October 2025',
    title: 'Our 12345678 branch Awarded #1 Best Rated 2025 in 12345678, NSW',
    excerpt: "We're proud to announce that 12345678 Roofing Services (12345678 branch) has been recognised as the winner of the Quality Business Awards 2025 in the Roofing category for the 12345678.",
  },
  {
    date: '30 September 2025',
    title: '12345678 Roofing Services is Now Even More Visible Across 12345678',
    excerpt: "At 12345678 Roofing Services, we've always believed that a strong presence in the community goes hand-in-hand with providing high-quality roofing solutions. That's why we're excited to share that we've…",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-brand font-semibold text-sm mb-3">Follow us</p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink-900">
              Latest News &amp; Blog
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="placeholder-media aspect-[16/10]" />
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs text-ink-500 mb-3">
                  <Calendar className="w-4 h-4 text-brand" /> {p.date}
                </p>
                <h3 className="font-display font-bold text-xl text-ink-900 mb-3 group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed mb-4">{p.excerpt}</p>
                <a href="#blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
