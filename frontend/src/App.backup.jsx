import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

const profile = {
  name: "Kavin R",
  role: "Full Stack Developer",
  location: "Rasipuram, Tamil Nadu, India",
  email: "kavincs2006@gmail.com",
  phone: "+91 97914 01290",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/kavin1122",
  resume: "/resume.pdf",
  pitch:
    "I design and build premium full-stack web applications with clean UI, smooth interactions, dashboard logic and scalable backend structure.",
};

const animatedName = "Kavin R";
const navItems = ["Home", "Work", "Skills", "Proof", "Contact"];

const skills = [
  "React", "JavaScript", "Node.js", "Express.js", "MongoDB", "SQL", "PostgreSQL", "Python", "Java", "Power BI", "Postman", "GitHub"
];

const projects = [
  {
    tag: "Analytics Product",
    title: "Placement Insights Dashboard",
    desc: "A recruitment analytics dashboard that tracks placement trends, student performance, KPIs, real-time updates and company hiring statistics.",
    stack: ["React.js", "JavaScript", "MongoDB"],
    impact: "Data-driven placement decisions",
  },
  {
    tag: "Productivity System",
    title: "Task Assignment Board",
    desc: "A workflow management app to assign, track and organize tasks with progress status, team collaboration and productivity monitoring.",
    stack: ["React.js", "Node.js", "MongoDB"],
    impact: "Organized team workflow",
  },
];

const proof = [
  ["7.50", "Current CGPA"],
  ["100%", "SSLC Score"],
  ["3", "Certifications"],
  ["16+", "Technical Skills"],
];

const education = [
  ["B.E. CSE", "Muthayammal Engineering College", "2023 – 2027", "CGPA 7.50"],
  ["HSC", "Ananda Vidhyalaya Matric Hr. Sec. School", "2022 – 2023", "74.6%"],
  ["SSLC", "Ananda Vidhyalaya Matric Hr. Sec. School", "2020 – 2021", "100%"],
];

