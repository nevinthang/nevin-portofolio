import { Geist, Geist_Mono } from "next/font/google";
import Navbar from  "../components/navbar.js";
import "./globals.css";

export const metadata = {
  title: "Nevin's Portofolio",
  description: "Nevin's Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </head>
      <body
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
