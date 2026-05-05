import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 bg-[#0b0b10] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600 blur-[160px]" />
      </div>

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let’s Work Together
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Have an idea or project? Send us a message and we’ll help you bring it
          to life.
        </p>
      </div>

      {/* Form */}
      <form className="relative z-10 max-w-xl mx-auto space-y-5 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition resize-none"
        />
        <div className="flex items-center justify-center">
          <Button type="submit" variant="default" className="px-8 py-3">
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
}
