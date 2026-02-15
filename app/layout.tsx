import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from '@/lib/constants';
import { ThemeProvider } from 'next-themes';
import { Toaster } from "@/components/ui/sonner";

const interFont = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.className} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['system', 'light', 'dark', 'retro']}
          storageKey="app-theme"
        >
          {children}
          <Toaster richColors expand closeButton position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
