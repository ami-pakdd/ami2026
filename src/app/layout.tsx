import type { Metadata } from "next";
import { K2D, Readex_Pro } from "next/font/google";
import "./globals.css";

const k2d = K2D({
  variable: "--font-k2d",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
});

const readex = Readex_Pro({
  variable: "--font-readex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMI-PAKDD 2026",
  description: "Workshop on Autonomous Machine Intelligence",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${k2d.variable} ${readex.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
