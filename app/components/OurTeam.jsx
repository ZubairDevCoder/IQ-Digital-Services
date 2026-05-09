"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import WhatsAppFounder from "./WhatsAppfounder";

const team = [
  {
    name: "Maryam Ijaz",
    role: "Senior Graphic Designer | UI/UX Designer | Brand Identity Specialist",
    img: "/girlspic.jpg",
    desc: "Creative UI/UX and branding designer with strong expertise in modern digital experiences. I help businesses build powerful brand identities, high-converting UI designs, and engaging social media visuals that attract clients and grow their online presence. Focused on clean design, user psychology, and conversion-driven visuals for startups, SaaS products, and business brands.",
  },
  {
    name: "Jawad Ahmed",
    role: "Senior Video Editor | Motion Graphics & Visual Storytelling Specialist",
    img: "/jawadahemd.jpg",
    desc: "Experienced video editor with 3+ years of expertise in crafting high-impact visual content for brands, startups, and digital campaigns. Specializes in cinematic editing, motion graphics, and storytelling-driven visuals that enhance engagement and brand identity. Focused on delivering polished, professional-grade edits that turn raw footage into compelling, audience-focused content designed to convert viewers into clients.",
  },
];

export default function OurTeam() {
  return (
    <section className="py-12 md:w-auto w-full  bg-[#0b0b10] text-white relative overflow-hidden rounded-xl">
      {/* Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600 blur-[180px]" />
      </div>

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Meet Our <br className="md:hidden block" /> Creative Team
        </h2>
        <p className="text-gray-400 mt-4">
          IQ Digital Services — Designers, marketers & editors building modern
          brands.
        </p>
      </div>

      {/* CO FOUNDER CARD */}
      <div className="flex justify-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="relative group w-full max-w-md cursor-pointer"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-indigo-500/20 via-cyan-500/10 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />

          {/* CARD */}
          <div className="relative group pb-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden text-center hover:-translate-y-2 transition duration-300">
            {/* Vertical text */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.4em] text-white/10">
              CO-FOUNDER
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[10px] tracking-[0.4em] text-white/10">
              IQ DIGITAL
            </div>

            {/* IMAGE */}
            <div className="relative w-full aspect-[4/4] mx-auto mb-6 rounded-2xl overflow-hidden border border-white/20 shadow-lg shadow-black/20">
              <Image
                src="/Cofounder.jpg"
                alt="Muhammad Ismaeel"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* NAME */}
            <h3 className="text-2xl font-semibold text-white tracking-wide">
              Muhammad Ismaeel
            </h3>

            {/* ROLE */}
            <p className="text-md mt-1 font-medium text-gray-50 tracking-wide">
              Co-Founder • Digital Marketing Specialist
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-300 mt-4 text-sm leading-relaxed max-w-xs mx-auto">
              4+ years experience in Meta & TikTok Ads. Focused on ROI-driven
              campaigns, audience targeting, and scaling brands through smart
              strategies.
            </p>

            {/* BUTTON */}
            <div className="mt-6 flex items-center justify-center w-full">
              <WhatsAppFounder />
            </div>
          </div>
        </motion.div>
      </div>

      {/* TEAM GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition" />

            {/* IMAGE */}
            {/* IMAGE */}
            <div className="relative  overflow-hidden ">
              {/* IMAGE */}
              <div className="relative w-full aspect-[4/3] mb-5 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* NAME */}
            <h3 className="text-xl font-semibold text-white tracking-tight">
              {member.name}
            </h3>

            {/* ROLE */}
            <p className="text-md mt-1 font-medium text-gray-50 tracking-wide">
              {member.role}
            </p>

            {/* DESCRIPTION */}
            <p className="text-sm mt-3 leading-relaxed text-gray-300/90">
              {member.desc}
            </p>
            {/* BUTTON */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
