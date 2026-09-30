import { Exo_2, Inter } from "next/font/google";

// Exo 2 Black Italic — matches the logo wordmark treatment. Used for headlines only.
export const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["italic", "normal"],
  variable: "--font-exo2",
  display: "swap",
});

// Inter — body copy and UI text.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
