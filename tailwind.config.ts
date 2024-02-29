import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        anta: "Anta",
        russo: "Russo One",
        bodoni: "Bodoni Moda",
        contrail: "Contrail One",
        museo: "MuseoModerno",
      },
      colors: {
        beige: "#faf6f1",
        "sportree-card-bg": "rgba(35, 35, 35, 0.4)",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
} satisfies Config;
