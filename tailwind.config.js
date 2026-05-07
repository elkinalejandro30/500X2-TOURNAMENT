/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        militar: {
          dark: "#0a0b0d",
          accent: "#c4a456", // Gold/Military accent
          gray: "#1a1c20",
          light: "#e1e1e1"
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(10,11,13,0.3), rgba(10,11,13,1)), url('https://images.unsplash.com/photo-1579546671170-b368913fa396?q=80&w=2000&auto=format&fit=crop')", // High quality dark tactical background
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
