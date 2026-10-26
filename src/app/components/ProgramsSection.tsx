"use client";
import { useState } from "react";

const categories = ["All", "Engineering", "Science", "Arts", "Business", "Medicine", "Law"];

const programs = [
  {
    category: "Engineering",
    icon: "⚙️",
    title: "Computer Science & AI",
    desc: "Master the future of technology with our cutting-edge CS program focusing on AI, ML, and quantum computing.",
    duration: "4 Years",
    seats: 120,
    rating: 4.9,
    color: "from-blue-500 to-cyan-500",
    badge: "Most Popular",
  },
  {
    category: "Medicine",
    icon: "🧬",
    title: "Biomedical Sciences",
    desc: "Bridge biology and medicine to develop revolutionary treatments and understand human diseases.",
    duration: "5 Years",
    seats: 60,
    rating: 4.8,
    color: "from-rose-500 to-pink-500",
    badge: "High Demand",
  },
  {
    category: "Business",
    icon: "📈",
    title: "MBA - Business Leadership",
    desc: "Develop strategic leadership skills and business acumen to lead organizations in the global economy.",
    duration: "2 Years",
    seats: 80,
    rating: 4.7,
    color: "from-emerald-500 to-teal-500",
    badge: "Top Ranked",
  },
  {
    category: "Science",
    icon: "🔭",
    title: "Astrophysics & Space Science",
    desc: "Explore the cosmos, from black holes to exoplanets, with access to our state-of-the-art observatory.",
    duration: "4 Years",
    seats: 40,
    rating: 4.9,
    color: "from-violet-500 to-purple-500",
    badge: "New",
  },
  {
    category: "Arts",
    icon: "🎨",
    title: "Digital Arts & Design",
    desc: "Blend creativity with technology in our world-class design program with industry collaborations.",
    duration: "3 Years",
    seats: 60,
    rating: 4.6,
    color: "from-orange-500 to-amber-500",
    badge: "",
  },
  {
    category: "Law",
    icon: "⚖️",
    title: "International Law & Policy",
    desc: "Navigate global legal systems and international relations with our prestigious law faculty.",
    duration: "3 Years",
    seats: 50,
    rating: 4.7,
    color: "from-slate-500 to-zinc-500",
    badge: "",
  },
  {
    category: "Engineering",
    icon: "🏗️",
    title: "Civil & Environmental Eng.",
    desc: "Design sustainable infrastructure and tackle climate challenges with innovative engineering solutions.",
    duration: "4 Years",
    seats: 90,
    rating: 4.5,
    color: "from-lime-500 to-green-500",
    badge: "",
  },
  {
    category: "Business",
    icon: "💹",
    title: "Finance & FinTech",
    desc: "Master financial markets and emerging FinTech innovations driving the future of global finance.",
    duration: "4 Years",
    seats: 70,
    rating: 4.6,
    color: "from-yellow-500 to-amber-500",
    badge: "",
  },
];

export default function ProgramsSection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? programs : programs.filter((p) => p.category === active);

  return (
    <section id="programs" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-violet-400 text-sm font-bold uppercase tracking-widest mb-4">
            Academic Programs
          </span>
          <h2 className="section-title text-white mb-6">
            150+ Programs to{" "}
            <span className="text-gradient-blue">Ignite Your Passion</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From foundational degrees to specialized master's programs, discover the perfect path
            for your academic and professional goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/30"
                  : "glass text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((prog, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden card-hover group relative"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${prog.color}`} />

              {/* Badge */}
              {prog.badge && (
                <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-xs font-black px-2.5 py-1 rounded-full z-10">
                  {prog.badge}
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {prog.icon}
                </div>

                <h3 className="text-white font-bold text-base mb-2 leading-tight">{prog.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{prog.desc}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {prog.seats} Seats
                  </span>
                  <span className="flex items-center gap-1 text-amber-400">
                    ⭐ {prog.rating}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="#admissions"
                  className={`w-full block text-center py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r ${prog.color} text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                >
                  Apply Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-outline px-8 py-3">
            View All 150+ Programs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
