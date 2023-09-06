import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Wiki Rocket",
  description: "This is Wiki Rocket Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
