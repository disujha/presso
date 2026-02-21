import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import { AuthProvider } from "@/lib/firebase/auth";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Presso | Industrial Energy Intelligence",
  description: "Industrial energy intelligence platform for steel and manufacturing. Retrofit sensors and real-time monitoring.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${workSans.variable} font-sans bg-industrial-50 text-industrial-900 antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
