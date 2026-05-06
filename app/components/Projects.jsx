"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
  "/p16.jpg",
  "/p17.jpg",
  "/p18.jpg",
  "/p19.jpg",
  "/p20.jpg",
];

export default function Portfolio() {
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#0b0b10] text-white relative overflow-hidden"
    >
      {/* glow bg */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-600 blur-[180px]" />
      </div>

      {/* heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Client Results Projects
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Real client work including ads campaigns, social media marketing, and
          performance strategies.
        </p>
      </div>

      {/* carousel */}
      <div className="max-w-6xl mx-auto relative z-10">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {projects.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      <Image
                        src={img}
                        alt="project"
                        width={800}
                        height={1000}
                        className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <span className="text-sm font-semibold">View</span>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* modal */}
                  <DialogContent className="max-w-4xl bg-black/90 border-none">
                    <Image
                      src={img}
                      alt="preview"
                      width={1200}
                      height={1600}
                      className="w-full h-auto rounded-xl"
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
