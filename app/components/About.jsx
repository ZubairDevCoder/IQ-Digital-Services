"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import OurTeam from "./OurTeam";
import WhatsAppFounder from "./WhatsAppfounder";
import ResultsSection from "./ResultsSection";

const texts = [
  "Social Media Marketing",
  "Graphics Designing",
  "Website Designing",
];

const cards = [
  {
    title: "Web Designing",
    desc: "Responsive, fast and modern websites with clean UI/UX and mobile-first approach.",
  },
  {
    title: "Social Media Management",
    desc: "Consistent branding, engagement strategy and audience growth across platforms.",
  },
  {
    title: "Marketing Strategy",
    desc: "Result-driven campaigns focused on leads, conversions and brand awareness.",
  },
  {
    title: "Creative Direction",
    desc: "Unique digital ideas that make brands stand out in competitive markets.",
  },
];

const skills = [
  "Meta Ads",
  "Digital Marketing",
  "Brand Strategy",
  "Content Creation",
  "Video Editing",
  "Web Design",
];

export default function About() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-12 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white">
            About <span className="text-purple-500">IQ Digital Services</span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            A creative digital agency focused on building modern brands,
            high-converting websites and powerful marketing systems.
          </p>

          {/* Rotating Badge */}
          <div className="mt-6">
            <Button
              variant="default"
              className="font-bold text-base md:text-lg"
            >
              {texts[index]}
            </Button>
          </div>
        </div>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Currently working in Digital Marketing, Web Design and Freelancing
              with over{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                7+ years
              </span>{" "}
              of experience.
            </p>

            <p>
              We have successfully delivered more than{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                35+ projects
              </span>{" "}
              across real estate, restaurants, apps, and e-commerce.
            </p>

            <p>
              Our mission is to help businesses grow online with result-driven
              strategies and strong brand identity.
            </p>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
              <Image
                src="/herobg.gif"
                alt="studio"
                width={1200}
                height={320}
                className="w-full h-80 object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/60 backdrop-blur-md text-white">
                <p className="text-sm tracking-wide text-gray-300">
                  PREMIUM DIGITAL EXPERIENCE
                </p>

                <p className="font-semibold mt-1">
                  Building brands that convert and scale globally
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* TEAM SECTION */}
        <div className="text-center mb-7 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Meet Our <span className="text-purple-500">Team</span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            A creative digital agency specializing in marketing, design and
            video production.
          </p>
        </div>

        {/* SKILLS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((s, i) => (
            <Button key={i} variant="default" className="font-bold">
              {s}
            </Button>
          ))}
        </div>

        {/* TEAM */}
        <OurTeam />

        {/* RESULTS */}
        <ResultsSection />

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
            Let’s Build Something Amazing Together
          </h3>

          <div className="mt-6 flex items-center justify-center">
            <WhatsAppFounder />
          </div>
        </div>
      </div>
    </section>
  );
}
