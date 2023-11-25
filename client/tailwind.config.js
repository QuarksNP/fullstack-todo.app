/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Primary Colors
        BrightBlue: "hsl(220, 98%, 61%)",
        LightBlue: "hsl(220, 95%, 75%)",
        Cyan: "hsl(192, 100%, 67%)",
        Magenta: "hsl(280, 87%, 65%)",

        //Dark Theme
        VeryDarkBlue: "hsl(235, 21%, 11%)",
        VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        LightGrayishBlue: "hsl(234, 39%, 85%)",
        "LightGrayishBlue(hover)": "hsl(236, 33%, 92%)",
        DarkGrayishBlue: "hsl(234, 11%, 52%)",
        VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
      },
    },
  },
  plugins: [],
};
