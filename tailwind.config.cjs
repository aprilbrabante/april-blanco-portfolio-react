// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-100': '#1a1a1a',
        'dark-200': '#1f1f1f',
        'dark-300': '#2d2d2d',
        'dark-400': '#3d3d3d',
        'purple': '#885CF6',
        'pink': '#EC4899',
        'blue': '#3B82F6',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        saira: ['Saira', 'sans-serif'],
      },
    },
  },
  plugins: [],
}