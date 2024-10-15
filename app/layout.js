import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const robotoRegular = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  weight: "100 900",
});

export const metadata = {
  title: "Mahfujul Sagor",
  description: "Mahfujul Sagor's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoRegular.variable} antialiased bg-[#101010]`}
        style={{ fontFamily: "var(--font-roboto-regular), sans-serif" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
