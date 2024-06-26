import { Inter } from "next/font/google";
import Content from "./(content)/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BLOG DEV",
  description:
    "Apps to Learn Web Devlopment. Resource and guide for further learning resources.",
  author: "Southwane",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
