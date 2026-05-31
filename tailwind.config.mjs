/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Noto Serif SC', 'Source Han Serif SC', 'Georgia', 'serif'],
        sans: ['Noto Sans SC', 'PingFang SC', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        bg: '#0c0c14',
        'bg-card': '#111118',
        border: '#1e1e2e',
        'text-dim': '#71717a',
        'text-faint': '#3f3f46',
      },
    },
  },
  plugins: [],
};
