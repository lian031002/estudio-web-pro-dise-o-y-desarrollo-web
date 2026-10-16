import React, { ReactNode } from 'react';
import { motion, useReducedMotion, Variants, HTMLMotionProps } from 'framer-motion';

// Premium cubic-bezier easing curve (smooth deceleration, Apple/Linear style)
export const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

interface MotionSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  threshold?: number;
}

/**
 * Wraps a full page section with an entrance animation on scroll.
 */
export function MotionSection({
  children,
  className = '',
  id,
  delay = 0,
  threshold = 0.15,
  ...rest
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold, margin: '0px 0px -40px 0px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: PREMIUM_EASE,
      }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  viewportOnce?: boolean;
}

/**
 * In-view or immediate fade-in with directional slide.
 */
export function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 24,
  viewportOnce = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: viewportOnce, amount: 0.15, margin: '0px 0px -30px 0px' }}
      transition={{
        duration,
        delay,
        ease: PREMIUM_EASE,
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay: number; initialDelay: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.initialDelay,
    },
  }),
};

/**
 * Container that orchestrates staggered reveals of child StaggerItem elements.
 */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  initialDelay = 0.05,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      custom={{ staggerDelay, initialDelay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
    >
      {children}
    </motion.div>
  );
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}
