import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-brand font-semibold text-sm mb-3">Free quote</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink-900 mb-5">
            Get a free roofing quote
          </h2>
          <p className="text-ink-600 leading-relaxed mb-8 max-w-lg">
            Tell us about your roof and we'll get back to you with a clear, no-surprise quote. We stick to the price
            we quote and back every job with photo proof.
          </p>

          <div className="space-y-4">
            <a href="tel:12345678" className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-xs text-ink-500">Call us now</span>
                <span className="font-display font-semibold text-ink-900">12345678</span>
              </span>
            </a>
            <a href="mailto:12345678" className="flex items-center gap-4 group">
              <span className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-xs text-ink-500">Email us</span>
                <span className="font-display font-semibold text-ink-900">12345678</span>
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-xs text-ink-500">Service area</span>
                <span className="font-display font-semibold text-ink-900">12345678, NSW</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </span>
              <span>
                <span className="block text-xs text-ink-500">Hours</span>
                <span className="font-display font-semibold text-ink-900">24/7 Emergency</span>
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" placeholder="John Smith" />
            <Field label="Phone" name="phone" placeholder="04xx xxx xxx" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
            <Field label="Suburb" name="suburb" placeholder="12345678, NSW" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-ink-800 mb-1.5">Service needed</label>
            <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand">
              <option>Roof installation</option>
              <option>Roof Replacement</option>
              <option>Roof Repair</option>
              <option>Gutters and Downpipes Installation</option>
              <option>Skylight Installation</option>
              <option>Emergency Roof Repairs</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-semibold text-ink-800 mb-1.5">Message</label>
            <textarea rows={4} placeholder="Tell us about your roof…" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand" />
          </div>
          <button
            type="submit"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold py-3.5 rounded-full transition-colors"
          >
            {sent ? 'Request sent — we\'ll call you back' : 'Send request'} <Send className="w-4 h-4" />
          </button>
          {sent && (
            <p className="mt-3 text-sm text-center text-green-600 font-medium animate-fade-up">
              Thanks! We'll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink-800 mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand"
      />
    </div>
  );
}
