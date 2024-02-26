import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      colors: {
        "sportree-card-bg": "rgba(35, 35, 35, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
