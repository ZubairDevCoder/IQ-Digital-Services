"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import OurTeam from "./OurTeam";
import WhatsAppFounder from "./WhatsAppfounder";
const texts = [
  "Social Media Marketing",
  "Graphics Designing",
  "Website Designing",
];
const projects = [
  {
    name: "Uptown Visa",
    type: "Real Estate",
    desc: "Post Design, Social Media Marketing, Website Design",
  },
  {
    name: "Talent Cash",
    type: "Earning App",
    desc: "Social Media Marketing, Motion Graphics, Video Editing",
  },
  {
    name: "Terminal F",
    type: "Restaurant",
    desc: "Website Design, Social Media Marketing, Management",
  },
  {
    name: "Casa Decore",
    type: "Real Estate",
    desc: "Post Design, Marketing, Website, Social Media",
  },
  {
    name: "Greenford Farms",
    type: "Real Estate",
    desc: "Post Design, Social Media Marketing, Website Design",
  },
  {
    name: "New Jersey by Germany",
    type: "E-commerce",
    desc: "Marketing, Website, Social Media Management",
  },
  {
    name: "Merak City Sahiwal",
    type: "Real Estate",
    desc: "Post Design, Social Media Marketing, Website Design",
  },
  {
    name: "HAM GROUP",
    type: "Multi Brand",
    desc: "Full Branding, Social Media, Website Management",
  },
  {
    name: "Kashmir Garden",
    type: "Real Estate",
    desc: "Post Design, Marketing, Website, Social Media",
  },
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

// Images Array
const results = [
  {
    id: 1,
    img: "/result1.jpg",
    title: "Ad Campaign Growth",
    desc: "High ROI through targeted ads strategy.",
  },
  {
    id: 2,
    img: "/result2.jpg",
    title: "Social Media Reach",
    desc: "Massive audience and engagement boost.",
  },
  {
    id: 3,
    img: "/result3.jpg",
    title: "Lead Generation",
    desc: "Generated quality leads with funnels.",
  },
  {
    id: 4,
    img: "/result4.png",
    title: "Brand Awareness",
    desc: "Strong brand visibility across platforms.",
  },
  {
    id: 5,
    img: "/result5.png",
    title: "Sales Growth",
    desc: "Increased conversions and revenue.",
  },
];
export default function About() {
  const [index, setIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-12 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-2 md:px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-6xl font-bold text-gray-900 dark:text-white">
            About <br className="md:hidden block" />{" "}
            <span className="text-purple-500">IQ Digital Services</span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            A creative digital agency focused on building modern brands,
            high-converting websites and powerful marketing systems.
          </p>

          {/* rotating badge */}
          <div>
            <Button
              variant="default"
              className=" my-5 font-extrabold text-lg tracking-wide"
            >
              {texts[index]}
            </Button>
          </div>
        </div>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
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
              </span>
              across real estate, restaurants, apps, and e-commerce.
            </p>

            <p>
              Our mission is to help businesses grow online with result-driven
              strategies and strong brand identity.
            </p>
          </div>

          {/* RIGHT VIDEO / IMAGE CARD */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition"></div>

            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
              <Image
                src="/herobg.gif"
                alt="studio"
                width={1200}
                height={320}
                className="w-full h-80 object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/60 backdrop-blur-xl text-white">
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

        {/* CARDS SECTION */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300"
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

        {/* background glow */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto px-1 md:px-3">
          {/* HEADER */}
          <div className="text-center mb-7 py-8">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Meet Our <span className="text-purple-500">Team</span>
            </h2>

            <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
              A creative digital agency specializing in marketing, design and
              video production.
            </p>
          </div>

          {/* SKILLS (HOVER HIGHLIGHT ANIMATION) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((s, i) => (
              <Button key={i} variant="default" className="font-bold ">
                {s}
              </Button>
            ))}
          </div>

          {/* TEAM CARDS */}
          <OurTeam />

          {/* OUR RESULTS */}
          <section
            id="results"
            className="mt-24 px-6 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent py-16 rounded-3xl border border-pink-400/20"
          >
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                Our Results
              </h1>
              <p className="mt-4 text-purple-600 text-lg">
                Real performance from real clients. We focus on growth that
                actually impacts your business.
              </p>
            </div>

            {/* Grid */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger>
                    <div
                      onClick={() => setSelectedImg(item.img)}
                      className="group cursor-pointer relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-4">
                        <h2 className="text-xl font-semibold text-white">
                          {item.title}
                        </h2>
                        <p className="text-gray-300 text-sm mt-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* Full Image Preview */}
                  <DialogContent className="max-w-4xl bg-black/90 border-none">
                    {selectedImg && (
                      <Image
                        src={selectedImg}
                        alt="Preview"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-xl"
                      />
                    )}
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
              Let’s Build Something Amazing Together
            </h3>

            <div className="mt-6 flex items-center justify-center">
              <WhatsAppFounder />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
