import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      colors: {
        beige: "#faf6f1",
        "sportree-card-bg": "rgba(35, 35, 35, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
