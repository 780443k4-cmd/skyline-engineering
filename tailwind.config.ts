import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        warmwhite: '#FAF7F2',
        graphite: '#2B2A28',
        ink: '#141312',
        champagne: '#C9B79C',
        skyline: {
          DEFAULT: '#8E2E22',
          light: '#A8392B',
        },
        line: '#E4DED2',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
