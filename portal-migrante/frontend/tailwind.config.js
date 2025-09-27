/** @type {import('tailwindcss').Config} */
export default {
  // استخدم بادئة لتجنب تضارب الأسماء مع Bootstrap
  prefix: 'tw-',
  // عطّل Reset الافتراضي لتايلويند حتى لا يصطدم مع Bootstrap
  corePlugins: { preflight: false },

  content: [
    './index.html',
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
