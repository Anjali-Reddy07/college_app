"use client";
import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Choose Your Program",
    desc: "Browse our 150+ programs and find the one that aligns with your career goals and interests.",
    icon: "🎯",
    color: "from-amber-400 to-orange-500",
  },
  {
    num: "02",
    title: "Submit Application",
    desc: "Complete the online application form with your academic records, essays, and recommendations.",
    icon: "📝",
    color: "from-violet-400 to-purple-500",
  },
  {
    num: "03",
    title: "Entrance Exam",
    desc: "Take our comprehensive entrance examination designed to assess your academic readiness.",
    icon: "📚",
    color: "from-blue-400 to-cyan-500",
  },
  {
    num: "04",
    title: "Interview Round",
    desc: "Selected candidates are invited for a personal interview with our admissions panel.",
    icon: "🤝",
    color: "from-emerald-400 to-teal-500",
  },
  {
    num: "05",
    title: "Receive Offer",
    desc: "Successful candidates receive an official offer letter with scholarship details if applicable.",
    icon: "🎉",
    color: "from-rose-400 to-pink-500",
  },
  {
    num: "06",
    title: "Join & Thrive",
    desc: "Begin your transformative academic journey at Apex University and achieve your full potential.",
    icon: "🚀",
    color: "from-amber-400 to-yellow-500",
  },
];

const requirements = [
  { label: "Minimum Academic Score", value: "75%+" },
  { label: "Application Fee", value: "₹1,500" },
  { label: "Age Requirement", value: "17-25 years" },
  { label: "Language Proficiency", value: "IELTS 6.5 / TOEFL 90" },
];

export default function AdmissionsSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="admissions" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

      {/* Decorative */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">
            Admissions 2025-26
          </span>
          <h2 className="section-title text-white mb-6">
            Your Journey Starts{" "}
            <span className="text-gradient">Here</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Follow our streamlined six-step admissions process and join the Apex family.
            Applications open for the 2025-26 academic year.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === i
                    ? "glass border border-white/20 shadow-xl"
                    : "hover:bg-white/5 opacity-70 hover:opacity-100"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl flex-shrink-0 shadow-lg`}>
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>STEP {step.num}</span>
                    <h3 className="text-white font-bold text-sm">{step.title}</h3>
                  </div>
                  {activeStep === i && (
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="glass rounded-3xl p-8 gradient-border">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🎓</div>
                <h3 className="text-white font-black text-2xl mb-2">Apply for 2025-26</h3>
                <p className="text-slate-400 text-sm">Applications close December 31, 2025</p>
              </div>

              {/* Countdown */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: "66", label: "Days" },
                  { value: "14", label: "Hours" },
                  { value: "32", label: "Minutes" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/60 rounded-xl p-3 text-center">
                    <div className="text-2xl font-black text-amber-400">{item.value}</div>
                    <div className="text-slate-500 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>

              <a href="#" className="btn-primary w-full justify-center text-sm py-4 mb-3">
                Start Application
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#" className="btn-outline w-full justify-center text-sm py-3">
                Download Prospectus
              </a>
            </div>

            {/* Requirements */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span>📋</span> Basic Requirements
              </h4>
              <div className="space-y-3">
                {requirements.map((req, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">{req.label}</span>
                    <span className="text-amber-400 font-semibold">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scholarships Banner */}
        <div className="relative rounded-3xl overflow-hidden p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(139,92,246,0.15), rgba(59,130,246,0.15))" }}>
          <div className="absolute inset-0 glass pointer-events-none" />
          <div className="relative z-10">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-white font-black text-2xl mb-2">₹50 Crore in Scholarships Available</h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm">Merit-based, need-based, and sports scholarships available for deserving students.</p>
            <a href="#" className="btn-primary inline-flex">
              Check Scholarship Eligibility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
