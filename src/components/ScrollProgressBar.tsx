import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * ScrollProgressBar
 * A thin, color-shifting progress bar fixed at the very top of the viewport.
 * Tracks the user's scroll progress across the entire page with smooth physics
 * and dynamically shifts through an energetic spectrum (emerald -> cyan -> blue -> violet -> fuchsia).
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // Smooth spring physics for an organic, responsive feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Dynamic color transition across scroll depth
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      '#10b981', // 0% - Emerald (brand hero accent)
      '#06b6d4', // 25% - Cyan (services / calculator)
      '#3b82f6', // 50% - Royal Blue (showcase / portfolio)
      '#8b5cf6', // 75% - Purple / Violet (pricing & plans)
      '#ec4899', // 100% - Pink / Rose (contact & footer)
    ]
  );

  // Dynamic box shadow glow matching the color
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      '0 0 12px rgba(16, 185, 129, 0.65), 0 0 4px rgba(16, 185, 129, 0.8)',
      '0 0 12px rgba(6, 182, 212, 0.65), 0 0 4px rgba(6, 182, 212, 0.8)',
      '0 0 12px rgba(59, 130, 246, 0.65), 0 0 4px rgba(59, 130, 246, 0.8)',
      '0 0 12px rgba(139, 92, 246, 0.65), 0 0 4px rgba(139, 92, 246, 0.8)',
      '0 0 12px rgba(236, 72, 153, 0.65), 0 0 4px rgba(236, 72, 153, 0.8)',
    ]
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-black/5 dark:bg-white/5"
      aria-hidden="true"
    >
      <motion.div
        className="h-full w-full origin-left"
        style={{
          scaleX,
          backgroundColor,
          boxShadow,
        }}
      />
    </div>
  );
}
