"use client";

import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      desc: "Performance-driven marketing strategies to scale your brand and generate qualified leads.",
    },
    {
      title: "Video Editing",
      desc: "Cinematic storytelling with motion graphics that capture attention and build engagement.",
    },
    {
      title: "Graphic Designing",
      desc: "Modern visual identity design for brands that want to stand out in a crowded market.",
    },
    {
      title: "Ads Management",
      desc: "Expert management of Meta and TikTok ad campaigns focused on ROI and scalable growth.",
    },
    {
      title: "Social Media Marketing",
      desc: "Strategic content planning and growth techniques for strong online presence.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-[#0b0b10] text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Premium Digital Services
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
          We provide modern digital solutions that help brands grow faster,
          attract customers, and build a strong online presence.
        </p>
      </motion.div>

      {/* Infinite Carousel */}
      <div className="max-w-7xl mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {services.map((service, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 
                  hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
