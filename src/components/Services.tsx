import { UserCheck, Building2, Rocket, RefreshCw, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { FadeIn, PREMIUM_EASE } from './motion/ScrollMotion';

export default function Services() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      id: 'personal',
      editorialNumber: '01',
      title: t.services.items.personal.title,
      target: t.services.items.personal.target,
      description: t.services.items.personal.description,
      features: t.services.items.personal.features,
      whatsappPreset: t.services.items.personal.whatsappMessage,
      buttonText: t.services.items.personal.buttonText,
      icon: UserCheck,
      highlight: false,
    },
    {
      id: 'corporate',
      editorialNumber: '02',
      title: t.services.items.corporate.title,
      target: t.services.items.corporate.target,
      description: t.services.items.corporate.description,
      features: t.services.items.corporate.features,
      whatsappPreset: t.services.items.corporate.whatsappMessage,
      buttonText: t.services.items.corporate.buttonText,
      icon: Building2,
      highlight: true,
    },
    {
      id: 'landing',
      editorialNumber: '03',
      title: t.services.items.landing.title,
      target: t.services.items.landing.target,
      description: t.services.items.landing.description,
      features: t.services.items.landing.features,
      whatsappPreset: t.services.items.landing.whatsappMessage,
      buttonText: t.services.items.landing.buttonText,
      icon: Rocket,
      highlight: false,
    },
    {
      id: 'maintenance',
      editorialNumber: '04',
      title: t.services.items.maintenance.title,
      target: t.services.items.maintenance.target,
      description: t.services.items.maintenance.description,
      features: t.services.items.maintenance.features,
      whatsappPreset: t.services.items.maintenance.whatsappMessage,
      buttonText: t.services.items.maintenance.buttonText,
      icon: RefreshCw,
      highlight: false,
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with FadeIn & Slide-up */}
        <FadeIn className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-3">
            <span>{t.services.kicker}</span>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-neutral-500 dark:text-neutral-400">{t.services.kickerSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            {t.services.description}
          </p>
        </FadeIn>

        {/* Services Grid (Staggered scroll reveal) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: PREMIUM_EASE,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-shadow duration-300 ${
                  service.highlight
                    ? 'bg-neutral-50 dark:bg-neutral-900/90 border border-emerald-500/50 shadow-md shadow-emerald-500/5 dark:shadow-xl dark:shadow-emerald-950/20'
                    : 'bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/90 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar inside card: Editorial Number & Target */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400">
                        {service.editorialNumber}
                      </span>
                    </div>
                    {service.highlight && (
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/50 px-2.5 py-1 rounded-md">
                        {t.services.mostPopular}
                      </span>
                    )}
                  </div>

                  {/* Title & Target */}
                  <div className="mt-5 space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400/90 font-medium">
                      {service.target}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables / Features List */}
                  <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800/70">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                      {t.services.includesTitle}
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Link to WhatsApp */}
                <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-neutral-800">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                    href={getWhatsAppUrl(service.whatsappPreset)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      service.highlight
                        ? 'bg-emerald-400 hover:bg-emerald-300 text-neutral-950 shadow-md'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{service.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
