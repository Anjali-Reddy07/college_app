"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 25000, label: "Students Enrolled", suffix: "+" },
  { value: 150, label: "Programs Offered", suffix: "+" },
  { value: 98, label: "Placement Rate", suffix: "%" },
  { value: 75, label: "Years of Excellence", suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function HeroSection() {
  const [particleStyles, setParticleStyles] = useState<Array<React.CSSProperties>>([]);

  // Generate particle styles once on client mount
  useEffect(() => {
    const styles = Array.from({ length: 20 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 12}s`,
      animationDelay: `${Math.random() * 10}s`,
      width: `${2 + Math.random() * 4}px`,
      height: `${2 + Math.random() * 4}px`,
      background:
        i % 3 === 0
          ? "rgba(245,158,11,0.7)"
          : i % 3 === 1
          ? "rgba(139,92,246,0.7)"
          : "rgba(59,130,246,0.7)",
    }));
    setParticleStyles(styles);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/campus_hero.jpg"
          alt="Apex University Campus"
          fill
          className="object-cover"
          priority
          quality={75}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/40" />
      </div>

      {/* Animated particles */}
      <div className="particles">
        {particleStyles.map((style, i) => (
          <div key={i} className="particle" style={style} />
        ))}
      </div>

      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-amber-400 text-sm font-semibold mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          Ranked #1 University in the Region 2025
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        </div>

        {/* Main Heading */}
        <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight animate-slide-up">
          Shape Your{" "}
          <span className="text-gradient block sm:inline">Future</span>
          <br className="hidden sm:block" />
          <span className="text-white">With Excellence</span>
        </h1>

        <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          At Apex University, we nurture brilliance, inspire innovation, and empower graduates to lead
          the world. Join 25,000+ students on a transformative educational journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <a href="#admissions" className="btn-primary text-base px-8 py-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Apply for Admission
          </a>
          <a href="#programs" className="btn-outline text-base px-8 py-4">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
            Explore Programs
          </a>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className="glass rounded-2xl p-2 flex gap-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                id="program-search"
                type="text"
                placeholder="Search programs, courses, departments..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-sm outline-none"
              />
            </div>
            <button className="btn-primary text-sm px-6 py-3 whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 card-hover animate-slide-up"
              style={{ animationDelay: `${0.8 + i * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll Down</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
