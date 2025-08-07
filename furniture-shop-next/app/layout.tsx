import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
  title: "StagexAfrica | Premium Timber & Woodworking Solutions",
  description: "Premium timber products, custom woodworking, and sustainable solutions in Kenya. Contact us for furniture, construction, and more!",
  keywords: "timber, woodworking, furniture, Kenya, sustainable, StagexAfrica, custom wood, construction, interior design",
  openGraph: {
    title: "StagexAfrica | Premium Timber & Woodworking Solutions",
    description: "Premium timber products, custom woodworking, and sustainable solutions in Kenya.",
    url: "https://stagexafrica.com/",
    siteName: "StagexAfrica",
    images: [
      {
        url: "/images/heroimg.jpg",
        width: 1200,
        height: 630,
        alt: "StagexAfrica Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Script 
          src="https://kit.fontawesome.com/f99459d9b8.js" 
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <main id="main-content" tabIndex={-1} aria-label="Main content">
          {children}
        </main>
      </body>
    </html>
  );
}
