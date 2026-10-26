"use client";

const faculty = [
  {
    name: "Dr. Priya Sharma",
    role: "Dean of Engineering",
    dept: "Computer Science & AI",
    bio: "Former Google Research Lead with 20+ years in AI and machine learning. Published 80+ papers.",
    rating: 4.9,
    students: 5200,
    awards: 12,
    avatar: "PS",
    color: "from-blue-400 to-cyan-500",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Prof. Arjun Mehta",
    role: "Head of Sciences",
    dept: "Astrophysics & Space Science",
    bio: "NASA collaborator and Padma Shri awardee. Led groundbreaking research on exoplanets.",
    rating: 4.8,
    students: 3100,
    awards: 15,
    avatar: "AM",
    color: "from-violet-400 to-purple-500",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dr. Kavya Reddy",
    role: "Professor of Medicine",
    dept: "Biomedical Sciences",
    bio: "WHO advisor and biotech pioneer. Her vaccine research has saved millions of lives globally.",
    rating: 4.9,
    students: 2800,
    awards: 18,
    avatar: "KR",
    color: "from-rose-400 to-pink-500",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dr. Rajan Nair",
    role: "Professor of Economics",
    dept: "Finance & Business",
    bio: "Ex-RBI board member and international finance expert. Author of 5 bestselling textbooks.",
    rating: 4.7,
    students: 4200,
    awards: 9,
    avatar: "RN",
    color: "from-emerald-400 to-teal-500",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dr. Ananya Patel",
    role: "Professor of Law",
    dept: "International Law & Policy",
    bio: "UN Human Rights Counsel with expertise in constitutional law. Supreme Court advocate.",
    rating: 4.8,
    students: 1900,
    awards: 11,
    avatar: "AP",
    color: "from-amber-400 to-orange-500",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Prof. Vikram Singh",
    role: "Head of Arts & Design",
    dept: "Digital Arts & Design",
    bio: "Award-winning designer and creative director with projects for Fortune 500 companies.",
    rating: 4.6,
    students: 2500,
    awards: 7,
    avatar: "VS",
    color: "from-lime-400 to-green-500",
    social: { linkedin: "#", twitter: "#" },
  },
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400/30 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-rose-400 text-sm font-bold uppercase tracking-widest mb-4">
            World-Class Faculty
          </span>
          <h2 className="section-title text-white mb-6">
            Learn from the{" "}
            <span className="text-gradient">Best Minds</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our 500+ faculty members are pioneers in their fields — Nobel laureates, industry veterans,
            and visionary researchers dedicated to your success.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden card-hover group">
              {/* Top accent */}
              <div className={`h-1 bg-gradient-to-r ${member.color}`} />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-black text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{member.name}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-slate-500 text-xs">{member.dept}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{member.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-slate-800/60 rounded-xl p-2.5 text-center">
                    <div className="text-amber-400 font-black text-sm">⭐ {member.rating}</div>
                    <div className="text-slate-500 text-xs">Rating</div>
                  </div>
                  <div className="bg-slate-800/60 rounded-xl p-2.5 text-center">
                    <div className="text-white font-black text-sm">{(member.students / 1000).toFixed(1)}k</div>
                    <div className="text-slate-500 text-xs">Students</div>
                  </div>
                  <div className="bg-slate-800/60 rounded-xl p-2.5 text-center">
                    <div className="text-white font-black text-sm">{member.awards}</div>
                    <div className="text-slate-500 text-xs">Awards</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.social.linkedin}
                    className="flex-1 text-center py-2 glass rounded-xl text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className={`flex-1 text-center py-2 rounded-xl text-xs text-slate-900 font-semibold bg-gradient-to-r ${member.color} transition-all hover:shadow-lg`}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {[
            { value: "500+", label: "Faculty Members", icon: "👨‍🏫" },
            { value: "25", label: "Nobel Laureates", icon: "🏅" },
            { value: "3,000+", label: "Research Papers", icon: "📄" },
            { value: "95%", label: "PhD Qualified", icon: "🎓" },
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
