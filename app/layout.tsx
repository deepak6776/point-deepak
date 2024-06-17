import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Providers from "@/app/components/Providers";
import Fonts from "./Fonts";
import MadeBySharpener from "@/app/components/MadeBySharpener";
import { GoogleAnalytics } from '@next/third-parties/google'
import JoinUs from "@/app/components/JoinUs";
import Notification from "./components/Notification";
import AuthSession from "./components/AuthSession";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthSession>
    <html lang="en">
      <head>
        <title>Point</title>
        <meta name="description" content="Design resources curated by Sharpener Design Studio" />
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body>
        <Providers>
          <Fonts />
          {children}
          {/* <JoinUs /> */}
          {/* <MadeBySharpener /> */}
          {/* <Footer /> */}
          <Notification/>
        </Providers>
      </body>
      {/* <GoogleAnalytics gaId="G-W4XNWDJSC8"/> */}
    </html>
    </AuthSession>
  );
}
