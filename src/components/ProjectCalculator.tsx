import { useState } from 'react';
import { Calculator, MessageCircle, ArrowRight, Check, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { FadeIn, PREMIUM_EASE } from './motion/ScrollMotion';

export default function ProjectCalculator() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const [projectType, setProjectType] = useState<'corporate' | 'personal' | 'landing' | 'catalog'>('corporate');
  const [pageScope, setPageScope] = useState<'onepage' | 'standard' | 'extended'>('standard');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([
    'whatsapp_direct',
    'brand_identity',
    'seo_optimization',
    'mobile_first',
  ]);

  const extraIds = [
    { id: 'brand_identity', baseDays: 1 },
    { id: 'whatsapp_direct', baseDays: 0 },
    { id: 'mobile_first', baseDays: 0 },
    { id: 'seo_optimization', baseDays: 1 },
    { id: 'domain_hosting', baseDays: 1 },
    { id: 'catalog_filter', baseDays: 2 },
    { id: 'custom_form', baseDays: 1 },
  ] as const;

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((item) => item !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  // Delivery time calculation
  const getDeliveryTime = () => {
    let days = 3;
    if (projectType === 'corporate') days += 2;
    if (projectType === 'catalog') days += 3;
    if (projectType === 'landing') days = 2;

    if (pageScope === 'standard') days += 2;
    if (pageScope === 'extended') days += 4;

    const extrasDays = selectedExtras.reduce((acc, curr) => {
      const feat = extraIds.find((f) => f.id === curr);
      return acc + (feat?.baseDays || 0);
    }, 0);

    const totalDays = days + Math.floor(extrasDays * 0.5);
    return `${totalDays} - ${totalDays + 3} ${t.calculator.daysUnit}`;
  };

  const getTypeName = () => {
    return t.calculator.types[projectType]?.label || '';
  };

  const getScopeName = () => {
    const scopeObj = t.calculator.scopes[pageScope];
    return scopeObj ? `${scopeObj.label} (${scopeObj.pages})` : '';
  };

  const generateWhatsAppMessage = () => {
    const extrasList = selectedExtras
      .map((id) => {
        const extraKey = id as keyof typeof t.calculator.extras;
        const feat = t.calculator.extras[extraKey];
        return `• ${feat?.name || id}`;
      })
      .join('\n');

    return `${t.calculator.whatsappMsgIntro}

📌 *${t.calculator.whatsappMsgType}* ${getTypeName()}
📄 *${t.calculator.whatsappMsgScope}* ${getScopeName()}
⏳ *${t.calculator.whatsappMsgDelivery}* ${getDeliveryTime()}

🛠 *${t.calculator.whatsappMsgExtras}*
${extrasList}

${t.calculator.whatsappMsgOutro}`;
  };

  return (
    <section id="cotizador" className="py-20 lg:py-28 bg-neutral-50 dark:bg-neutral-900/30 border-b border-neutral-200 dark:border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with FadeIn & Slide-up */}
        <FadeIn className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-3">
            <Calculator className="w-4 h-4" />
            <span>{t.calculator.kicker}</span>
            <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
            <span className="text-neutral-500 dark:text-neutral-400">{t.calculator.kickerSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            {t.calculator.description}
          </p>
        </FadeIn>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Left - 7 cols) with Slide-Up */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
            transition={{ duration: 0.65, ease: PREMIUM_EASE }}
            className="lg:col-span-7 space-y-8 bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            {/* Step 1: Tipo de Proyecto */}
            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                {t.calculator.step1Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['corporate', 'personal', 'landing', 'catalog'] as const).map((id) => {
                  const option = t.calculator.types[id];
                  const isSelected = projectType === id;
                  return (
                    <motion.button
                      whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                      key={id}
                      type="button"
                      onClick={() => setProjectType(id)}
                      className={`text-left p-4 rounded-xl border transition-colors text-xs sm:text-sm cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-100 dark:bg-neutral-800 border-emerald-500 text-neutral-950 dark:text-white shadow-sm ring-1 ring-emerald-500/50'
                          : 'bg-neutral-50 dark:bg-neutral-900/80 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="font-semibold text-neutral-900 dark:text-white">{option.label}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{option.desc}</div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Estructura de Páginas */}
            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                {t.calculator.step2Title}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['onepage', 'standard', 'extended'] as const).map((id) => {
                  const option = t.calculator.scopes[id];
                  const isSelected = pageScope === id;
                  return (
                    <motion.button
                      whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                      key={id}
                      type="button"
                      onClick={() => setPageScope(id)}
                      className={`text-center p-3.5 rounded-xl border transition-colors text-xs sm:text-sm cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-100 dark:bg-neutral-800 border-emerald-500 text-neutral-950 dark:text-white ring-1 ring-emerald-500/50'
                          : 'bg-neutral-50 dark:bg-neutral-900/80 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="font-semibold text-neutral-900 dark:text-white">{option.label}</div>
                      <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5 font-medium">{option.pages}</div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Funcionalidades Incluidas */}
            <div>
              <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-3">
                {t.calculator.step3Title}
              </label>
              <div className="space-y-2.5">
                {extraIds.map((item) => {
                  const extraKey = item.id as keyof typeof t.calculator.extras;
                  const feat = t.calculator.extras[extraKey];
                  const isChecked = selectedExtras.includes(item.id);
                  return (
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { x: 2 }}
                      key={item.id}
                      onClick={() => toggleExtra(item.id)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-neutral-50 dark:bg-neutral-800/80 border-emerald-500/50'
                          : 'bg-white dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-emerald-500 text-neutral-950' : 'border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="text-xs sm:text-sm">
                        <div className="font-medium text-neutral-900 dark:text-white">{feat.name}</div>
                        <div className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">{feat.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Live Summary & WhatsApp Launcher (Right - 5 cols) with Slide-Up */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
            transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : 0.15, ease: PREMIUM_EASE }}
            className="lg:col-span-5 sticky top-24 space-y-6"
          >
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-emerald-500/30 rounded-2xl p-6 sm:p-7 shadow-lg dark:shadow-xl dark:shadow-emerald-950/20">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.calculator.summaryTitle}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">{t.calculator.summaryBrand}</span>
              </div>

              {/* Summary Items */}
              <div className="mt-5 space-y-3.5 text-xs sm:text-sm">
                <div>
                  <div className="text-neutral-500 dark:text-neutral-400 text-xs">{t.calculator.typeLabel}</div>
                  <motion.div 
                    key={projectType}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-semibold text-neutral-900 dark:text-white mt-0.5"
                  >
                    {getTypeName()}
                  </motion.div>
                </div>

                <div>
                  <div className="text-neutral-500 dark:text-neutral-400 text-xs">{t.calculator.scopeLabel}</div>
                  <motion.div 
                    key={pageScope}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5"
                  >
                    {getScopeName()}
                  </motion.div>
                </div>

                <div>
                  <div className="text-neutral-500 dark:text-neutral-400 text-xs">{t.calculator.extrasLabel}</div>
                  <motion.div 
                    key={selectedExtras.length}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="font-medium text-neutral-800 dark:text-neutral-200 mt-0.5"
                  >
                    {selectedExtras.length} {t.calculator.extrasCount}
                  </motion.div>
                </div>

                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300">
                    <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.calculator.deliveryTimeLabel}</span>
                  </div>
                  <motion.span 
                    key={getDeliveryTime()}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className="font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums"
                  >
                    {getDeliveryTime()}
                  </motion.span>
                </div>
              </div>

              {/* Guarantee badge */}
              <div className="mt-5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800/90 flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {t.calculator.guaranteeText}
                </span>
              </div>

              {/* Direct WhatsApp Call To Action */}
              <div className="mt-6">
                <motion.a
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  href={getWhatsAppUrl(generateWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{t.calculator.ctaWhatsapp}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <p className="text-[11px] text-center text-neutral-500 dark:text-neutral-400 mt-2.5">
                  {t.calculator.ctaFootnote}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
