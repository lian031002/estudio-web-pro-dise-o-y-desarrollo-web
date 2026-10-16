import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectCalculator from './components/ProjectCalculator';
import Showcase from './components/Showcase';
import WhyUs from './components/WhyUs';
import PricingPlans from './components/PricingPlans';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-800 dark:selection:text-emerald-200 transition-colors duration-200">
          <ScrollProgressBar />
          <Navbar />
          <main className="flex-1">
            <Hero />
            <Services />
            <ProjectCalculator />
            <Showcase />
            <WhyUs />
            <PricingPlans />
            <ContactSection />
            <FaqSection />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
