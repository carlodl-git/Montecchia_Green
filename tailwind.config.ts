import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'ui-serif', 'Georgia'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial'],
      },
      // Colors are defined in `app/globals.css` via Tailwind v4 `@theme`.
    },
  },
  plugins: [],
} satisfies Config;

