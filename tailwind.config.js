/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  safelist: [
    "bg-green-500",
    "bg-blue-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-purple-500",
    "text-green-500",
    "text-blue-500",
    "text-red-500",
    "text-yellow-500",
    "text-purple-500",
    // Agrega aquí cualquier otro color que planees usar dinámicamente
  ],
  theme: {
    extend: {
      colors: {
        primary: "#426CAA",
        secondary: "#52677D",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    fontFamily: {
      DEFAULT: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
