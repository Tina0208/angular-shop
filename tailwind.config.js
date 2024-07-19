/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      orange: {
        500: "#f7a072",
      },
      yellow: {
        100: "#ede0d4",
        500: "#efdd97",
      },
      gray: {
        100: "#ccc",
      },
      green: {
        500: "#0fa3b1",
      },
      red: {
        500: "#ff3a3a",
        700: "#B91C1C",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-h1": {
          fontSize: "var(--cuz-h1-font-size)",
          lineHeight: "var(--cuz-h1-line-height)",
          fontWeight: "var(--cuz-h1-font-weight)",
        },
        ".text-h2": {
          fontSize: "var(--cuz-h2-font-size)",
          lineHeight: "var(--cuz-h2-line-height)",
          fontWeight: "var(--cuz-h2-font-weight)",
        },
        ".text-h3": {
          fontSize: "var(--cuz-h3-font-size)",
          lineHeight: "var(--cuz-h3-line-height)",
          fontWeight: "var(--cuz-h3-font-weight)",
        },
        ".text-h4": {
          fontSize: "var(--cuz-h4-font-size)",
          lineHeight: "var(--cuz-h4-line-height)",
          fontWeight: "var(--cuz-h4-font-weight)",
        },
        ".text-h5": {
          fontSize: "var(--cuz-h5-font-size)",
          lineHeight: "var(--cuz-h5-line-height)",
          fontWeight: "var(--cuz-h5-font-weight)",
        },
        ".text-h6": {
          fontSize: "var(--cuz-h6-font-size)",
          lineHeight: "var(--cuz-h6-line-height)",
          fontWeight: "var(--cuz-h6-font-weight)",
        },
        ".text-color-green": {
          color: "theme(colors.green.500)",
        },
        ".bg-color-green": {
          background: "theme(colors.green.500)",
        },
        ".border-green": {
          border: "3px solid theme(colors.green.500)",
        },
        ".bg-color-transparent": {
          background: "#ffffff8a",
        },
      });
    },
  ],
};
