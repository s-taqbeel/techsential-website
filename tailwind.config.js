module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_4c: "#ffffff4c", A700_ce: "#ffffffce", A700: "#ffffff" },
        purple: {
          A400_00: "#cc00ee00",
          A400_66: "#fe0fd466",
          A700: "#8700ff",
          A400: "#fe0fd4",
          A400_6b: "#fe0ed46b",
        },
        gray: { 400: "#c8c8c8", 900: "#111111", "500_33": "#95959533" },
        orange: { "400_4c": "#ff95324c", "200_35": "#eeca8735" },
        blue_gray: { 100: "#d9d9d9", 900: "#262d41" },
        light_blue: { 700: "#0091d7", "700_66": "#0091d766" },
        black: {
          900: "#020308",
          "900_0f": "#0000000f",
          "900_01": "#000000",
          "900_33": "#00000033",
        },
      },
      fontFamily: { poppins: "Poppins", roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#0091d7,#fe0fd4)",
        gradient1: "linear-gradient(283deg ,#8700ff,#cc00ee00)",
        gradient2: "linear-gradient(90deg ,#0091d766,#fe0fd466)",
        gradient3: "linear-gradient(180deg ,#00000033,#95959533)",
      },
      textShadow: { ts: "0px 0px  92px #fe0ed46b" },
      boxShadow: {
        bs1: "0px 0px  24px 0px #0000000f",
        bs: "0px 44px  114px 0px #eeca8735",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
