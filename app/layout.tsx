import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyline Roofing | Professional Roofing Contractors",
  description: "Skyline Roofing - Expert roof inspection, repair, replacement, and emergency services. Licensed, insured, and warranty-backed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}