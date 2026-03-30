import "./globals.css";

import { Geist_Mono, Nunito } from "next/font/google";

import { cn } from "@/app/_lib/utils";
import { AppGoogleProvider } from "./_components/providers/google-provider";
import { AuthProvider } from "./_context/auth-context";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-sans" });

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
        nunito.variable,
        "dark",
        "font-light",
      )}
    >
      <body>
        <AppGoogleProvider>
          <AuthProvider>{children}</AuthProvider>
        </AppGoogleProvider>
      </body>
    </html>
  );
}
