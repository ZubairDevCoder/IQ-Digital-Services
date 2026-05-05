"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Ali Khan",
    role: "Real Estate Owner",
    rating: 5,
    time: "2 weeks ago",
    review: "IQ Digital Services completely transformed our online presence.",
  },
  {
    name: "Sara Ahmed",
    role: "E-commerce Brand",
    rating: 4.5,
    time: "1 week ago",
    review: "Amazing creativity and strong ad performance.",
  },
  {
    name: "Usman Tariq",
    role: "Startup Founder",
    rating: 4.8,
    time: "3 weeks ago",
    review: "Modern website with smooth UI and performance.",
  },
  {
    name: "Hassan Raza",
    role: "Restaurant Owner",
    rating: 4.7,
    time: "4 weeks ago",
    review: "Social media engagement increased a lot.",
  },
];

export default function ClientReviews({
  speed = 60, // lower = faster, higher = slower
}) {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for infinite loop
  const items = [...reviews, ...reviews];

  const renderStars = (rating) => (
    <div className="flex items-center gap-1 text-pink-400 text-sm">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>{rating >= star ? "★" : "☆"}</span>
      ))}
      <span className="text-white/50 ml-2 text-xs">{rating}</span>
    </div>
  );

  // Auto-play animation
  useEffect(() => {
    if (isPaused) return;

    const controls = animate(x, [0, -1000], {
      ease: "linear",
      duration: speed,
      repeat: Infinity,
      repeatType: "loop",
    });

    return controls.stop;
  }, [x, speed, isPaused]);

  return (
    <section className="py-20 bg-[#0b0b0f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">Client Reviews</h2>
          <p className="text-white/60 mt-3">
            Netflix-style smooth testimonial experience
          </p>
        </div>

        {/* Slider */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragElastic={0.2}
            dragConstraints={{ left: -2000, right: 0 }}
            className="flex gap-6 w-max"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[300px] p-6 rounded-2xl
                bg-white/5 backdrop-blur-2xl
                border border-white/10
                hover:border-pink-500/40
                hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]
                transition-all duration-300"
              >
                {/* Stars */}
                {renderStars(item.rating)}

                {/* Review */}
                <p className="text-white/70 text-md my-5">{item.review}</p>

                {/* User */}
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-md text-white/50">{item.role}</p>
                  <p className="text-[11px] text-white/30 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
