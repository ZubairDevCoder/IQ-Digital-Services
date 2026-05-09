"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "923167018636";
  const message = "Hi, I want to discuss a project.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div
      onClick={() => window.open(whatsappUrl, "_blank")}
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
    >
      <div className="bg-green-500 hover:bg-green-600 transition p-5 md:p-3 rounded-full shadow-lg hover:scale-110">
        <FaWhatsapp size={24} className="text-white" />
      </div>
    </div>
  );
}
