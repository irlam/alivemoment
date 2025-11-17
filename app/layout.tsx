import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AliveMoment - Turn Photos into Animated Videos",
  description: "Bring your photos to life with AI-powered animation. Create moving memories from single images.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
