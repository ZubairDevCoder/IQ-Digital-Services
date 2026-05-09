"use client";

import { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function ResultsSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  const results = [
    {
      id: 1,
      img: "/results1.jpg",
      title: "Sales Growth",
      desc: "Increased conversions and revenue.",
    },
    {
      id: 2,
      img: "/results2.jpg",
      title: "Ad Campaign Growth",
      desc: "High ROI through targeted ads strategy.",
    },
    {
      id: 3,
      img: "/results3.jpg",
      title: "Brand Awareness",
      desc: "Strong brand visibility across platforms.",
    },
    {
      id: 4,
      img: "/results4.jpg",
      title: "Social Media Reach",
      desc: "Boosted engagement and audience growth.",
    },
    {
      id: 5,
      img: "/results5.jpg",
      title: "Lead Generation",
      desc: "Generated quality leads for businesses.",
    },
    {
      id: 6,
      img: "/results6.jpg",
      title: "SEO Performance",
      desc: "Improved Google rankings and traffic.",
    },
    {
      id: 7,
      img: "/results7.jpg",
      title: "Creative Video Ads",
      desc: "High-performing short video campaigns.",
    },
    {
      id: 8,
      img: "/results8.jpg",
      title: "E-commerce Success",
      desc: "Scaled online store sales effectively.",
    },
    {
      id: 9,
      img: "/results9.jpg",
      title: "Website Optimization",
      desc: "Better speed, UI and user experience.",
    },
    {
      id: 10,
      img: "/results10.jpg",
      title: "Client Satisfaction",
      desc: "Delivered premium quality digital services.",
    },
  ];

  return (
    <section
      id="results"
      className="relative mt-6 px-3 md:px-6 py-10 overflow-hidden bg-[#07070a] rounded-3xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] bg-pink-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-bounce" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Our Results
        </h1>

        <p className="mt-4 text-gray-400 text-base md:text-lg">
          Real performance from real clients. We focus on growth that creates
          real business impact.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 1800,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {results.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      onClick={() => setSelectedImg(item.img)}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
                    >
                      {/* Image */}
                      <div className="overflow-hidden">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={800}
                          height={800}
                          className="w-auto h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div
                        className="absolute inset-0 bg-black/60 opacity-0 
                        group-hover:opacity-100 transition duration-300 
                        flex flex-col justify-center items-center text-center p-6"
                      >
                        <h2 className="text-2xl font-bold text-white">
                          {item.title}
                        </h2>

                        <p className="text-gray-300 text-sm mt-3 max-w-xs">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>

                  {/* Preview Modal */}
                  <DialogContent className="max-w-5xl bg-[#111] border border-white/10">
                    {selectedImg && (
                      <Image
                        src={selectedImg}
                        alt="Preview"
                        width={1400}
                        height={900}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    )}
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
