import { SearchContextProvider } from "@/app/context/search";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MAHMUDUL HASAN",
  description: "staywithmoon",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
