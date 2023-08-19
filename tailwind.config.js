module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      height: {
        content:'fit-content',
        xl: "50vh",
      },
      colors: {
        rgba: "rgba(0,0,0,0.7",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
