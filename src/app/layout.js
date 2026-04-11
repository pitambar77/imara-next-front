import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Imara Kileleni Safaris",
  description: "Tanzania Safari Experts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/tanzania.webp"
          fetchPriority="high"
        />
      </head>
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
