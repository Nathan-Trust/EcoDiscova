/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#1d232a",
        "bg-eco-discova": "#4baf47",
        "light-gray": "#F7F7F7",
      },
    },
  },
  plugins: [require("daisyui")],
};
