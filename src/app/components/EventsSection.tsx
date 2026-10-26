"use client";

const events = [
  {
    date: { day: "15", month: "Nov" },
    title: "Annual Tech Summit 2025",
    desc: "Join 5,000+ tech enthusiasts, industry leaders, and innovators for a two-day tech extravaganza.",
    time: "9:00 AM - 6:00 PM",
    venue: "Main Auditorium",
    type: "Conference",
    color: "from-blue-400 to-cyan-500",
    icon: "💻",
    badge: "Free Entry",
  },
  {
    date: { day: "22", month: "Nov" },
    title: "Cultural Festival – Utsav",
    desc: "Celebrate diversity with music, dance, art, and culinary experiences from 60+ countries.",
    time: "11:00 AM - 10:00 PM",
    venue: "Campus Grounds",
    type: "Cultural",
    color: "from-rose-400 to-pink-500",
    icon: "🎭",
    badge: "2 Days",
  },
  {
    date: { day: "01", month: "Dec" },
    title: "Global Research Symposium",
    desc: "Researchers, professors, and students present breakthrough findings from across disciplines.",
    time: "10:00 AM - 5:00 PM",
    venue: "Science Block",
    type: "Academic",
    color: "from-violet-400 to-purple-500",
    icon: "🔬",
    badge: "Certificate",
  },
  {
    date: { day: "10", month: "Dec" },
    title: "Campus Placement Drive",
    desc: "500+ top companies visiting for placements. Register early to secure your interview slot.",
    time: "8:00 AM - 8:00 PM",
    venue: "Convention Hall",
    type: "Career",
    color: "from-amber-400 to-orange-500",
    icon: "💼",
    badge: "Register Now",
  },
  {
    date: { day: "20", month: "Dec" },
    title: "Sports Championship Finals",
    desc: "Cheer for your team in the grand finale of our inter-college sports championship.",
    time: "4:00 PM - 9:00 PM",
    venue: "Sports Complex",
    type: "Sports",
    color: "from-emerald-400 to-teal-500",
    icon: "🏆",
    badge: "Open to All",
  },
  {
    date: { day: "05", month: "Jan" },
    title: "New Year Convocation",
    desc: "Annual convocation ceremony celebrating the achievements of graduating batch of 2025.",
    time: "10:00 AM - 1:00 PM",
    venue: "Grand Auditorium",
    type: "Ceremony",
    color: "from-amber-400 to-yellow-500",
    icon: "🎓",
    badge: "Special",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">
            Campus Life
          </span>
          <h2 className="section-title text-white mb-6">
            Upcoming{" "}
            <span className="text-gradient-blue">Events & Activities</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            At Apex, campus life is vibrant and enriching. From tech summits to cultural festivals,
            there&apos;s always something exciting happening.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden card-hover group">
              {/* Top gradient */}
              <div className={`h-1 bg-gradient-to-r ${event.color}`} />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* Date */}
                  <div className="flex-shrink-0 text-center glass rounded-xl p-3 min-w-[60px]">
                    <div className={`text-2xl font-black bg-gradient-to-br ${event.color} bg-clip-text text-transparent`}>
                      {event.date.day}
                    </div>
                    <div className="text-slate-400 text-xs font-semibold uppercase">{event.date.month}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${event.color} text-slate-900`}>
                        {event.badge}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-sm leading-tight">{event.title}</h3>
                  </div>

                  <div className="text-2xl flex-shrink-0">{event.icon}</div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed mb-4">{event.desc}</p>

                <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {event.venue}
                  </span>
                </div>

                <button className={`w-full py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r ${event.color} text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                  Register for Event →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="btn-outline px-8">
            View All Events Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
