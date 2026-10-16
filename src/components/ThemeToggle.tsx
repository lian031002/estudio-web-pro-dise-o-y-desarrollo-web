import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  let activeLang = 'es';
  try {
    const { language } = useLanguage();
    activeLang = language;
  } catch {
    // If used outside LanguageProvider
  }

  const labels = {
    es: {
      light: 'Modo Claro',
      dark: 'Modo Oscuro',
      switchToLight: 'Cambiar a modo claro',
      switchToDark: 'Cambiar a modo oscuro',
    },
    en: {
      light: 'Light Mode',
      dark: 'Dark Mode',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
    },
    fr: {
      light: 'Mode Clair',
      dark: 'Mode Sombre',
      switchToLight: 'Passer au mode clair',
      switchToDark: 'Passer au mode sombre',
    },
  }[activeLang] || {
    light: 'Modo Claro',
    dark: 'Modo Oscuro',
    switchToLight: 'Cambiar a modo claro',
    switchToDark: 'Cambiar a modo oscuro',
  };

  const actionTitle = isDark ? labels.switchToLight : labels.switchToDark;
  const currentLabel = isDark ? labels.light : labels.dark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={actionTitle}
      title={actionTitle}
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        isDark
          ? 'text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800'
          : 'text-neutral-600 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-medium whitespace-nowrap">
          {currentLabel}
        </span>
      )}
    </button>
  );
}
