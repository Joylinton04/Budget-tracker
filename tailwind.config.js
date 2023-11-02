/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#051427',
        'app-bg': '#f2f2f2',
        'dbcard-bg': '#ffffff',
        'addb-bg': '#daf14d',
        'txt': '#d3e0ef',
      }
    },
  },
  plugins: [],
}