import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import NavbarComponent from "@/components/header/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import NavbarWrapper from "@/components/header/NavbarWrapper";
// app/layout.tsx
import Script from 'next/script'
import { Analytics } from "./analytics";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'My Cool App',
  description: 'This is a Next.js app with amazing features',
  keywords: ['Next.js', 'React', 'TanStack', 'App Router'],
  authors: [{ name: 'Srun Oudomsambath', url: 'https://osc.com.fj/wp-content/uploads/2024/05/Unveiling-Modern-Trends-in-Technology.jpeg' }],
  creator: 'Srun Oudomsambath',
  openGraph: {
    title: 'My Cool App',
    description: 'Best app ever built with Next.js',
    url: 'https://osc.com.fj/wp-content/uploads/2024/05/Unveiling-Modern-Trends-in-Technology.jpeg',
    siteName: 'My Cool App',
    images: [
      {
        url: 'https://osc.com.fj/wp-content/uploads/2024/05/Unveiling-Modern-Trends-in-Technology.jpeg',
        width: 1200,
        height: 630,
        alt: 'My App OpenGraph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
  {/* Google Analytics Script */}
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `}
  </Script>
</head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <ErrorBoundary errorComponent={Error}>
          <NavbarWrapper />
          <Suspense fallback={<Loading />}>
            <Analytics/>
            {children}
          </Suspense>
        </ErrorBoundary>
        
      </body>
    </html>
  );
}
