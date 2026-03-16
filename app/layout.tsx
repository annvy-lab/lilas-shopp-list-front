import "./globals.css";

import { Geist_Mono, Raleway } from "next/font/google";

import { cn } from "@/app/_lib/utils";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        raleway.variable,
        "dark",
      )}
    >
      <body>{children}</body>
    </html>
  );
}
