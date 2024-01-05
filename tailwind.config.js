/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        super: "10rem",
      },
      fontFamily: {
        clash: ['"ClashDisplay"', "sans-serif"],
        supreme: ['"Supreme"', "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          colors: {
            background: "#FEF7F6",
            foreground: "#232220",
            primary: "#F4A5B7",
          },
        },
        dark: {
          colors: {
            background: "#232220",
            foreground: "#FEF7F6",
            primary: "#F4A5B7",
          },
        },
      },
    }),
  ],
};
