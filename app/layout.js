"use client";

import Cursor from "./components/Cursor";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Navbar2 from "./components/Navbar2";
import "./globals.css";
import SolarLanding from "./components/SolarLanding";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Cursor />
        <WhatsAppButton />
        <ScrollToTop />
        <SolarLanding />
        {children}
      </body>
    </html>
  );
}
