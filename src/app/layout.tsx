import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manikanta Sirumalla | iOS Developer & ML Engineer",
  description:
    "Portfolio of Manikanta Sirumalla — iOS Developer and Machine Learning Engineer. Building elegant mobile experiences powered by intelligent systems.",
  keywords: [
    "iOS Developer",
    "Machine Learning",
    "Swift",
    "SwiftUI",
    "Data Science",
    "Python",
    "Core ML",
    "TensorFlow",
  ],
  openGraph: {
    title: "Manikanta Sirumalla | iOS Developer & ML Engineer",
    description:
      "Building elegant mobile experiences powered by intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
