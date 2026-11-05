import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/viraj-portrait.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viraj Darekar — B.Tech Data Science, NMIMS" },
      {
        name: "description",
        content:
          "Portfolio of Viraj Darekar, B.Tech Data Science student at MPSTME, NMIMS — AI agents, RAG systems, ML and security projects.",
      },
      { property: "og:title", content: "Viraj Darekar — Data Science Portfolio" },
      {
        property: "og:description",
        content: "Education, projects, publications and achievements of Viraj Darekar.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const education = [
  { school: "MPSTME, NMIMS University", detail: "B.Tech in Data Science", score: "CGPA 3.44", years: "2023 — 2027" },
  { school: "Pace Junior Science College", detail: "Higher Secondary (HSC)", score: "75.17%", years: "2021 — 2023" },
  { school: "Thakur Public School", detail: "ICSE", score: "92.20%", years: "2021" },
];

const projects = [
  {
    name: "Beema",
    repo: "https://github.com/nitaanth-11/Beema",
    live: "https://beema-jade.vercel.app/",
    tagline: "Agentic Insurance Claim Intelligence Platform",
    date: "Oct 2026",
    desc: "A LangGraph agent that triggers on LAYA's calibrated risk decisions and orchestrates 5 LLM tool-calls — policy RAG, claim history, similar-claim search, document verification and rule checks — producing cited investigator reports in under ~30s per claim. Backed by a versioned Qdrant knowledge base of 1,000+ policy, SOP and rule chunks.",
    stats: [["~40%", "less manual lookup"], ["~85%", "groundedness"], ["~80%", "top-5 relevance"]],
    tech: ["Python", "LangGraph", "LLM Agents", "RAG", "Qdrant", "FastAPI", "React", "Supabase", "Docker", "GCP"],
  },
  {
    name: "SentinelAI",
    repo: "https://github.com/tanayaparalkar/capstone",
    tagline: "Multi-Tool Security Scanner & Correlation Engine",
    date: "Jun 2026",
    desc: "A CLI security scanner orchestrating Semgrep, Bandit, GitLeaks, Trivy and OSV-Scanner, correlating overlapping findings into deduplicated, severity-graded issues with JSON, Markdown, HTML or SARIF reports. Includes optional local AI enrichment, a checksum-verified Docker image and a GitHub Actions CI/CD gate.",
    stats: [["5", "tools correlated"], ["4", "report formats"], ["Springer", "published"]],
    tech: ["Python", "Typer", "React", "Docker", "Semgrep", "Bandit", "GitLeaks", "Ollama", "GitHub Actions"],
  },
  {
    name: "JanRaksha",
    repo: "https://github.com/nitaanth-11/JanRaksha",
    live: "https://janraksha-wyc6.onrender.com/",
    tagline: "AI-Powered Digital Public Safety Platform",
    date: "May 2026",
    desc: "A full-stack platform to combat digital-arrest scams and fraud: OCR-based screenshot analysis, an explainable AI risk-scoring engine, and a fraud-intelligence dashboard linking suspicious phone numbers into a network graph for authorities.",
    stats: [["~95%", "OCR accuracy"], ["<2s", "per verdict"], ["Graph", "fraud network"]],
    tech: ["Python", "FastAPI", "SQLAlchemy", "Gemini Vision", "Neo4j", "JavaScript"],
  },
  {
    name: "Project Apex",
    repo: "https://github.com/nitaanth-11/Project-Apex",
    live: "https://project-apex-baip.onrender.com/",
    tagline: "EventOracle — Financial Event Prediction",
    date: "Mar 2026",
    desc: "Scrapes market-moving events — monetary policy, macro indicators, institutional flows, geopolitical news and social sentiment — to predict their impact on NIFTY, BANKNIFTY and Brent Oil. A two-stage ML model (impact classification + magnitude regression) served via Flask, with a Gemini agent for analysis and a React dashboard.",
    stats: [["2-stage", "ML model"], ["3", "assets tracked"], ["AI", "market agent"]],
    tech: ["Python", "Flask", "React", "MongoDB", "LightGBM", "Pandas", "Gemini API", "Render"],
  },
  {
    name: "AuthoDrive",
    repo: "https://github.com/viraj0710/Authodrive",
    tagline: "Smart Driver Authentication & Vehicle Safety System",
    date: "Sep 2025",
    desc: "A smart driver authentication and vehicle safety system that verifies drivers through face recognition, fingerprint scanning and OCR-based driving licence validation before allowing vehicle access. Includes in-car safety monitoring — drowsiness detection with buzzer alerts, rash-driving classification and emergency logging — backed by Flask APIs and Firebase-powered admin, learner and in-car dashboards.",
    stats: [["3", "verification checks"], ["3", "dashboards"], ["Live", "drowsiness alerts"]],
    tech: ["Python", "Flask", "Firebase", "Face Recognition", "OCR", "Computer Vision"],
  },
];

const certs = [
  {
    title: "SentinelAI: A Reproducible, Fail-Closed Framework for Correlated Security Scanning and Grounded AI Enrichment",
    org: "Publication · Accepted at ICDECT-2026 (Springer proceedings)",
    date: "Nov 2026",
  },
  { title: "Managing Projects with AI", org: "Coursera (AI CERTs)", date: "Sep 2026" },
  { title: "Python Programming Course", org: "MyCaptain", date: "Jan 2024" },
];

const achievements = [
  { title: "Prefinalist, ET Hackathon", text: "Reached the prefinals of the Economic Times Hackathon." },
  { title: "Football, Div 3 → Div 1", text: "Represented Thakur Public School in inter-school tournaments, helping the team climb from Division 3 to Division 1." },
  { title: "District-level athlete", text: "Competed at district level in skating and cricket for Thakur Public School." },
];

