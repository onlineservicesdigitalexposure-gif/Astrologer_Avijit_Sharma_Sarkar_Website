import type { Variants } from 'framer-motion';

/**
 * Reusable Framer Motion animation variants for R.A. Divine Astrology design system.
 * Fast, subtle, elegant, and non-distracting animations.
 */

// 1. Fade Up (standard section elements, card entry)
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// 2. Simple Fade In
export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

// 3. Scale In (cards, badges, focal elements)
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// 4. Slide from Left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -25
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// 5. Slide from Right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 25
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// 6. Stagger Children Container
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// 7. Stagger Item
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut'
    }
  }
};

// 8. Global Page Transition (combines subtle fade, fade-up, scale, slide)
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.995,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.995,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

