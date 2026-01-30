import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury jewelry color palette
        gold: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#D4AF37', // Primary gold
          600: '#B8962F',
          700: '#9C7D27',
          800: '#806420',
          900: '#654B18',
        },
        maroon: {
          50: '#FCE8E8',
          100: '#F5C4C4',
          200: '#EE9F9F',
          300: '#E67A7A',
          400: '#DE5555',
          500: '#800020', // Deep maroon
          600: '#6D001B',
          700: '#5A0016',
          800: '#470011',
          900: '#34000D',
        },
        emerald: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#046A38', // Emerald green
          600: '#035C30',
          700: '#024E28',
          800: '#024020',
          900: '#013218',
        },
        ivory: {
          50: '#FFFFF5',
          100: '#FFFFEB',
          200: '#FFFFD6',
          300: '#FFFFC2',
          400: '#FFFFAD',
          500: '#FFFFF0', // Ivory
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F5E6A3 50%, #D4AF37 100%)',
        'gradient-luxury': 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(212, 175, 55, 0.3)',
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
