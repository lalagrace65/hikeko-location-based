
import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import "./globals.css";
import Provider from "./Provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <HeaderNavBar />
          {children}
        </Provider>
        
      </body>
    </html>
  );
}
