import { useState } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_PRESETS } from '../utils/whatsapp';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { PREMIUM_EASE } from './motion/ScrollMotion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-neutral-950/85 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4 sm:gap-8">
          {/* Zone 1: Brand Wordmark with Creative Logo */}
          <a
            href="#"
            className="flex items-center hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 focus:outline-none"
          >
            <BrandLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Single-line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            <a href="#servicios" className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {t.nav.services}
            </a>
            <a href="#proyectos" className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {t.nav.projects}
            </a>
            <a href="#cotizador" className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {t.nav.calculator}
            </a>
            <a href="#planes" className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {t.nav.plans}
            </a>
            <a href="#faq" className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0">
              {t.nav.faq}
            </a>
          </nav>

          {/* Zone 3: Actions (Language Selector + Theme Toggle + Primary WhatsApp Action) */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <LanguageSelector />
            <ThemeToggle />
            <motion.a
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              href={getWhatsAppUrl(WHATSAPP_PRESETS.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.nav.whatsappDirect}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </motion.a>
          </div>

          {/* Mobile actions: Language selector + theme toggle + hamburger button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <LanguageSelector />
            <ThemeToggle />
            <a
              href={getWhatsAppUrl(WHATSAPP_PRESETS.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown sheet with Framer Motion slide-down */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: PREMIUM_EASE }}
            className="lg:hidden overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-3"
          >
            <nav className="flex flex-col space-y-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {t.nav.services}
              </a>
              <a
                href="#proyectos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {t.nav.projects}
              </a>
              <a
                href="#cotizador"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {t.nav.calculator}
              </a>
              <a
                href="#planes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {t.nav.plans}
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {t.nav.faq}
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800/80 space-y-3">
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-between px-3 py-1 text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">{t.nav.interfaceLanguage}</span>
                <LanguageSelector variant="segmented" />
              </div>

              {/* Mobile Theme Switcher */}
              <div className="flex items-center justify-between px-3 py-1 text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-medium">{t.nav.interfaceTheme}</span>
                <ThemeToggle showLabel={true} />
              </div>

              <a
                href={getWhatsAppUrl(WHATSAPP_PRESETS.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.nav.whatsappDirect} ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
