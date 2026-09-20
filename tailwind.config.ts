import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Premium Dental/Medical Palette
        medical: {
          50: '#F2FAF9',
          100: '#E8F6F5', // Soft Dental Mint
          200: '#C3E8E6',
          300: '#90D3D1',
          400: '#4DB3B4',
          500: '#159A9C', // Primary Dental Teal
          600: '#117F81',
          700: '#0E6668',
          800: '#0B4E50',
          900: '#08393A',
          DEFAULT: '#159A9C',
        },
        navy: {
          50: '#F0F6F8',
          100: '#E1EDF1',
          200: '#C3DAE2',
          300: '#96BED0',
          400: '#619CBD',
          500: '#397BAA',
          600: '#225F8E',
          700: '#16486E',
          800: '#103B55',
          900: '#0E3340', // Deep Dental Navy
          DEFAULT: '#0E3340',
        },
        mint: {
          50: '#F2FAF9',
          100: '#E8F6F5',
          DEFAULT: '#E8F6F5',
        },
        clinical: {
          white: '#FAFCFB', // Warm Clinical White
          slate: '#17252B', // Primary Text
          muted: '#64757A', // Muted Text
          surface: '#FFFFFF',
        },
        champagne: {
          soft: '#FAF7F2',
          border: '#E8DFC9',
          DEFAULT: '#C9A96E', // Subtle Champagne Accent
          dark: '#9A7B42',
        },
        cyanSoft: {
          DEFAULT: '#E8F6F5',
          50: '#F2FAF9',
        },
      },
      borderRadius: {
        none: '0',
        sm: '8px',
        DEFAULT: '12px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(14, 51, 64, 0.04)',
        sm: '0 2px 5px 0 rgba(14, 51, 64, 0.05)',
        md: '0 4px 12px -2px rgba(14, 51, 64, 0.07), 0 2px 4px -1px rgba(14, 51, 64, 0.03)',
        lg: '0 10px 24px -4px rgba(14, 51, 64, 0.08), 0 4px 8px -2px rgba(14, 51, 64, 0.03)',
        xl: '0 20px 32px -6px rgba(14, 51, 64, 0.10)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'var(--font-sans)', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'medical-gradient': 'linear-gradient(135deg, #159A9C 0%, #0E6668 100%)',
        'soft-mint-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #E8F6F5 100%)',
        'cloud-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAFCFB 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
