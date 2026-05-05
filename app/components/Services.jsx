"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      desc: "Performance-driven marketing strategies to scale your brand and generate qualified leads.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Video Editing",
      desc: "Cinematic storytelling with motion graphics that capture attention and build engagement.",
      gradient: "from-pink-500/20 to-red-500/20",
    },
    {
      title: "Graphic Designing",
      desc: "Modern visual identity design for brands that want to stand out in a crowded market.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Ads Management",
      desc: "Expert management of Meta and TikTok ad campaigns focused on ROI, targeting, and scalable growth.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Social Media Marketing",
      desc: "Strategic content planning, posting, and growth techniques to build a strong and engaging online presence.",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
  ];

  // GSAP scroll animation (safe version)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".saas-card", {
        scrollTrigger: {
          trigger: "#services",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      className="relative py-28 px-6 bg-[#0b0b10] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600 blur-[180px]" />
      </div>

      {/* Heading (Framer Motion) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Premium SaaS Services
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          High-end digital solutions designed to grow, scale, and elevate your
          business.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={`saas-card relative p-8 rounded-2xl border border-white/10 
            bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Gradient Layer */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-30`}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-12 h-12 mb-5 rounded-xl bg-white/10 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
