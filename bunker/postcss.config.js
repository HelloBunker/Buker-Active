/* eslint-disable no-undef */
module.exports = {
  plugins: {
    tailwindcss: {
      
      content: [
        "./src/**/*.{html, js, ts, jsx, tsx, vue}",
        "./src/**/*",
        "./index.html",
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              50: "#7DAB2E7F",
              100: "#7DAB2E",
            },

            secondary: {
              50: "#fff",
              100: "#767676",
            },

            danger: {
              100: "#ff0000",
            },
          },
        },
        plugins: [
          require("@tailwindcss/forms"),
          require("@tailwindcss/typography"),
          require("@tailwindcss/line-clamp"),
          require("@tailwindcss/aspect-ratio"),
        ],
      },
      autoprefixer: {},
    },
  },
};
