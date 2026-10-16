import { useState, useEffect } from 'react';
import { MessageCircle, Phone, Copy, Check, Sparkles, Clock } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../utils/whatsapp';
import { useLanguage } from '../context/LanguageContext';
import { FadeIn, PREMIUM_EASE } from './motion/ScrollMotion';

export default function ContactSection() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync default project type when language changes
  useEffect(() => {
    if (t.contact.typeOptions && t.contact.typeOptions.length > 0) {
      setProjectType(t.contact.typeOptions[0]);
    }
  }, [t]);

  const buildMessage = () => {
    return `${t.calculator.summaryBrand} - ${t.contact.formTitle}:

👤 *${t.contact.nameLabel.replace('*', '').trim()}:* ${name || '-'}
📱 *${t.contact.phoneLabel}:* ${phone || '-'}
💼 *${t.contact.typeLabel}:* ${projectType}
📝 *${t.contact.detailsLabel.replace('*', '').trim()}:*
${message || '-'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = buildMessage();
    const url = getWhatsAppUrl(finalMsg);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info & contact channels with scroll reveal */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
            transition={{ duration: 0.6, ease: PREMIUM_EASE }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase mb-3">
                <span>{t.contact.kicker}</span>
                <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
                <span className="text-neutral-500 dark:text-neutral-400">{t.contact.kickerSub}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                {t.contact.title}
              </h2>
              <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
                {t.contact.description}
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3.5 pt-2">
              <motion.a
                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                href={getWhatsAppUrl(t.services.items.personal.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.contact.chatTitle}</div>
                    <div className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {WHATSAPP_DISPLAY}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100/80 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">
                  {t.contact.openChat}
                </span>
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.contact.callTitle}</div>
                    <div className="text-sm font-bold text-neutral-900 dark:text-white">
                      {WHATSAPP_DISPLAY}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                  {t.contact.callAction}
                </span>
              </motion.a>
            </div>

            {/* Availability details */}
            <div className="p-4 rounded-xl bg-neutral-100/80 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
              <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-300 font-medium">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.contact.hoursTitle}</span>
              </div>
              <p className="leading-relaxed">
                {t.contact.hoursDesc}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form with Scroll Reveal */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
            transition={{ duration: 0.65, delay: shouldReduceMotion ? 0 : 0.15, ease: PREMIUM_EASE }}
            className="lg:col-span-7 bg-white dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {t.contact.formTitle}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">{t.contact.formSub}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {t.contact.typeLabel}
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  {t.contact.typeOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {t.contact.detailsLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.detailsPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.contact.submitButton}</span>
                </motion.button>

                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-950 dark:hover:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 transition-colors cursor-pointer"
                  title="Copiar texto"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{t.contact.copiedButton}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t.contact.copyButton}</span>
                    </>
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/80 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{t.contact.successMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
