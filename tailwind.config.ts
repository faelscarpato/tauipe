import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        'brand-blue': '#006194',
        'safety-yellow': '#EAB308',
        'fire-orange': '#C2410C',
        'off-white': '#F8FAFC',
        'tech-gray': '#CBD5E1',
        'dark-gray': '#334155',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.25rem',
        'lg': '0.5rem',
      },
      boxShadow: {
        'offset': '4px 4px 0px 0px rgba(15, 23, 42, 0.2)',
        'offset-sm': '2px 2px 0px 0px rgba(15, 23, 42, 0.15)',
        'industrial': '0 1px 3px 0 rgba(15, 23, 42, 0.1), 0 1px 2px -1px rgba(15, 23, 42, 0.1)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'flame-flicker': 'flameFlicker 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1)', opacity: '0.9' },
          '25%': { transform: 'scaleY(1.05) scaleX(0.95)', opacity: '1' },
          '50%': { transform: 'scaleY(0.95) scaleX(1.05)', opacity: '0.85' },
          '75%': { transform: 'scaleY(1.02) scaleX(0.98)', opacity: '0.95' },
        },
      },
    },
  },
  plugins: [],
}
export default config