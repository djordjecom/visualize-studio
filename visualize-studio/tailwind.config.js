/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Branding
        primary: '#007AFF',
        secondary: '#5856D6',
        
      }
    },
  },
  plugins: [],
}