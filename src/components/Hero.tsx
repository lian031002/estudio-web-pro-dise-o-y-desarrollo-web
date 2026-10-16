import { MessageCircle, ArrowRight, Smartphone, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_PRESETS } from '../utils/whatsapp';
import heroAgencyImg from '../assets/images/hero_web_agency_1792099397098.jpg';
import brandInsigniaImg from '../assets/images/brand_insignia_1792100215943.jpg';
import { useLanguage } from '../context/LanguageContext';
import { PREMIUM_EASE } from './motion/ScrollMotion';

export default function Hero() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Motion variants for orchestrated cascade
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: PREMIUM_EASE,
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-neutral-200 dark:border-neutral-900">
      {/* Background radial gradient accent */}
      <motion.div 
        aria-hidden="true" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div 
            className="lg:col-span-7 space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Quiet Editorial Kicker */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="tracking-wide uppercase">{t.hero.kicker}</span>
              <span aria-hidden="true" className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-neutral-500 dark:text-neutral-400">{t.hero.kickerSub}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.1] max-w-2xl">
              {t.hero.titlePart1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
                {t.hero.titleGradient}
              </span>
            </motion.h1>

            {/* Value Proposition Paragraph */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              {t.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href={getWhatsAppUrl(WHATSAPP_PRESETS.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-lg shadow-emerald-500/10 dark:shadow-emerald-950/40 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t.hero.ctaWhatsapp}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                href="#cotizador"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-neutral-700 hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-300/80 dark:border-neutral-800 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>{t.hero.ctaCalculator}</span>
              </motion.a>
            </motion.div>

            {/* Human Editorial Proof & Metadata Strip */}
            <motion.div 
              variants={itemVariants} 
              className="pt-4 border-t border-neutral-200 dark:border-neutral-900 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
            >
              <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.hero.proofMobile}</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.hero.proofSpeed}</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.hero.proofDirect}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Asset & Floating Showcase Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: PREMIUM_EASE }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl">
              {/* Image Frame with fallback */}
              <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 relative">
                <img
                  src={heroAgencyImg}
                  alt="Estudio de diseño web profesional con pantallas y diseño responsivo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400">
                          <span class="text-emerald-600 dark:text-emerald-400 font-bold text-lg mb-2">Batista · Web Studio</span>
                          <span class="text-xs text-center">Diseño y desarrollo web a medida para marcas y empresas</span>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 dark:from-neutral-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Brand Insignia Seal */}
              <motion.div 
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.45, ease: PREMIUM_EASE }}
                className="absolute top-4 left-4 z-10 flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-neutral-950/85 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-800/90 shadow-lg"
              >
                <img
                  src={brandInsigniaImg}
                  alt="Batista Web Studio Insignia"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 rounded-lg object-cover border border-emerald-500/40"
                />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-neutral-900 dark:text-white tracking-wide">BATISTA</span>
                  <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono tracking-wider -mt-0.5">WEB STUDIO</span>
                </div>
              </motion.div>

              {/* Inset Badge Overlay */}
              <motion.div 
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55, ease: PREMIUM_EASE }}
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-white/90 dark:bg-neutral-950/80 border border-neutral-200/90 dark:border-neutral-800/90 text-xs shadow-md"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    {t.hero.badgeTitle}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] tabular-nums font-semibold">
                    {t.hero.badgeResponsive}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-snug">
                  {t.hero.badgeDesc}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
