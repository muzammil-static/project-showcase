/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx,vue}'],

  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',

        primary: 'rgb(var(--primary) / <alpha-value>)',
        primaryLight: 'rgb(var(--primary-light) / <alpha-value>)',

        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        secondaryLight: 'rgb(var(--secondary-light) / <alpha-value>)',

        accent: 'rgb(var(--accent) / <alpha-value>)',
        accentLight: 'rgb(var(--accent-light) / <alpha-value>)',

        success: 'rgb(var(--success) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        info: 'rgb(var(--info) / <alpha-value>)',

        border: 'rgb(var(--border) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',

        glass: 'var(--glass)',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        full: '9999px',
      },

      boxShadow: {
        sm: '0 1px 2px rgba(15,23,42,.05)',
        DEFAULT: '0 10px 25px rgba(15,23,42,.08)',
        md: '0 20px 40px rgba(15,23,42,.08)',

        glow: '0 0 30px rgba(99,102,241,.25)',
        'glow-pink': '0 0 30px rgba(236,72,153,.25)',
        'glow-cyan': '0 0 30px rgba(6,182,212,.25)',
        'glow-green': '0 0 30px rgba(34,197,94,.25)',
      },

      animation: {
        'fade-in': 'fade-in .8s ease-out',
        rise: 'rise .8s cubic-bezier(.16,1,.3,1)',
        'scale-in': 'scale-in .6s cubic-bezier(.16,1,.3,1)',
        zoom: 'zoom-in .3s ease-out forwards',
        glow: 'glow 2s ease-in-out infinite',
        'glow-secondary': 'glow-secondary 2s ease-in-out infinite',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(.16,1,.3,1)',
      },

      backdropFilter: {
        blur: 'blur(16px)',
      },
    },
  },

  plugins: [],
};