import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_PRESETS } from '../utils/whatsapp';
import BrandLogo from './BrandLogo';
import { useLanguage } from '../context/LanguageContext';
import { PREMIUM_EASE } from './motion/ScrollMotion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-neutral-100/60 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 py-12 lg:py-16 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: PREMIUM_EASE }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-200 dark:border-neutral-900"
        >
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo size="lg" showSubtitle={true} />
            <p className="text-neutral-600 dark:text-neutral-400 max-w-sm text-xs leading-relaxed">
              {t.footer.description}
            </p>
            <div className="pt-1 text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
              <span>{t.footer.contactOfficial}</span>
              <a
                href={getWhatsAppUrl(WHATSAPP_PRESETS.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-mono font-medium"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <div className="font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider">
              {t.footer.navTitle}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {t.nav.plans}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="space-y-3">
            <div className="font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider">
              {t.footer.channelsTitle}
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getWhatsAppUrl(WHATSAPP_PRESETS.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.contact.callTitle}</span>
                </a>
              </li>
              <li className="text-neutral-600 dark:text-neutral-300 pt-1">
                {t.footer.internationalNote}
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            © {currentYear} {t.footer.copyright}
          </div>
          <div className="flex items-center gap-4">
            <span>{t.footer.responsiveNote}</span>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-emerald-600 dark:text-emerald-400/90 font-mono font-medium">100% Mobile Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
