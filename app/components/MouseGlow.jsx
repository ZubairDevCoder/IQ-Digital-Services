"use client";
import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      }
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)",
        filter: "blur(80px)",
        transition: "transform 0.1s linear",
      }}
    />
  );
}
