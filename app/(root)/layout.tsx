import type { Metadata } from "next";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-1 h-screen flex-col">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}
