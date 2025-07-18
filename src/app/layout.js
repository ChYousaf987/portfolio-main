import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Yousaf Awais | Portfolio",
  description: "Yousaf Awais - Web Developer - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
