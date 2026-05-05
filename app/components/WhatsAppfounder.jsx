"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFounder() {
  const phoneNumber = "923167018636";
  const message = "Hi, I want to discuss a project.";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="">
      <Button
        variant="default"
        onClick={handleClick}
        className="flex items-center gap-2 px-5 py-4 md:w-auto w-full font-bold text-lg "
      >
        <FaWhatsapp size={20} />
        <span className="">Contact me</span>
      </Button>
    </div>
  );
}
