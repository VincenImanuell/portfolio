import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vincen Imanuel — Full-Stack Developer & AI Engineer",
  description: "Portfolio Vincen Imanuel — full-stack development, AI engineering, machine learning, and quantitative finance.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
