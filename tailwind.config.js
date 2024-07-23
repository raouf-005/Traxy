import { nextui } from "@nextui-org/react";
import  flowbite  from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        "inset-pink": "inset -50px -50px 100px pink",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), flowbite.plugin()],
};