const skills = [
  "Python", "LLMs & NLP", "RAG & Agents", "Pandas", "NumPy", "Matplotlib", "Tableau",
  "MySQL", "Microsoft Excel", "FastAPI", "React", "Docker", "Android Studio",
];

const soft = [
  "Communicating data insights through visuals & reports",
  "Presenting projects to faculty, judges and clients",
  "Active listening & interpersonal skills",
  "Fluent in English and Hindi",
];

const nav = [
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Publications", "#publications"],
  ["Achievements", "#achievements"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

const socials = [
  { label: "GitHub", handle: "github.com/viraj0710", href: "https://github.com/viraj0710", Icon: Github },
  { label: "LinkedIn", handle: "in/viraj-darekar-5045763b8", href: "https://www.linkedin.com/in/viraj-darekar-5045763b8/", Icon: Linkedin },
];

function Section({ id, num, title, children }: { id: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-20">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="eyebrow">{num}</span>
        <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl">Viraj Darekar</a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="transition-colors hover:text-primary">{l}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div className="animate-rise">
            <p className="eyebrow mb-6">B.Tech Data Science · MPSTME, NMIMS · Class of 2027</p>
            <h1 className="font-display text-6xl leading-[0.95] md:text-8xl">
              Viraj<br />
              <span className="italic text-primary">Darekar</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Data Science student building agentic AI systems, retrieval pipelines and ML products —
              from insurance claim intelligence to fraud detection and security tooling.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5">
                View projects
              </a>
              <a href="#publications" className="rounded-full border border-foreground/30 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">
                Springer publication
              </a>
            </div>
          </div>
          <div className="animate-rise relative mx-auto w-full max-w-xs [animation-delay:150ms]">
            <div className="relative mx-auto aspect-square w-full">
              <div className="absolute -inset-3 rounded-full bg-accent" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-xl">
                <img
                  src={portrait}
                  alt="Portrait of Viraj Darekar"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="relative mt-6 grid grid-cols-3 gap-2 text-center">
              {[["3.44", "CGPA"], ["5", "Projects"], ["1", "Paper"]].map(([v, l]) => (
                <div key={l} className="rounded-lg border border-border bg-card py-3">
                  <div className="font-display text-2xl">{v}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section id="education" num="01" title="Education">
          <ol className="divide-y divide-border">
            {education.map((e) => (
              <li key={e.school} className="grid gap-2 py-6 md:grid-cols-[10rem_1fr_auto] md:items-baseline">
                <span className="font-mono text-sm text-muted-foreground">{e.years}</span>
                <div>
                  <h3 className="font-display text-2xl">{e.school}</h3>
                  <p className="text-muted-foreground">{e.detail}</p>
                </div>
                <span className="font-display text-3xl text-primary">{e.score}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" num="02" title="Projects">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl">{p.name}</h3>
                    <p className="mt-1 font-medium text-primary">{p.tagline}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">{p.date}</span>
                    {"repo" in p && p.repo && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on GitHub`} className="rounded-full border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary">
                        <Github size={18} />
                      </a>
                    )}
                    {"live" in p && p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open live ${p.name} app`} className="rounded-full border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-6 grid grid-cols-3 gap-2 border-y border-border py-4">
                  {p.stats.map(([v, l]) => (
                    <div key={l}>
                      <div className="font-display text-xl">{v}</div>
                      <div className="text-xs text-muted-foreground">{l}</div>
                    </div>
                  ))}
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground">{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="publications" num="03" title="Publications & Certifications">
          <ul className="space-y-4">
            {certs.map((c, i) => (
              <li key={c.title} className={`grid gap-2 rounded-2xl p-6 md:grid-cols-[1fr_auto] md:items-center ${i === 0 ? "bg-ink text-ink-foreground" : "border border-border bg-card"}`}>
                <div>
                  <h3 className="font-display text-xl md:text-2xl">{c.title}</h3>
                  <p className={`mt-1 text-sm ${i === 0 ? "text-ink-foreground/70" : "text-muted-foreground"}`}>{c.org}</p>
                </div>
                <span className="font-mono text-sm">{c.date}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="achievements" num="04" title="Achievements">
          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((a, i) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-5xl text-primary/40">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" num="05" title="Skills">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-5">Technical</p>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="rounded-full border border-foreground/20 px-4 py-2 text-sm">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5">Soft skills</p>
              <ul className="space-y-3">
                {soft.map((s) => (
                  <li key={s} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary">→</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" num="06" title="Get in touch">
          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
            The best way to reach me is by email, or find me on GitHub and LinkedIn.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:darekarviraj2@gmail.com"
              className="group inline-flex max-w-full items-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg md:gap-4 md:px-8 md:py-6"
            >
              <Mail size={22} className="shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0 font-display text-xl transition-colors [overflow-wrap:anywhere] group-hover:text-primary sm:text-3xl md:text-4xl">
                darekarviraj2@gmail.com
              </span>
            </a>
            <div className="grid gap-4 sm:max-w-xl sm:grid-cols-2">
              {socials.map(({ label, handle, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Viraj Darekar on ${label} (opens in a new tab)`}
                  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
                >
                  <Icon size={22} className="shrink-0 text-primary" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-display text-xl transition-colors group-hover:text-primary">{label}</div>
                    <div className="font-mono text-xs text-muted-foreground [overflow-wrap:anywhere]">{handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-12 md:flex-row md:items-end">
          <div>
            <p className="font-display text-4xl">Let's build something.</p>
            <p className="mt-2 text-ink-foreground/70">Viraj Darekar · B.Tech Data Science, MPSTME NMIMS</p>
          </div>
          <p className="font-mono text-xs text-ink-foreground/60">© 2026 Viraj Darekar</p>
        </div>
      </footer>
    </div>
  );
}
