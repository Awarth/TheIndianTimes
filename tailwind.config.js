/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "780px",
      lg: "1024px",
      xl: "1280px",
      // custom screen size
      950: "950px",
      450 : "450px",
      350 : "350px",
    },
    extend: {
      boxShadow: {
        custom: "0 0 1em #00000013",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover", "focus"],
    },
  },
  plugins: [],
};
