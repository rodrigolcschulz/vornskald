/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nordic/Viking themed palette
        nordic: {
          bg: '#0D1117',        // Deep dark (background)
          surface: '#161B22',   // Slightly lighter surface
          border: '#30363D',    // Border color
          gold: '#D4A574',      // Warm gold (primary accent)
          bronze: '#B8860B',    // Bronze
          silver: '#C5C5C5',    // Silver
          copper: '#B87333',    // Copper
          stone: '#2D3748',     // Stone gray
          wood: '#3E2723',      // Dark wood
          blood: '#722F37',     // Blood red (accent)
          text: '#E8E8E8',      // Main text
          subtext: '#A8A8A8',   // Secondary text
        },
      },
      fontFamily: {
        rune: ['Cinzel', 'serif'],
        serif: ['Crimson Text', 'serif'],
      },
      boxShadow: {
        'rune-glow': '0 0 20px rgba(212, 165, 116, 0.3)',
        'rune-hover': '0 0 30px rgba(212, 165, 116, 0.5)',
        'ancient': 'inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 165, 116, 0.2)',
      },
      animation: {
        'rune-pulse': 'runePulse 3s ease-in-out infinite',
      },
      keyframes: {
        runePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
