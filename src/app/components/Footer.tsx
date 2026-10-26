import Link from "next/link";

const footerLinks = {
  University: [
    { label: "About Us", href: "#about" },
    { label: "Leadership", href: "#" },
    { label: "News & Press", href: "#" },
    { label: "Alumni Network", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Academics: [
    { label: "All Programs", href: "#programs" },
    { label: "Research", href: "#" },
    { label: "Library", href: "#" },
    { label: "Online Learning", href: "#" },
    { label: "Academic Calendar", href: "#" },
  ],
  "Student Life": [
    { label: "Campus Life", href: "#campus" },
    { label: "Student Clubs", href: "#" },
    { label: "Sports", href: "#" },
    { label: "Health & Wellness", href: "#" },
    { label: "Student Housing", href: "#" },
  ],
  Admissions: [
    { label: "How to Apply", href: "#admissions" },
    { label: "Scholarships", href: "#" },
    { label: "Tuition & Fees", href: "#" },
    { label: "Financial Aid", href: "#" },
    { label: "Campus Tours", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5">
      {/* Top gradient line */}
      <div className="w-full h-px bg-gradient-to-r from-amber-400 via-violet-500 to-blue-500" />

      {/* CTA Banner */}
      <div className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ready to Begin Your{" "}
            <span className="text-gradient">Journey?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Join 25,000+ students who chose Apex University to transform their futures.
            Applications are now open for 2025-26.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#admissions" className="btn-primary px-8 py-4">
              Apply Now – Class of 2025
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline px-8 py-4">
              Schedule a Campus Tour
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-black text-base">APEX</div>
                <div className="text-amber-400 font-black text-base -mt-1">UNIVERSITY</div>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Excellence in education since 1950. Shaping minds, building futures, changing the world.
            </p>
            <div className="flex gap-2">
              {["f", "𝕏", "in", "▶"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 text-sm hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <p>© 2025 Apex University. All rights reserved. | NAAC A++ Accredited | UGC Recognized</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility", "Sitemap"].map((item) => (
              <a key={item} href="#" className="hover:text-slate-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
