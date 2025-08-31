/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Provide a simple light minimal palette: blue (as emerald alias) and yellow (amber)
      colors: {
        // map existing 'emerald' usages in the app to a blue palette
        emerald: {
          50: '#f0f7ff',
          100: '#e6f2ff',
          200: '#cce7ff',
          300: '#99d1ff',
          400: '#66baff',
          500: '#339cff',
          600: '#1e7be6',
          700: '#155fb4',
          800: '#0f416f',
          900: '#07203a',
        },
        // keep an amber (yellow) palette for highlights
        amber: {
          50: '#fffdf0',
          100: '#fff8e0',
          200: '#fff0b8',
          300: '#ffe680',
          400: '#ffdb4d',
          500: '#ffce1a',
          600: '#e6b700',
          700: '#b38800',
          800: '#7a5900',
          900: '#472f00',
        },
        // ensure neutral grays for surfaces and text
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e9e9eb',
          300: '#d6d6db',
          400: '#bfbfc7',
          500: '#9f9fa8',
          600: '#6f6f78',
          700: '#4b4b55',
          800: '#2f2f39',
          900: '#0f172a',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
