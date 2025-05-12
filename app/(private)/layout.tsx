import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetiBuy",
  description: "This e-commerce platform is a modern web application designed to deliver a seamless shopping experience. Built with cutting-edge technologies, it leverages Appwrite for secure and efficient authentication and database management.",
  keywords: ["e-commerce", "online shopping", "web store", "shopping app", "online store", "ecommerce platform", "metina platforms"],
  openGraph: {
    title: "MetiBuy",
    description: "This e-commerce platform is a modern web application designed to deliver a seamless shopping experience. Built with cutting-edge technologies, it leverages Appwrite for secure and efficient authentication and database management.",
  },
  twitter: {
    title: "MetiBuy",
    description: "This e-commerce platform is a modern web application designed to deliver a seamless shopping experience. Built with cutting-edge technologies, it leverages Appwrite for secure and efficient authentication and database management.",
  },
  facebook: {
    appId: ''
  },
  appleWebApp: {
    title: "MetiBuy",
  },
  applicationName: "MetiBuy",
  creator: "Metina Platforms",
  publisher: "MetiBuy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
