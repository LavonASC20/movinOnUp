import "./globals.css";
import { NavbarSubsection } from "@/components/NavbarSubsection";
import { Lexend } from "next/font/google"

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap", // renders text using default font until lexend is loaded
})

export const metadata = {
  title: "MovinOnUp",
  description: "MovinOnUp website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <NavbarSubsection />
        {children}
      </body>
    </html>
  );
}
