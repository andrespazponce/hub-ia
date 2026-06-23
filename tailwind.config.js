/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        sidebar: '#0F172A',
        'sidebar-hover': '#1E293B',
        'sidebar-active': '#1E3A5F',
        accent: '#0E7C7B',
        'accent-light': '#E0F2F1',
        surface: '#F9F8F5',
        card: '#FFFFFF',
        border: '#E5E4DF',
        'border-strong': '#D1D0CB',
        'text-primary': '#111827',
        'text-muted': '#6B7280',
        'text-faint': '#9CA3AF',
        'priority-high': '#DC2626',
        'priority-med': '#D97706',
        'priority-low': '#059669',
      },
    },
  },
  plugins: [],
}
