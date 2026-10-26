"use client";

const facilities = [
  { name: "Central Library", desc: "2M+ books, 24/7 digital access", icon: "📚", count: "2M+", label: "Resources" },
  { name: "Research Labs", desc: "50+ state-of-the-art labs", icon: "🔬", count: "50+", label: "Labs" },
  { name: "Sports Complex", desc: "Olympic-grade facilities", icon: "🏊", count: "15+", label: "Venues" },
  { name: "Innovation Hub", desc: "Startup incubator & maker space", icon: "💡", count: "80+", label: "Startups" },
  { name: "Medical Center", desc: "24/7 health & wellness services", icon: "🏥", count: "24/7", label: "Care" },
  { name: "Student Housing", desc: "Fully-equipped modern hostels", icon: "🏠", count: "5,000", label: "Seats" },
  { name: "Arts & Culture", desc: "Galleries, theaters & studios", icon: "🎭", count: "10+", label: "Venues" },
  { name: "Dining Halls", desc: "Multi-cuisine food courts", icon: "🍽️", count: "8", label: "Outlets" },
];

export default function CampusSection() {
  return (
    <section id="campus" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-400 text-sm font-bold uppercase tracking-widest mb-4">
            Campus Life
          </span>
          <h2 className="section-title text-white mb-6">
            A World-Class{" "}
            <span className="text-gradient">Campus Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Spread across 500 acres, our campus is a self-sufficient ecosystem designed to inspire,
            nurture, and empower every student.
          </p>
        </div>

        {/* Campus Highlight Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent z-10" />
          <div
            className="h-80 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/campus_hero.jpg')" }}
          />
          <div className="absolute inset-0 z-20 flex items-center p-8 lg:p-16">
            <div className="max-w-lg">
              <h3 className="text-white font-black text-3xl mb-4">
                500-Acre Green Campus
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our eco-friendly campus boasts lush green spaces, modern architecture, and sustainable 
                infrastructure across 500 acres of prime land.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Solar Powered", "Zero Waste", "EV Campus", "Smart Buildings"].map((tag) => (
                  <span key={tag} className="glass px-3 py-1.5 rounded-full text-xs text-teal-400 font-semibold">
                    ✅ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 card-hover group text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                {facility.icon}
              </div>
              <div className="text-amber-400 font-black text-xl mb-0.5">{facility.count}</div>
              <div className="text-slate-500 text-xs mb-2">{facility.label}</div>
              <div className="text-white font-semibold text-sm mb-1">{facility.name}</div>
              <div className="text-slate-500 text-xs">{facility.desc}</div>
            </div>
          ))}
        </div>

        {/* Clubs & Activities */}
        <div className="mt-16 text-center">
          <h3 className="text-white font-bold text-2xl mb-8">
            200+ Clubs & <span className="text-gradient">Student Organizations</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Robotics Club", "Photography Society", "Debating Club", "Music Band",
              "Coding Club", "Green Earth Society", "Drama & Theater", "Entrepreneurship Cell",
              "Chess Club", "Astronomy Society", "AI Research Group", "Yoga & Wellness",
            ].map((club) => (
              <span key={club} className="glass px-4 py-2 rounded-full text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer">
                {club}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
