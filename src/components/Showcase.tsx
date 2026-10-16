import { useState } from 'react';
import { Smartphone, Monitor, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl } from '../utils/whatsapp';
import showcaseCorporateImg from '../assets/images/showcase_corporate_1792099398208.jpg';
import showcasePersonalImg from '../assets/images/showcase_personal_1792099397966.jpg';
import { useLanguage } from '../context/LanguageContext';
import { FadeIn, PREMIUM_EASE } from './motion/ScrollMotion';

export default function Showcase() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<'all' | 'corporate' | 'personal'>('all');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const projects = [
    {
      id: 'aurora-enterprise',
      category: 'corporate' as const,
      categoryLabel: t.showcase.projects.aurora.categoryLabel,
      title: t.showcase.projects.aurora.title,
      client: t.showcase.projects.aurora.client,
      image: showcaseCorporateImg,
      description: t.showcase.projects.aurora.description,
      stats: t.showcase.projects.aurora.stats,
      features: t.showcase.projects.aurora.features,
      whatsappMessage: t.showcase.projects.aurora.whatsappMessage,
    },
    {
      id: 'eliza-portfolio',
      category: 'personal' as const,
      categoryLabel: t.showcase.projects.eliza.categoryLabel,
      title: t.showcase.projects.eliza.title,
      client: t.showcase.projects.eliza.client,
      image: showcasePersonalImg,
      description: t.showcase.projects.eliza.description,
      stats: t.showcase.projects.eliza.stats,
      features: t.showcase.projects.eliza.features,
      whatsappMessage: t.showcase.projects.eliza.whatsappMessage,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="proyectos" className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <FadeIn className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-3">
              <span>{t.showcase.kicker}</span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-neutral-500 dark:text-neutral-400">{t.showcase.kickerSub}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
              {t.showcase.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
              {t.showcase.description}
            </p>
          </FadeIn>

          {/* Interactive Filter Tabs */}
          <FadeIn delay={0.1} direction="left" className="flex flex-wrap items-center gap-2">
            <div className="p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'all'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {t.showcase.filterAll}
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('corporate')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'corporate'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {t.showcase.filterCorporate}
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('personal')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'personal'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {t.showcase.filterPersonal}
              </button>
            </div>

            {/* Device preview switch */}
            <div className="p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hidden sm:flex items-center gap-1">
              <button
                type="button"
                onClick={() => setDeviceView('desktop')}
                title="Desktop View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceView === 'desktop' ? 'bg-white dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setDeviceView('mobile')}
                title="Mobile View"
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  deviceView === 'mobile' ? 'bg-white dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 shadow-sm' : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Projects Cards Grid with Framer Motion Layout & Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : idx * 0.12,
                  ease: PREMIUM_EASE,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.25 } }}
                className="bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-shadow duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                {/* Visual Showcase Box */}
                <div>
                  <div
                    className={`w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950 relative border-b border-neutral-200 dark:border-neutral-800/80 transition-all ${
                      deviceView === 'mobile' ? 'p-6 flex justify-center bg-neutral-100/80 dark:bg-neutral-950/90' : ''
                    }`}
                  >
                    <div
                      className={`${
                        deviceView === 'mobile'
                          ? 'max-w-xs w-full aspect-[9/16] rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 overflow-hidden shadow-2xl relative transition-all duration-300'
                          : 'aspect-[16/10] w-full relative transition-all duration-300'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.innerHTML = `
                              <div class="w-full h-full flex flex-col items-center justify-center p-6 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-center">
                                <span class="text-emerald-600 dark:text-emerald-400 font-bold mb-1">${project.title}</span>
                                <span class="text-xs">${project.client}</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Content info */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                        {project.categoryLabel}
                      </span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-mono text-[11px]">
                        {project.stats}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-2">
                      <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                        {project.features.map((feat, featIdx) => (
                          <li key={featIdx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom WhatsApp CTA for this specific project */}
                <div className="p-6 sm:p-8 pt-0">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                    href={getWhatsAppUrl(project.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-neutral-100 hover:bg-emerald-500 hover:text-neutral-950 text-neutral-900 dark:bg-neutral-800 dark:hover:bg-emerald-500 dark:hover:text-neutral-950 dark:text-white transition-colors border border-neutral-200 dark:border-neutral-700/80 hover:border-emerald-400"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{t.showcase.ctaProject}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
