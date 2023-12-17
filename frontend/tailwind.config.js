/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{html,jsx}",
    "./src/components/*.{html,jsx}",
    "./*.{html, jsx}",
  ],
  theme: {
    extend: {
      colors: {
        spacecadet: "#283044",
        glaucous: "#6579AB",
        raspberryrose: "#B8336A",
        lightraspb: "#FF7AB2",
      },
    },
  },
  plugins: [],
};
