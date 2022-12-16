/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff9718",
        "c-black-1": "#242424",
        "c-black-2": "#585858",
        "c-black-3": "#0000008a",
        "c-black-4": "rgba(50, 50, 50, 0.4)",
        "c-gray-1": "#ffffff1f",
        "c-gray-2": "#959595",
        "c-orange-1": "#fcac4b",
        "c-orange-2": "#fef4e7",
        "c-orange-3": "#E89D09",
        "c-blue-1": "#0078B3",
        "c-blue-2": "#006191",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
