import type { Metadata } from "next";
import "../globals.css";
import { Work_Sans } from "next/font/google";
import { Toaster } from "sonner";
import NavBar from "@/components/w3/Nav/NavBar";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gbese | Crypto",
  icons: "/gbese-icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className} suppressHydrationWarning={true}>
        <main className="bg-black h-screen overflow-y-auto pb-4 flex flex-col">
          <NavBar />
          <div className="flex-1 space-y-8 p-0 pt-10">{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
