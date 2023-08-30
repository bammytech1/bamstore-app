/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        "pry-color"  : "#0066db",
        "sec-color" : "#ff6600",
        "sec-light-color" : "#ff8c00",
        "dark" : "#1e1e24",
        "light" : "#ffffff",
        "gray-bk" : "#f9f9fb",
        "gray" : "#aeb1a9",
        "color-1": "#BD9FAC"
      },
    },
  },
  plugins: [],
}