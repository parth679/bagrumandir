/**
 * Refined Divya Shila Design Tokens
 * Harmonizes warm natural sandstone, heritage terracotta, diya gold, and twilight sanctum
 */

export const THEME_CONFIG = {
  colors: {
    sandstoneCanvas: '#12100E',      // Deep warm sanctum night canvas
    sandstoneCard: '#1A1615',        // Elevated dark stone surface
    sandstoneLight: '#FDFBF7',       // Crisp off-white lime plaster text
    terracotta: '#B85D36',           // Natural clay terracotta primary accent
    terracottaHover: '#A34F2C',
    diyaGold: '#D97706',             // Warm golden diya illumination
    diyaGoldLight: '#E2A752',        // Subdued ambient gold
    borderMuted: 'rgba(217, 119, 6, 0.18)',
    borderHover: 'rgba(226, 167, 82, 0.4)'
  },
  typography: {
    headingSerif: "'Cinzel', Georgia, serif",
    bodySans: "'Plus Jakarta Sans', system-ui, sans-serif",
    scriptDevanagari: "'Noto Serif Devanagari', serif"
  },
  motion: {
    springTransition: { type: 'spring', stiffness: 350, damping: 25 },
    gentleTransition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};
