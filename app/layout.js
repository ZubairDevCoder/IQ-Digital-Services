import { Poppins, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseGlow from "./components/MouseGlow";
import WhatsAppButton from "./components/WhatsAppButton";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO
export const metadata = {
  title:
    "IQ Digital Services | Digital Marketing, Video Editing & Graphic Design",
  description:
    "IQ Digital Services is a creative digital agency offering professional digital marketing, video editing, and graphic design services@",

  keywords: [
    "Digital Marketing Pakistan",
    "Video Editing",
    "Graphic Design",
    "Social Media Marketing",
  ],
  verification: {
    google: "googlee2480a318705e5c1", // 👈 yahan sirf code dalna
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <meta
        name="google-site-verification"
        content="v8MZvG8XOHVTu6bd_307APE4IvEwf7MXBp1eO0945iI"
      />
      <body className="min-h-full flex flex-col bg-black text-white font-[var(--font-inter)] relative overflow-x-hidden">
        {/* 🔥 Background Glow */}
        <MouseGlow />

        {/* 🔝 Navbar */}
        <Navbar />

        {/* 📄 Page Content */}
        <main className="relative z-10 flex-1">{children}</main>

        {/* 💬 WhatsApp Floating Button */}
        <WhatsAppButton />

        {/* 🔻 Footer */}
        <Footer />
      </body>
    </html>
  );
}
