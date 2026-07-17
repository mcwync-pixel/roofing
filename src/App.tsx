import { Phone } from 'lucide-react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Emergency from './components/Emergency';
import Steps from './components/Steps';
import Services from './components/Services';
import Faq from './components/Faq';
import RoofingTypes from './components/RoofingTypes';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Blog from './components/Blog';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Emergency />
        <Steps />
        <Services />
        <Faq />
        <RoofingTypes />
        <Gallery />
        <Projects />
        <Blog />
        <QuoteForm />
      </main>
      <Footer />

      <a
        href="tel:12345678"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-3 rounded-full shadow-2xl transition-colors"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Call now</span>
      </a>
    </div>
  );
}

export default App;
