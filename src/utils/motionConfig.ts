export const motionConfig = {
  pageEnter: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }
  },
  cardHover: {
    whileHover: { y: -3, scale: 1.01 },
    transition: { duration: 0.25, ease: 'easeOut' as const }
  },
  modalOverlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25 }
  },
  modalContent: {
    initial: { opacity: 0, scale: 0.95, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 15 },
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }
  },
  navPillActive: {
    type: 'spring' as const,
    stiffness: 380,
    damping: 30
  }
};
