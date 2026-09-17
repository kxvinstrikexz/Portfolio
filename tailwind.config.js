/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0c0c0c',
        surface: {
          DEFAULT: '#141414',
          card: '#1a1a1a',
          elevated: '#202020',
          subtle: '#171717',
        },
        editorial: {
          text: '#f5f5f0',
          muted: '#a6a6a6',
          dim: '#737373',
          border: '#262626',
          borderSubtle: '#1c1c1c',
        },
        accent: {
          DEFAULT: '#fabb02',
          light: '#ffd147',
          dark: '#c49200',
          glow: 'rgba(250, 187, 2, 0.15)',
          glowSubtle: 'rgba(250, 187, 2, 0.08)',
        },
      },
      fontFamily: {
        editorial: ['"Playfair Display"', 'Didot', 'Bodoni MT', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'arch': '180px 180px 24px 24px',
        'arch-sm': '120px 120px 16px 16px',
        'oval': '50%',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
