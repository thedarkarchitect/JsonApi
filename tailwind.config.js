/** @type {import('tailwindcss').Config} */
import { require } from "esm";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js"
  ],
  theme: {
    extend: {
      colors: {
        'customYellow': '#FFD000',
        'red': '#c30010'
      },
    },
  },
  plugins: [],
}

