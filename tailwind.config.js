// const colors = require("tailwindcss/colors");

const { mainPrimary, mainSecondary, secondaryBg, secondarytextColor, thirdtextColor, smSpacing, mdSpacing, lgSpacing, xlSpacing, xxlSpacing } = require("./src/components/ui/ThemeVars");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mainPrimary: mainPrimary,
        mainSecondary: mainSecondary,
        secondaryBg: secondaryBg,
        secondarytextColor: secondarytextColor,
        thirdtextColor: thirdtextColor,
      },
      spacing: {
        sm: smSpacing,
        md: mdSpacing,
        lg: lgSpacing,
        xl: xlSpacing,
        xxl:xxlSpacing,
      },
      maxWidth: { pMaxW: "1400px" },
      animation: {
        heart: "scale 0.4s forwards",
      },
      keyframes: {
        scale: {
          "0%, 50%, 100%": { transform: "scale(1)" },
          "25%, 75%": { transform: "scale(1.25)" },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tw-elements/dist/plugin"),
    require('@tailwindcss/line-clamp'),
  ],
};
