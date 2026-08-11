export const tokens = {
  colors: {
    navy: '#0F172A',
    brandBlue: '#006194',
    safetyYellow: '#EAB308',
    fireOrange: '#C2410C',
    offWhite: '#F8FAFC',
    techGray: '#CBD5E1',
    darkGray: '#334155',
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    display: 'Playfair Display, Georgia, serif',
    body: 'Geist, system-ui, sans-serif',
    mono: 'JetBrains Mono, Consolas, monospace',
  },
  spacing: {
    section: 'py-16 md:py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
  },
  shadows: {
    offset: '4px 4px 0px 0px rgba(15, 23, 42, 0.2)',
    offsetSm: '2px 2px 0px 0px rgba(15, 23, 42, 0.15)',
    industrial: '0 1px 3px 0 rgba(15, 23, 42, 0.1), 0 1px 2px -1px rgba(15, 23, 42, 0.1)',
  },
  transitions: {
    default: 'transition-all duration-200 ease-in-out',
    slow: 'transition-all duration-500 ease-in-out',
  },
} as const