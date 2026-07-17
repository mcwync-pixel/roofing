import { ArrowRight, Images } from 'lucide-react';

const gallery = Array.from({ length: 8 }, (_, i) => i + 11);

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-brand font-semibold text-sm mb-3">Our work in photos</p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink-900 flex items-center gap-3">
              <Images className="w-8 h-8 text-brand" /> Gallery
            </h2>
          </div>
          <a href="#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light">
            View full gallery <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <div key={g} className="placeholder-media aspect-square rounded-xl shadow-sm hover:shadow-lg transition-shadow group cursor-pointer">
              <span className="absolute bottom-3 right-3 z-10 bg-white/90 text-ink-800 text-xs font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Project {g}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
