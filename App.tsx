import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import PromoMudanza from './components/PromoMudanza';
import About from './components/About';
import LogisticsSecurity from './components/LogisticsSecurity';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-charcoal overflow-x-hidden selection:bg-brand-gold selection:text-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <PromoMudanza />
        <Services />
        <About />
        <LogisticsSecurity />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </div>
  );
};

export default App;