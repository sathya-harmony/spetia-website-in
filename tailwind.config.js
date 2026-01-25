/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Orange - Vibrant, energetic
        "spetia-orange": {
          DEFAULT: "#F77908",
          50: "#FFF8F0",
          100: "#FFEDD5",
          200: "#FFDBB0",
          300: "#FFC580",
          400: "#FFA940",
          500: "#F77908", // Primary
          600: "#E06500",
          700: "#C25200",
          800: "#9A4000",
          900: "#7A3200",
        },
        // Brand Teal - Professional, trustworthy
        "spetia-teal": {
          DEFAULT: "#1A555D",
          50: "#E8F4F6",
          100: "#D0E8EC",
          200: "#A3D1D9",
          300: "#75BAC6",
          400: "#48A3B3",
          500: "#2D6A77",
          600: "#1A555D", // Primary
          700: "#174A58",
          800: "#123944",
          900: "#0D2830",
        },
        // Pure Black
        "spetia-dark": "#000000",
        // Cream/Off-white
        "spetia-light": "#F6F4F1",
        "spetia-cream": "#F6F4F1",
        // Legacy aliases
        "arch-gray": "#FAF8F5",
        "arch-black": "#000000",
        "arch-white": "#ffffff",
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ["Space Mono", "monospace"],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'hero-md': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'heading-1': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        'heading-1-md': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        'heading-2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        'heading-2-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
        'heading-3-md': ['1.75rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 0.8) 60%, #111111 100%)',
        'gradient-logo-left': 'linear-gradient(90deg, #eeedea 0%, rgba(238, 237, 234, 0) 100%)',
        'gradient-logo-right': 'linear-gradient(270deg, #eeedea 0%, rgba(238, 237, 234, 0) 100%)',
        'gradient-dark-overlay': 'linear-gradient(180deg, rgba(17, 17, 17, 0.4) 0%, rgba(17, 17, 17, 0.9) 100%)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
