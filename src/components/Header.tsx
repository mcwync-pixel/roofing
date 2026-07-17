import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const nav = [
  { label: 'Roofing services', children: ['Roof installation', 'Roof Replacement', 'Roof Repair', 'Gutters and Downpipes Installation', 'Skylight Installation', 'Emergency Roof Repairs'] },
  { label: 'Projects' },
  { label: 'Gallery' },
  { label: 'Blog' },
  { label: 'Contact Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display font-extrabold text-2xl tracking-tight">
            <span className="text-ink-900">1234</span>
            <span className="text-brand">5678</span>
          </span>
          <span className="hidden sm:inline text-xs text-ink-500 font-medium border-l border-gray-200 pl-2 ml-1">
            Roofing Services
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-ink-700 hover:text-brand transition-colors py-2">
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white shadow-xl rounded-lg py-2 min-w-[260px] border border-gray-100">
                    {item.children.map((c) => (
                      <a key={c} href="#services" className="block px-4 py-2 text-sm text-ink-700 hover:bg-brand/10 hover:text-brand transition-colors">
                        {c}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden sm:inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Get free quote
          </a>
          <button
            className="lg:hidden p-2 text-ink-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.map((item) => (
              <a key={item.label} href="#services" className="py-2 text-sm font-semibold text-ink-700 hover:text-brand" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#quote" className="mt-2 inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold text-sm px-5 py-3 rounded-full" onClick={() => setOpen(false)}>
              Get free quote
            </a>
            <a href="tel:12345678" className="flex items-center gap-2 py-2 text-sm text-ink-700">
              <Phone className="w-4 h-4 text-brand" /> 12345678
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
