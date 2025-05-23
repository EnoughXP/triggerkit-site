import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg': {
          'primary': 'rgb(from theme(--color-bg-primary) r g b / <alpha-value>)',
          'secondary': 'rgb(from theme(--color-bg-secondary) r g b / <alpha-value>)',
          'tertiary': 'rgb(from theme(--color-bg-tertiary) r g b / <alpha-value>)',
        },
        'accent': {
          'orange': 'rgb(from theme(--color-accent-orange) r g b / <alpha-value>)',
          'blue': 'rgb(from theme(--color-accent-blue) r g b / <alpha-value>)',
          'purple': 'rgb(from theme(--color-accent-purple) r g b / <alpha-value>)',
          'green': 'rgb(from theme(--color-accent-green) r g b / <alpha-value>)',
        },
        'text': {
          'primary': 'rgb(from theme(--color-text-primary) r g b / <alpha-value>)',
          'secondary': 'rgb(from theme(--color-text-secondary) r g b / <alpha-value>)',
          'muted': 'rgb(from theme(--color-text-muted) r g b / <alpha-value>)',
        }
      },
      fontFamily: {
        'inter': 'theme(--font-family-inter)',
        'mono': 'theme(--font-family-mono)',
      },
      boxShadow: {
        'custom-lg': 'theme(--shadow-lg)',
        'custom-xl': 'theme(--shadow-xl)',
      },
      animation: {
        'gradient-shift': 'theme(--animate-gradient-shift)',
        'pulse-glow': 'theme(--animate-pulse-glow)',
        'float': 'theme(--animate-float)',
        'fade-in-up': 'theme(--animate-fade-in-up)',
        'float-up': 'theme(--animate-float-up)',
      },
      spacing: {
        'border': 'theme(--color-border)',
      }
    },
  },
  plugins: [],
} satisfies Config