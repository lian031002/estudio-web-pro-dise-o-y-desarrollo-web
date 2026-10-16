import { Check, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { FadeIn, PREMIUM_EASE } from './motion/ScrollMotion';

export default function PricingPlans() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const plans = [
    {
      id: 'personal',
      name: t.plans.personal.name,
      tagline: t.plans.personal.tagline,
      popular: false,
      deliveryTime: t.plans.personal.deliveryTime,
      features: t.plans.personal.features,
      whatsappPreset: t.plans.personal.whatsappMessage,
      buttonText: t.plans.personal.buttonText,
    },
    {
      id: 'corporate',
      name: t.plans.corporate.name,
      tagline: t.plans.corporate.tagline,
      popular: true,
      deliveryTime: t.plans.corporate.deliveryTime,
      features: t.plans.corporate.features,
      whatsappPreset: t.plans.corporate.whatsappMessage,
      buttonText: t.plans.corporate.buttonText,
    },
    {
      id: 'catalog',
      name: t.plans.catalog.name,
      tagline: t.plans.catalog.tagline,
      popular: false,
      deliveryTime: t.plans.catalog.deliveryTime,
      features: t.plans.catalog.features,
      whatsappPreset: t.plans.catalog.whatsappMessage,
      buttonText: t.plans.catalog.buttonText,
    },
  ];

  return (
    <section id="planes" className="py-20 lg:py-28 bg-white dark:bg-neutral-900/40 border-b border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-3">
            <span>{t.plans.kicker}</span>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-neutral-500 dark:text-neutral-400">{t.plans.kickerSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            {t.plans.title}
          </h2>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
            {t.plans.description}
          </p>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : idx * 0.12,
                ease: PREMIUM_EASE,
              }}
              whileHover={shouldReduceMotion ? {} : { y: plan.popular ? -10 : -4, transition: { duration: 0.25 } }}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-shadow duration-300 relative ${
                plan.popular
                  ? 'bg-neutral-50 dark:bg-neutral-900 border-2 border-emerald-500 dark:border-emerald-400/80 shadow-xl dark:shadow-2xl dark:shadow-emerald-950/30 lg:-translate-y-2'
                  : 'bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-emerald-400 text-neutral-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>{t.plans.recommendedBadge}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="pb-5 border-b border-neutral-200 dark:border-neutral-800">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>
                  <div className="mt-4 text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span>⚡ {plan.deliveryTime}</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="py-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                    {t.plans.includesTitle}
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom WhatsApp CTA */}
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
                <motion.a
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                  href={getWhatsAppUrl(plan.whatsappPreset)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-emerald-400 hover:bg-emerald-300 text-neutral-950 shadow-md'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
