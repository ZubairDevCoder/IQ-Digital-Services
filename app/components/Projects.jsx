"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
  "/p5.jpg",
  "/p6.jpg",
  "/p7.jpg",
  "/p8.jpg",
  "/p9.jpg",
  "/p10.jpg",
  "/p11.jpg",
  "/p12.jpg",
  "/p13.jpg",
  "/p14.jpg",
  "/p15.jpg",
];

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 10);

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#0b0b10] text-white relative overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-600 blur-[180px]" />
      </div>

      {/* TOP CONTENT */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Client Results Portfolio
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          These are real client projects we worked on — including
          <span className="text-pink-400 font-semibold"> ads campaigns</span>,
          social media marketing, and performance-driven strategies that
          delivered real business results.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto relative z-10">
        {visibleProjects.map((img, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="group cursor-pointer relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                {/* Image */}
                <Image
                  src={img}
                  alt="project"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-sm font-semibold tracking-wide">
                    View Project
                  </span>
                </div>
              </div>
            </DialogTrigger>

            {/* FULL IMAGE MODAL */}
            <DialogContent className="max-w-5xl bg-black/90 border-none">
              <Image
                src={img}
                alt="project preview"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* BUTTON */}
      {!showAll && (
        <div className="text-center mt-12 relative z-10">
          <Button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 text-white bg-pink-500 hover:bg-pink-600 transition font-semibold"
          >
            View More Projects
          </Button>
        </div>
      )}
    </section>
  );
}
