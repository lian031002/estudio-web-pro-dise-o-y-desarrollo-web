import { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_PRESETS } from '../utils/whatsapp';
import BrandLogo from './BrandLogo';
import { useLanguage } from '../context/LanguageContext';
import { PREMIUM_EASE } from './motion/ScrollMotion';

export default function FloatingWhatsApp() {
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Quick popup options with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: PREMIUM_EASE }}
            className="mb-3 w-72 sm:w-80 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 shadow-xl dark:shadow-2xl text-xs space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800">
              <BrandLogo size="sm" />
              <button
                onClick={() => setShowPopup(false)}
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white p-1 transition-colors cursor-pointer"
                aria-label="Cerrar ventana"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 leading-snug">
              {t.floating.greeting}
            </p>

            <div className="space-y-1.5">
              <a
                href={getWhatsAppUrl(t.services.items.corporate.whatsappMessage || WHATSAPP_PRESETS.empresarial)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-950 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <span>{t.floating.optionCorporate}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </a>
              <a
                href={getWhatsAppUrl(t.services.items.personal.whatsappMessage || WHATSAPP_PRESETS.personal)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-950 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <span>{t.floating.optionPersonal}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </a>
              <a
                href={getWhatsAppUrl(WHATSAPP_PRESETS.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-950 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <span>{t.floating.optionGeneral}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-neutral-500 dark:text-neutral-400 text-center">
              {t.floating.responseDirect}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        <AnimatePresence>
          {!showPopup && (
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-200 shadow-md"
            >
              {t.floating.buttonLabel}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
          onClick={() => setShowPopup(!showPopup)}
          aria-label={t.floating.buttonLabel}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center shadow-xl shadow-emerald-500/20 dark:shadow-emerald-950/50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950 cursor-pointer"
        >
          <motion.div
            key={showPopup ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {showPopup ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <MessageCircle className="w-7 h-7 fill-current" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
