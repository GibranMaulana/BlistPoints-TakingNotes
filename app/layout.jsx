import { Geist, Geist_Mono } from "next/font/google";
import { AccountsProvider } from "./context/AccountContext";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "  BlistPoints",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AccountsProvider>
            <CurrentUserProvider>
               {children}
            </CurrentUserProvider>
         </AccountsProvider>
      </body>
    </html>
  );
}