const certificates = [
  "Microsoft Certified: Azure Fundamentals",
  "Salesforce Certified: Agentforce Specialist",
  "NPTEL: Distributed Systems",
];

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#02020a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(125,92,255,0.38),transparent_32%),radial-gradient(circle_at_15%_25%,rgba(0,245,255,0.16),transparent_28%),radial-gradient(circle_at_85%_65%,rgba(255,43,214,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.16]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,2,10,0.62)_45%,#02020a)]" />
      <motion.div className="absolute left-1/2 top-[-260px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[90px]" animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.85, 0.55] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[80px]" animate={{ x: [0, 90, 0], y: [0, -30, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute right-10 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[90px]" animate={{ x: [0, -65, 0], y: [0, 45, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
    </div>
  );
}

function MagneticButton({ children, primary, href, onClick, download }) {
  const base = "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-4 text-sm font-bold tracking-wide transition duration-300 hover:scale-[1.03]";
  const cls = primary ? "bg-white text-[#02020a] shadow-[0_0_45px_rgba(255,255,255,0.22)]" : "border border-white/12 bg-white/[0.045] text-white backdrop-blur-xl hover:bg-white/[0.08]";

  if (href) {
    return (
      <a href={href} download={download} target={download ? undefined : "_blank"} rel="noopener noreferrer" className={`${base} ${cls}`}>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-40 transition duration-700 group-hover:translate-x-full" />
        <span className="relative">{children}</span>
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${cls}`}>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-40 transition duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
    </button>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-12">
      <p className="mb-4 w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-cyan-200">{kicker}</p>
      <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">{title}</h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{text}</p>
    </motion.div>
  );
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  const goTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center overflow-hidden bg-[#02020a] text-white">
        <Background />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative text-center">
          <motion.div className="absolute -inset-20 rounded-full bg-violet-500/20 blur-[70px]" animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0.8, 0.35] }} transition={{ duration: 1.7, repeat: Infinity }} />
          <motion.div animate={{ y: [0, -12, 0], rotate: [0, 4, -4, 0] }} transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }} className="relative mx-auto grid h-28 w-28 place-items-center rounded-[2rem] border border-white/10 bg-white text-4xl font-black text-[#02020a] shadow-[0_0_60px_rgba(255,255,255,0.22)]">KR</motion.div>
          <div className="relative mt-8 flex justify-center text-5xl font-black tracking-[-0.06em] md:text-7xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {animatedName.split("").map((letter, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 60, scale: 0.4, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} transition={{ type: "spring", stiffness: 130, damping: 12, delay: i * 0.08 }} className="bg-gradient-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.42em] text-cyan-200">Preparing premium experience</p>
          <div className="relative mx-auto mt-7 h-1.5 w-80 overflow-hidden rounded-full bg-white/10">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.1 }} className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300" />
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden text-white">
      <Background />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#02020a]/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => goTo("Home")} className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white font-black text-[#02020a]">KR</span>
            <span className="hidden text-sm font-bold uppercase tracking-[0.25em] text-white/80 sm:block">Kavin R</span>
          </button>
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <button key={item} onClick={() => goTo(item)} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white hover:text-[#02020a]">{item}</button>
            ))}
          </nav>
          <div className="hidden md:block">
            <MagneticButton href={`mailto:${profile.email}`} primary>Hire Me</MagneticButton>
          </div>
          <button onClick={() => setMenu(!menu)} className="text-2xl md:hidden">{menu ? "✕" : "☰"}</button>
        </div>
        {menu && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            {navItems.map((item) => (
              <button key={item} onClick={() => goTo(item)} className="block w-full rounded-2xl px-4 py-3 text-left text-slate-300 hover:bg-white/10">{item}</button>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-32 md:pt-40">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="mx-auto max-w-6xl text-center">
          <div className="mx-auto mb-7 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Open to internships, projects & hiring
          </div>

          <h1 className="text-[clamp(3.4rem,9vw,9.5rem)] font-black leading-[0.82] tracking-[-0.09em] text-white">
            <span className="block text-white/95">Building</span>
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">Digital</span>
            <span className="block">Products.</span>
          </h1>

          <div className="mt-9 flex justify-center text-4xl font-black tracking-[-0.06em] md:text-7xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {animatedName.split("").map((letter, index) => (
              <motion.span key={index} className="inline-block bg-gradient-to-r from-white via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent" initial={{ opacity: 0, y: 95, scale: 0.35, filter: "blur(14px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} transition={{ type: "spring", stiffness: 130, damping: 12, delay: index * 0.08 }} whileHover={{ y: -12, scale: 1.15, textShadow: "0 0 30px rgba(103,232,249,0.8)" }}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{profile.pitch}</p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <MagneticButton onClick={() => goTo("Work")} primary>View Signature Work →</MagneticButton>
            <MagneticButton href={profile.resume} download="Kavin_R_Resume.pdf">Download Resume</MagneticButton>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }} className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-4">
          {proof.map(([num, label]) => (
            <div key={label} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 text-left backdrop-blur-xl">
              <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 transition duration-500 group-hover:translate-y-0" />
              <p className="relative text-4xl font-black tracking-[-0.06em] text-white">{num}</p>
              <p className="relative mt-2 text-sm text-slate-400">{label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle kicker="Signature Work" title="Projects presented like real products." text="Recruiters do not only see project names. They see the problem, stack, impact and product thinking behind each build." />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.12 }} className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl md:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 blur-3xl transition group-hover:scale-125" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">{project.tag}</span>
                  <span className="text-6xl font-black tracking-[-0.08em] text-white/10">0{i + 1}</span>
                </div>
                <h3 className="max-w-xl text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">{project.title}</h3>
                <p className="mt-6 text-base leading-8 text-slate-300">{project.desc}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.06] px-4 py-2 text-sm text-slate-200">{item}</span>
                  ))}
                </div>
                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Impact</p>
                  <p className="mt-2 text-xl font-bold text-white">{project.impact}</p>
                </div>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex font-bold text-cyan-200 transition group-hover:translate-x-2">Explore project ↗</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle kicker="Skill System" title="A stack built for full-stack execution." text="Frontend, backend, database, analytics and collaboration tools arranged for building practical real-world applications." />
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#02020a] to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#02020a] to-transparent" />
          <motion.div className="flex gap-4" animate={{ x: [0, -900] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
            {[...skills, ...skills].map((skill, i) => (
              <div key={`${skill}-${i}`} className="min-w-[210px] rounded-[1.5rem] border border-white/10 bg-black/30 p-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <p className="text-xl font-black text-white">{skill}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">Technology</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-5 py-24">
        <SectionTitle kicker="Trust Proof" title="Education, internship and certifications." text="A clean proof section showing academic strength, practical internship experience and industry certifications." />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
            <h3 className="text-3xl font-black tracking-[-0.05em]">Education Timeline</h3>
            <div className="mt-8 space-y-5">
              {education.map((item, i) => (
                <motion.div key={item[0]} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 md:grid-cols-[130px_1fr_110px] md:items-center">
                  <p className="text-sm text-cyan-200">{item[2]}</p>
                  <div>
                    <h4 className="font-bold text-white">{item[0]}</h4>
                    <p className="mt-1 text-sm text-slate-400">{item[1]}</p>
                  </div>
                  <p className="rounded-full bg-white/[0.06] px-3 py-2 text-center text-sm text-white">{item[3]}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">Internship</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]">Software Engineer Intern</h3>
              <p className="mt-2 text-slate-300">Yuga Yatra Retail (OPC) Pvt. Ltd. • Remote • 3 Months</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                <li>• Developed and debugged application features using core programming concepts.</li>
                <li>• Followed team development workflows and met project deadlines.</li>
                <li>• Participated in code reviews for clean and maintainable code quality.</li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">Certifications</p>
              <div className="mt-6 space-y-3">
                {certificates.map((cert) => (
                  <div key={cert} className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4 text-sm text-slate-200">🏆 {cert}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.045] p-8 text-center backdrop-blur-2xl md:p-14">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-[80px]" />
          <div className="relative">
            <p className="mx-auto mb-5 w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-200">Hire Ready</p>
            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Need a developer who can build clean and modern products?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am open to internships, full-stack development projects and opportunities where I can contribute, learn and grow.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <MagneticButton href={`mailto:${profile.email}`} primary>Mail Me Now</MagneticButton>
              <MagneticButton href={profile.github}>GitHub Profile</MagneticButton>
              <MagneticButton href={profile.linkedin}>LinkedIn</MagneticButton>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-300">
              <span className="rounded-full bg-white/[0.05] px-4 py-2">📍 {profile.location}</span>
              <span className="rounded-full bg-white/[0.05] px-4 py-2">✉️ {profile.email}</span>
              <span className="rounded-full bg-white/[0.05] px-4 py-2">📞 {profile.phone}</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © {year} Kavin R. Built as a premium hiring portfolio.
      </footer>
    </main>
  );
}
