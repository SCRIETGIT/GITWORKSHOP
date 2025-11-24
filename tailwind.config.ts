import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Light Theme Palette
        // Clean, Aesthetic, High-End
        
        'workshop-primary': {
          50: '#eff6ff',   // Blue 50
          100: '#dbeafe',  // Blue 100
          200: '#bfdbfe',  // Blue 200
          300: '#93c5fd',  // Blue 300
          400: '#60a5fa',  // Blue 400
          500: '#3b82f6',  // Blue 500 (Primary Action)
          600: '#2563eb',  // Blue 600 (Hover)
          700: '#1d4ed8',  // Blue 700
          800: '#1e40af',  // Blue 800
          900: '#1e3a8a',  // Blue 900 (Deep Text)
        },
        
        'workshop-neutral': {
          50: '#ffffff',   // White (Background)
          100: '#f8fafc',  // Slate 50 (Secondary BG)
          200: '#f1f5f9',  // Slate 100 (Borders/Cards)
          300: '#e2e8f0',  // Slate 200
          400: '#cbd5e1',  // Slate 300
          500: '#94a3b8',  // Slate 400
          600: '#64748b',  // Slate 500 (Muted Text)
          700: '#475569',  // Slate 600 (Secondary Text)
          800: '#334155',  // Slate 700 (Primary Text)
          900: '#0f172a',  // Slate 900 (Headings)
        },
        
        'workshop-accent': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',  // Teal 500
          600: '#0d9488',  // Teal 600
          900: '#134e4a',
        },
        
        'workshop-success': '#10b981',
        'workshop-warning': '#f59e0b',
        'workshop-danger': '#ef4444',
        'workshop-info': '#3b82f6',
      },
      fontSize: {
        // Projector-friendly large font sizes - maintained for visibility
        'projector-xs': '1.125rem',    // 18px - smallest text
        'projector-sm': '1.25rem',     // 20px - small text
        'projector-base': '1.5rem',    // 24px - body text
        'projector-lg': '1.875rem',    // 30px - large text
        'projector-xl': '2.25rem',     // 36px - section headings
        'projector-2xl': '3rem',       // 48px - page titles
        'projector-3xl': '3.75rem',    // 60px - hero titles
        
        // Code text (slightly smaller for readability)
        'projector-code': '1.125rem',  // 18px
        'projector-code-sm': '1rem',   // 16px
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'monospace',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
