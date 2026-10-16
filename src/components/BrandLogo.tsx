import { useLanguage } from '../context/LanguageContext';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  subtitle?: string;
  className?: string;
}

export default function BrandLogo({
  size = 'md',
  showSubtitle = false,
  subtitle,
  className = '',
}: BrandLogoProps) {
  let activeLang = 'es';
  try {
    const { language } = useLanguage();
    activeLang = language;
  } catch {
    // In case used outside LanguageProvider
  }

  const defaultSubtitle = {
    es: 'Diseño & Desarrollo Digital',
    en: 'Digital Design & Development',
    fr: 'Design & Développement Digital',
  }[activeLang] || 'Diseño & Desarrollo Digital';

  const iconSize = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  const titleSize = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Creative Vector Logo Emblem */}
      <div className={`relative shrink-0 ${iconSize} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoEmblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="logoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f1f23" />
              <stop offset="100%" stopColor="#0e0e11" />
            </linearGradient>
          </defs>

          {/* Background rounded squircle */}
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="24"
            fill="url(#logoBgGrad)"
            stroke="#27272a"
            strokeWidth="3"
          />

          {/* Geometric "B" with code bracket styling */}
          <path
            d="M28 22H46C56 22 64 28 64 37C64 43 60 48 54 50C62 52 68 58 68 67C68 76 60 82 48 82H28V22Z"
            stroke="url(#logoEmblemGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner loops */}
          <path d="M42 36H46C50 36 53 38 53 42C53 46 50 48 46 48H42V36Z" fill="#34d399" />
          <path d="M42 56H48C52 56 56 59 56 64C56 68 52 71 48 71H42V56Z" fill="#10b981" />

          {/* Forward slash code accent */}
          <line
            x1="58"
            y1="20"
            x2="42"
            y2="84"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Brand Wordmark & Typography */}
      <div className="flex flex-col leading-none">
        <span className={`font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap ${titleSize}`}>
          BATISTA <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">·</span>{' '}
          <span className="font-semibold text-neutral-700 dark:text-neutral-200">WEB STUDIO</span>
        </span>
        {showSubtitle && (
          <span className="text-[10px] tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
            {subtitle || defaultSubtitle}
          </span>
        )}
      </div>
    </div>
  );
}
