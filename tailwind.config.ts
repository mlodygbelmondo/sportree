import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "sportree-card-bg": "rgba(35, 35, 35, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
