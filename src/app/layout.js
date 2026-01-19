import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/page";

export const metadata = {
  title: "ItemBox",
  description: "Next.js + DaisyUI ItemBox Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-base-200 text-base-content min-h-screen flex flex-col">
        <Navbar />

        {/* Main content */}
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
