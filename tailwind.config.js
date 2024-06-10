/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ringWidth: {
        '0.5': '0.5px',  // Add custom ring width
      }
    }
  },
  variants: {
    extend: {
      margin: ['first'],
      // ... other variants
    },
  },
  plugins: [],
}
