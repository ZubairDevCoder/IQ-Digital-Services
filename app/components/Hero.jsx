"use client";
import Link from 'next/link';
import Image from "next/image";
import TypingText from "./TypingText";
import { Button } from "./ui/button";

export default function Hero() {
  const skills = ["Digital Marketing", "Video Editing", "Graphic Designing"]; 

  return (
    <section className="relative h-auto flex items-center justify-center text-center overflow-hidden py-40 ">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herobg.gif"
          alt="bg"
          fill
          className="object-cover opacity-70"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="max-w-4xl px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Welcome to <br />
          <span className="text-shadow-blue-700 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            IQ Digital Services
          </span>
        </h1>

        {/* Typing Skills */}
        <p className="mt-4 text-xl md:text-2xl text-blue-400 font-medium">
          We specialize in <TypingText words={skills} />
        </p>

        {/* Short Description */}
        <p className="mt-6 text-white text-lg leading-relaxed">
          We help businesses grow online with powerful digital marketing
          strategies, high-quality video editing, and eye-catching graphic
          designs that build strong brand presence and drive real results.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link href="#about">
            <Button className="px-8 py-5 rounded-xl  font-medium ">
              Get Started
            </Button>
          </Link>

          <Link href="#projects">
            <Button
              variant="outline"
              className="px-8 py-5 rounded-xl text-black"
            >
              View Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
  