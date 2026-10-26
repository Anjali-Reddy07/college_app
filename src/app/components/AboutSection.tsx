"use client";
import { useEffect, useRef } from "react";

const values = [
  {
    icon: "🏆",
    title: "Academic Excellence",
    desc: "Rigorous curricula designed by world-leading academics, fostering critical thinking and intellectual growth.",
  },
  {
    icon: "🔬",
    title: "Cutting-Edge Research",
    desc: "Over 500 active research projects spanning technology, medicine, arts, and social sciences.",
  },
  {
    icon: "🌐",
    title: "Global Network",
    desc: "200+ international partnerships across 50 countries, opening doors to global opportunities.",
  },
  {
    icon: "💡",
    title: "Innovation Hub",
    desc: "State-of-the-art innovation labs and incubators that have birthed 80+ successful startups.",
  },
];

const milestones = [
  { year: "1950", event: "University Founded" },
  { year: "1975", event: "First Research Center Opened" },
  { year: "1995", event: "International Partnerships" },
  { year: "2010", event: "Innovation & Tech Hub" },
  { year: "2020", event: "Digital Transformation" },
  { year: "2025", event: "Ranked #1 in Region" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-reveal]").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span
            data-reveal
            className="inline-block text-amber-400 text-sm font-bold uppercase tracking-widest mb-4 opacity-0 transition-all duration-700"
            style={{ transform: "translateY(20px)" }}
          >
            About Apex University
          </span>
          <h2
            data-reveal
            className="section-title text-white mb-6 opacity-0 transition-all duration-700"
            style={{ transform: "translateY(20px)" }}
          >
            75 Years of Shaping{" "}
            <span className="text-gradient">World Leaders</span>
          </h2>
          <p
            data-reveal
            className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed opacity-0 transition-all duration-700"
            style={{ transform: "translateY(20px)" }}
          >
            Founded in 1950, Apex University has been at the forefront of academic excellence, producing
            Nobel laureates, industry titans, and visionary leaders who shape our world every day.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, i) => (
            <div
              key={i}
              data-reveal
              className="glass rounded-2xl p-7 card-hover gradient-border group opacity-0 transition-all duration-700"
              style={{ transform: "translateY(20px)" }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {v.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div
          data-reveal
          className="opacity-0 transition-all duration-700"
          style={{ transform: "translateY(20px)" }}
        >
          <h3 className="text-center text-white font-bold text-2xl mb-12">
            Our <span className="text-gradient">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-violet-500 to-blue-500 hidden lg:block" />
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className={`lg:${i % 2 === 0 ? "mb-12" : "mt-12 order-last"}`}>
                    <div className="text-amber-400 font-black text-xl mb-1">{m.year}</div>
                    <div className="text-slate-300 text-xs leading-relaxed">{m.event}</div>
                  </div>
                  <div className="w-4 h-4 bg-amber-400 rounded-full border-2 border-slate-950 shadow-lg shadow-amber-400/50 group-hover:scale-150 transition-transform duration-300 my-2 relative z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
