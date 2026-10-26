"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Shreya Kapoor",
    role: "Alumni, Computer Science '23",
    company: "Google, Software Engineer",
    quote:
      "Apex University didn't just give me a degree — it gave me a worldview. The AI research lab helped me publish my first paper at age 21, which directly led to my offer from Google.",
    rating: 5,
    avatar: "SK",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Aditya Kumar",
    role: "MBA Student, 2024",
    company: "Founded TechStart (₹5Cr funding)",
    quote:
      "The entrepreneurship ecosystem at Apex is unreal. Our startup incubator gave us mentorship, seed funding, and a network that helped us raise ₹5 crore in our first round.",
    rating: 5,
    avatar: "AK",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Dr. Meera Joshi",
    role: "MBBS Alumni '20",
    company: "AIIMS, Resident Doctor",
    quote:
      "The medical simulation labs and clinical exposure at Apex are second to none. I graduated with confidence and a competence that my colleagues notice every single day.",
    rating: 5,
    avatar: "MJ",
    color: "from-rose-400 to-pink-500",
  },
  {
    name: "Rahul Verma",
    role: "Engineering Student, 2025",
    company: "Interned at SpaceX",
    quote:
      "Prof. Mehta's astrophysics program opened doors I never imagined. I'm currently interning at SpaceX as a 3rd year student — something I only dreamed of before Apex.",
    rating: 5,
    avatar: "RV",
    color: "from-violet-400 to-purple-500",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-400 text-sm font-bold uppercase tracking-widest mb-4">
            Student Stories
          </span>
          <h2 className="section-title text-white mb-6">
            Hear From Our{" "}
            <span className="text-gradient">Achievers</span>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 mb-8 relative gradient-border">
            {/* Quote mark */}
            <div className="text-8xl text-amber-400/20 font-black absolute top-4 left-8 leading-none select-none">
              "
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">⭐</span>
                ))}
              </div>

              <blockquote className="text-white text-lg md:text-xl leading-relaxed font-medium mb-8 italic">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                  {current.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-base">{current.name}</div>
                  <div className="text-slate-400 text-sm">{current.role}</div>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                    {current.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Selector */}
          <div className="flex justify-center gap-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                id={`testimonial-${i}`}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  active === i
                    ? "glass border border-white/20 scale-105"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div className="text-left hidden md:block">
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role.split(",")[0]}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {[
            { value: "₹24 LPA", label: "Average Package", icon: "💰" },
            { value: "₹1.2 Cr", label: "Highest Package", icon: "🏆" },
            { value: "500+", label: "Recruiting Companies", icon: "🏢" },
            { value: "98%", label: "Placement Rate", icon: "📈" },
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center card-hover">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-black text-amber-400">{item.value}</div>
              <div className="text-slate-400 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
