import { ArrowRight } from 'lucide-react';

const projects = Array.from({ length: 5 }, (_, i) => i + 1);

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28 bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0 placeholder-media opacity-25" />
      <div className="absolute inset-0 bg-ink-900/85" />
      <div className="container mx-auto relative px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-brand font-semibold text-sm mb-3">Our company's life</p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl">Projects</h2>
          </div>
          <a href="#quote" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light">
            More about projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand/40 transition-colors">
              <div className="placeholder-media aspect-[4/3] relative">
                <span className="absolute bottom-3 left-3 z-10 bg-brand text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  Project {p}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg mb-2">Roofing Project #{p}</h3>
                <p className="text-sm text-white/70">12345678, NSW — professional installation with photo proof and warranty.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
