import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Write Wave",
  description: "This is write wave description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full w-full p-4 lg:px-10 xl:px-20 mx-auto bg-[#15202B] text-[#FFFFFF]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
