import Link from "next/link";
import WhatsAppFounder from "./WhatsAppfounder";
import Image from "next/image";
const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
];

const services = [
  "Video Editing",
  "Graphic Designing",
  "Ads Management",
  "Social Media Marketing",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b10] text-white py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Column 1 - Brand */}
        <div>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition duration-300"
          >
            <h1 className="text-xl  font-bold tracking-wide">
              <span className="text-pink-500">IQ</span>{" "}
              <span className="text-cyan-400">Digital</span>{" "}
              <span className="text-yellow-400">Services</span>
            </h1>
          </Link>
          <p className="text-gray-300 text-md leading-relaxed mt-3">
            We help brands grow through strategic marketing, creative design,
            and performance-driven digital solutions. Focused on results, built
            for long-term success.
          </p>
        </div>

        {/* Column 2 - Navigation */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-white">Navigation</h3>

          <ul className="space-y-3 text-sm">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="relative inline-block text-gray-50 hover:text-white transition duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-purple-500
                  after:transition-all after:duration-300
                  hover:after:w-full font-bold text-md"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-white">Services</h3>

          <ul className="space-y-3 text-md">
            {services.map((service, i) => (
              <li
                key={i}
                className="text-gray-50 hover:text-purple-400 transition duration-300 cursor-pointer text-md font-medium "
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-white">Get in Touch</h3>

          <ul className="space-y-3 text-gray-400 text-md font-medium">
            <li>
              <WhatsAppFounder />
            </li>
            <li>
              📧{" "}
              <Link
                href="mailto:qdigitalservices44@gmail.com"
                className="hover:text-white transition"
              >
                qdigitalservices44@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-16 border-t border-white/10 pt-6 text-center">
        <p className="text-gray-500 text-md">
          © {new Date().getFullYear()} IQ Digital Services. All rights reserved.
        </p>

        {/* Motivational Trusted Line */}
        <p className="mt-3 text-xs text-gray-400 tracking-wide">
          Trusted by growing brands • Focused on results • Built for long-term
          partnerships
        </p>
      </div>
    </footer>
  );
}
