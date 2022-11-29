/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway"],
        Open: ["Open Sans"],
      },
      colors: {
        DarkBlue: "hsl(217, 28%, 15%)",
        DarkBlue2: "hsl(218, 28%, 13%)",
        DarkBlue3: "hsl(216, 53%, 9%)",
        DarkBlue4: "hsl(219, 30%, 18%)",
        White: "hsl(0, 0%, 100%)",

        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        LightRed: "hsl(0, 100%, 63%)",
      },
    },
  },
  plugins: [],
};
