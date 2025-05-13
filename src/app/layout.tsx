import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Toaster } from "sonner";
import Providers from "@/redux/providers";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gbese",
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
        <Providers>
          {children}
        </Providers>

        <Toaster />
      </body>
    </html>
  );
}
