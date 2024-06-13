/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'customYellow': '#FFD000',
        'yellow1': '#ffe97f',
        'red': '#c30010'
      },
    },
  },
  plugins: [
    flowbitePlugin
  ],
}

