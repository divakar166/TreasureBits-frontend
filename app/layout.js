import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TreasureBits",
  description: "TreasureBits - Student Library System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="absolute top-0 h-full w-full z-[-1] clip-polygon bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6]"></div>
        <div className="absolute top-0 h-full w-full z-[-2] clip-polygon-2 bg-gradient-to-r from-[#4AC29A] to-[#BDFFF3]"></div>
        {children}
      </body>
    </html>
  );
}
