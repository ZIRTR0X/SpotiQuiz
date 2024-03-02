import { nextui } from "@nextui-org/react";
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const HEADER_HEIGHT = 64;

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vh",
        withHeader: `calc(100vh - ${HEADER_HEIGHT}px)`,
      },
      height: {
        header: `${HEADER_HEIGHT})`,
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
