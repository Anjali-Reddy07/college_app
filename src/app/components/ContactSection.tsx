"use client";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "General Inquiry",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = (await res.json()) as { success: boolean; error?: string; message?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL_FORM);

      // Auto-reset back to idle after 5 s
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMsg(message);
      setStatus("error");
      // Reset error state after 6 s so the form reappears
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 6000);
    }
  };

  const contacts = [
    {
      icon: "📍",
      label: "Address",
      value: "Apex University, 123 Knowledge Avenue,\nEducation City, Hyderabad - 500001",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 40 1234 5678\n+91 40 1234 5679",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "admissions@apex.edu.in\ninfo@apex.edu.in",
    },
    {
      icon: "⏰",
      label: "Working Hours",
      value: "Mon – Sat: 9:00 AM – 5:00 PM\nSunday: Closed",
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="section-title text-white mb-6">
            We&apos;d Love to{" "}
            <span className="text-gradient-blue">Hear From You</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions, programs, or campus life? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Contact Info ─────────────────────────────────────── */}
          <div className="space-y-6">
            {contacts.map((c, i) => (
              <div key={i} className="flex gap-4 glass rounded-2xl p-5 card-hover">
                <div className="text-3xl flex-shrink-0">{c.icon}</div>
                <div>
                  <div className="text-amber-400 font-bold text-sm mb-1">{c.label}</div>
                  <div className="text-slate-300 text-sm whitespace-pre-line leading-relaxed">
                    {c.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="glass rounded-2xl p-6">
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { name: "Facebook", color: "from-blue-500 to-blue-700", icon: "f" },
                  { name: "Twitter", color: "from-sky-400 to-sky-600", icon: "𝕏" },
                  { name: "Instagram", color: "from-pink-500 to-purple-600", icon: "📸" },
                  { name: "LinkedIn", color: "from-blue-600 to-blue-800", icon: "in" },
                  { name: "YouTube", color: "from-red-500 to-red-700", icon: "▶" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    title={social.name}
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white text-sm font-bold hover:scale-110 transition-transform duration-200 shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact Form ──────────────────────────────────────── */}
            <div className="glass rounded-3xl p-8 gradient-border relative z-10">
            {/* Success state */}
            {status === "success" && (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h3 className="text-white font-black text-2xl mb-2">Message Sent!</h3>
                <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            )}

            {/* Error state */}
            {status === "error" && (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-white font-black text-xl mb-2">Oops! Something went wrong.</h3>
                <p className="text-rose-400 text-sm max-w-xs leading-relaxed">{errorMsg}</p>
              </div>
            )}

            {/* Form (idle or loading) */}
            {(status === "idle" || status === "loading") && (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      disabled={status === "loading"}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      disabled={status === "loading"}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      disabled={status === "loading"}
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block"
                    >
                      Subject *
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      disabled={status === "loading"}
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-amber-400/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Programs</option>
                      <option>Scholarships</option>
                      <option>Campus Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    disabled={status === "loading"}
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "loading" ? (
                    <>
                      {/* Spinner */}
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
