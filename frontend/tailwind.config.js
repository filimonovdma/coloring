/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        whitesmoke: { "100": "#f7f8fb", "200": "#ededed" },
        white: "#fff",
        steelblue: "#4f547b",
        midnightblue: "#140342",
        blueviolet: { "100": "#6440fb", "200": "rgba(100, 64, 251, 0.15)" },
        darkorange: "#ff9800",
        gainsboro: "#dadde6",
        ghostwhite: "#f5f7fe",
        gray: { "100": "#231f20", "200": "rgba(0, 0, 0, 0.12)" },
        red: "#ff0909",
        tomato: "#e8543e",
        lavender: "#f1eeff",
        darkslategray: "rgba(51, 51, 51, 0.19)",
      },
      fontFamily: {
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
        inter: "Inter",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        roboto: "Roboto",
        inherit: "inherit",
      },
      borderRadius: {
        xl: "20px",
        "11xl": "30px",
        "31xl": "50px",
        "5xs-5": "7.5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mini: "15px",
      xs: "12px",
      sm: "14px",
      smi: "13px",
      base: "16px",
      "4xs": "9px",
      "3xs": "10px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "960px" },
      sm: { max: "420px" },
    },
  },
  corePlugins: { preflight: false },
};
