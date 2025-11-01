const featureHighlights = [
  {
    title: "AI-powered Integrity",
    description:
      "Multi-camera proctoring, voice anomaly detection, and device fingerprinting work together to defend against every known cheating vector.",
  },
  {
    title: "Micro-level Personalization",
    description:
      "Deliver unique question paths, timing, accommodations, and follow-up assignments for every candidate without reinventing your workflow.",
  },
  {
    title: "Real-world Edge Case Library",
    description:
      "Stress-tested against thousands of failure scenarios so your exams continue uninterrupted—even across campus outages or VPN lockdowns.",
  },
];

const securityStack = [
  {
    title: "Identity Guard",
    items: [
      "Biometric match-on-photo",
      "Gov ID OCR & liveness",
      "Progressive authentication",
    ],
  },
  {
    title: "Environment Shield",
    items: [
      "Room sweep with 3D mapping",
      "Browser isolation & tab forensics",
      "Peripheral anomaly alerts",
    ],
  },
  {
    title: "Signal Intelligence",
    items: [
      "Audio signature red flags",
      "Eye movement tracking (privacy-first)",
      "AI-corroborated incident reports",
    ],
  },
];

const caseStudies = [
  {
    logo: "Aurora University",
    stat: "96%",
    metric: "plagiarism drop semester-over-semester",
  },
  {
    logo: "Meridian Tech",
    stat: "4.8/5",
    metric: "candidate satisfaction across 38 labs",
  },
  {
    logo: "Northbridge College",
    stat: "2.1x",
    metric: "faster accreditation audits",
  },
];

const edgeAssurances = [
  "Auto-failover delivery mirrors keep tests live through regional outages.",
  "Adaptive bandwidth modes maintain HD video or fall back to smart snapshots.",
  "Offline capture buffer syncs once connectivity resumes—no lost progress.",
  "Incident co-pilot drafts reports aligned to university conduct policies.",
];

const pricingPlans = [
  {
    name: "Launch",
    price: "$349/mo",
    description: "Best for programs piloting high-stakes assessments",
    features: [
      "Up to 2k proctored sessions",
      "Role-based dashboards",
      "Adaptive test builder",
      "SOC 2 Type II controls",
    ],
    cta: "Start Pilot",
  },
  {
    name: "Scale",
    price: "$899/mo",
    description: "Designed for multi-campus universities",
    features: [
      "Unlimited test variants",
      "Cross-campus analytics lake",
      "Incident review workflows",
      "Dedicated success engineer",
    ],
    cta: "Book Demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for accreditation and consortium requirements",
    features: [
      "Private cloud tenancy",
      "On-premise edge collectors",
      "24/7 exam command center",
      "Guaranteed 99.99% uptime SLA",
    ],
    cta: "Talk to Sales",
  },
];

const faqs = [
  {
    question: "How do you ensure privacy while monitoring integrity?",
    answer:
      "All biometric data is edge-processed and instantly hashed. Reviewers only see synthesized integrity scores aligned with FERPA & GDPR requirements.",
  },
  {
    question: "Can we integrate with our LMS and SIS in real-time?",
    answer:
      "Yes. Native connectors for Canvas, Blackboard, Brightspace, Banner, and PeopleSoft sync cohort rosters, accommodations, and gradebooks in under 5 minutes.",
  },
  {
    question: "What happens if my campus network drops mid-exam?",
    answer:
      "Sentryline streams encrypted packets to redundant regions and caches video locally. Once connectivity returns, proctor logs reconcile without disrupting the learner.",
  },
  {
    question: "Do you support accreditation and compliance reporting?",
    answer:
      "Generate instant audit packets that map incidents to proctor transcripts, learner attestations, and resolution outcomes with a single export.",
  },
];

const testimonials = [
  {
    quote:
      "We certified 12,000 nursing candidates remotely with zero credential challenges. The anti-cheat signals made our board review seamless.",
    name: "Dr. Lena Ortiz",
    title: "Dean of Clinical Sciences, Meridian Tech",
  },
  {
    quote:
      "Personalized accommodations are actually personal now. Each student got a pathway that respected their needs while preserving rigor.",
    name: "Prof. Arjun Mehta",
    title: "Assessment Director, Northbridge College",
  },
];

const LinkArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 6l6 6-6 6"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="h-5 w-5 text-sky-400"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 select-none bg-[radial-gradient(circle_at_top,#4f46e5_0%,transparent_45%),radial-gradient(circle_at_center,#6366f1_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#22d3ee_0%,transparent_40%)] opacity-60" />
      <header className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-sky-500/40">
              SA
            </span>
            <div>
              <p className="text-lg font-semibold tracking-wide">Sentryline Assessments</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Integrity for every exam
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a className="transition-colors hover:text-white" href="#features">
              Features
            </a>
            <a className="transition-colors hover:text-white" href="#platform">
              Platform
            </a>
            <a className="transition-colors hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="transition-colors hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <a
              className="text-sm font-medium text-slate-200 transition-colors hover:text-white"
              href="#platform"
            >
              Explore Platform
            </a>
            <a
              className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/40 transition hover:bg-slate-200"
              href="#contact"
            >
              Request Demo
            </a>
          </div>
          <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white md:hidden">
            Menu
          </button>
        </div>
      </header>

      <main className="relative">
        <section className="relative">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-20 text-center md:flex-row md:items-start md:text-left">
            <div className="flex-1 space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-sky-200">
                Online testing, uncompromised
              </span>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                Secure assessments with anti-cheat intelligence built for real classrooms
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                Sentryline Assessments is the SaaS platform trusted by universities to deliver immersive, high-stakes exams online. Every session adapts in real time, protecting academic integrity while matching each learner&apos;s unique context.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/40 transition hover:brightness-110"
                >
                  Schedule a strategy session
                  <LinkArrow />
                </a>
                <a
                  href="#features"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white hover:text-white"
                >
                  View security stack
                </a>
              </div>
              <dl className="grid max-w-xl grid-cols-2 gap-6 text-left text-sm">
                <div>
                  <dt className="text-slate-400">Trusted across</dt>
                  <dd className="text-3xl font-semibold text-white">62 institutions</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Integrity incidents resolved</dt>
                  <dd className="text-3xl font-semibold text-white">11,400+</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Average deployment timeline</dt>
                  <dd className="text-3xl font-semibold text-white">14 days</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Candidate satisfaction</dt>
                  <dd className="text-3xl font-semibold text-white">4.9/5</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-1 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-[0_40px_120px_-30px_rgba(59,130,246,0.45)]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase text-slate-200">
                  Live Integrity Console
                </span>
                <span className="text-xs text-slate-400">Demo View</span>
              </div>
              <div className="rounded-2xl bg-slate-900/60 p-6 shadow-inner">
                <p className="text-sm font-semibold text-slate-200">
                  Candidate #A1194
                </p>
                <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-slate-300">
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                      Risk level
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-emerald-400">
                      Low
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      97.8% integrity confidence
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                      Identity
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">Verified</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      Biometric & ID match
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                      Alerts
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">0</p>
                    <p className="mt-1 text-[11px] text-slate-400">
                      No escalations detected
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/40 p-3 text-xs">
                    <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-semibold text-slate-100">Environment scan passed</p>
                      <p className="text-slate-400">
                        Desk cleared. Single monitor detected. Acoustic profile stable.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/40 p-3 text-xs">
                    <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <div>
                      <p className="font-semibold text-slate-100">Adaptive pathway engaged</p>
                      <p className="text-slate-400">
                        Candidate received lab variant C with accessibility overlays.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/40 p-3 text-xs">
                    <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div>
                      <p className="font-semibold text-slate-100">Signal intelligence listening</p>
                      <p className="text-slate-400">
                        Voice fingerprint baseline active. Incident co-pilot idle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white">
                Export incident transcript <LinkArrow />
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="relative border-t border-white/5 bg-slate-950/70">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Anti-cheat intelligence built into every workflow
              </h2>
              <p className="text-slate-300">
                Every assessment stage is guarded by real-time detection and actionable evidence. Our layered security removes friction from academic teams while safeguarding student trust.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {securityStack.map((stack) => (
                  <div
                    key={stack.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-indigo-500/20"
                  >
                    <p className="text-sm font-semibold text-white">{stack.title}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {stack.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {featureHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-20px_rgba(59,130,246,0.5)]"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    {feature.title}
                  </p>
                  <p className="mt-3 text-lg text-slate-200">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="relative border-t border-white/5 bg-slate-950/80">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-14 md:grid-cols-[1.3fr,1fr]">
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Micro-level customization that respects every learner
                </h2>
                <p className="text-slate-300">
                  Design branching assessments that adapt question difficulty, media, and scaffolding in real time. Sentryline synchronizes accommodations and test variants instantly across cohorts.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-sky-400/40 bg-slate-900/60 p-5">
                    <p className="text-sm font-semibold text-white">Personalized timing</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Automate extensions and pacing based on profiles imported from the accommodation center.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-400/40 bg-slate-900/60 p-5">
                    <p className="text-sm font-semibold text-white">Dynamic item pools</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Generate unique paths using blueprint constraints so academic rigor stays consistent across cohorts.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-400/40 bg-slate-900/60 p-5">
                    <p className="text-sm font-semibold text-white">Accessibility overlays</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Offer live captioning, color sliders, and screen reader optimization without extra dev work.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-sky-400/40 bg-slate-900/60 p-5">
                    <p className="text-sm font-semibold text-white">Performance feedback loops</p>
                    <p className="mt-2 text-sm text-slate-300">
                      Trigger remediation labs or micro-credentials as soon as an exam wraps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-30px_rgba(100,116,255,0.35)]">
                <p className="text-sm font-semibold text-white">Inspired by leading institutions</p>
                <div className="space-y-4">
                  {caseStudies.map((study) => (
                    <div
                      key={study.logo}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">{study.logo}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                          Real deployment impact
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-sky-400">{study.stat}</p>
                        <p className="text-[11px] text-slate-400">{study.metric}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-100"
                >
                  View the full case study library
                  <span className="group-hover:translate-x-1 transition-transform">
                    <LinkArrow />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/5 bg-slate-950/90">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-sky-900/40 p-10 shadow-[0_60px_140px_-40px_rgba(14,165,233,0.45)]">
              <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
                <div>
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Edge-case resilience for mission-critical exams
                  </h2>
                  <p className="mt-4 text-slate-300">
                    Our resilience lab has battle-tested Sentryline against hundreds of real incidents—from hurricane evacuations to zero-day browser exploits. We translate that knowledge into proactive safeguards.
                  </p>
                  <ul className="mt-6 space-y-4 text-sm text-slate-200">
                    {edgeAssurances.map((assurance) => (
                      <li key={assurance} className="flex items-start gap-3">
                        <CheckIcon />
                        <span>{assurance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    Incident playbooks ready on day one
                  </p>
                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="rounded-xl border border-white/5 bg-slate-900/70 p-4">
                      <p className="text-slate-200">Scenario: city-wide outage 32 minutes in</p>
                      <p className="mt-2 text-slate-400">
                        Examinees switch to low-bandwidth mode; exam timers pause; proctor escalation triggers mobile SMS instructions.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-slate-900/70 p-4">
                      <p className="text-slate-200">Scenario: suspected collusion across labs</p>
                      <p className="mt-2 text-slate-400">
                        Signals link correlated keystrokes and background whispers; investigation bundle exports for conduct office review.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-slate-900/70 p-4">
                      <p className="text-slate-200">Scenario: accessibility appeal mid-exam</p>
                      <p className="mt-2 text-slate-400">
                        Accommodation agent grants extra time instantly and logs justification for compliance teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="relative border-t border-white/5 bg-slate-950/95">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Transparent pricing for every innovation phase
              </h2>
              <p className="mt-4 text-slate-300">
                Annual contracts include onboarding sprints, faculty readiness training, and live exam command coverage during launch windows.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[0_40px_100px_-30px_rgba(129,140,248,0.4)] transition hover:translate-y-[-4px] ${
                    plan.popular ? "border-sky-400/60 bg-slate-900/80" : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                      Most chosen
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">
                      {plan.name}
                    </p>
                    <p className="mt-4 text-4xl font-bold text-white">{plan.price}</p>
                    <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
                  </div>
                  <ul className="flex-1 space-y-3 text-sm text-slate-200">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                      plan.popular
                        ? "bg-white text-slate-900 hover:bg-slate-200"
                        : "border border-white/30 text-slate-100 hover:border-white hover:text-white"
                    }`}
                  >
                    {plan.cta}
                    <LinkArrow />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-t border-white/5 bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Trusted by leaders redefining academic integrity
                </h2>
                <p className="text-slate-300">
                  Sentryline equips faculty, proctors, and administrators with context-rich insights. Hear how programs transformed remote assessments into their competitive advantage.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-30px_rgba(56,189,248,0.4)]"
                  >
                    <p className="text-sm text-slate-200">“{testimonial.quote}”</p>
                    <div className="mt-6 text-xs uppercase tracking-[0.3em] text-slate-400">
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-[11px] text-slate-400">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="relative border-t border-white/5 bg-slate-950/90">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-slate-300">
                Details on privacy, integrations, and high-stakes readiness so you can launch with confidence.
              </p>
            </div>
            <div className="mt-12 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {faq.question}
                  </p>
                  <p className="mt-3 text-sm text-slate-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative border-t border-white/5 bg-slate-950">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 p-10 text-center shadow-[0_60px_160px_-40px_rgba(129,140,248,0.5)]">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-200">
                Ready to evolve your assessment strategy?
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Launch an integrity-first program in under three weeks
              </h2>
              <p className="mt-4 text-slate-200">
                Partner with our readiness team to blueprint your exam catalog, configure policies, and train proctors—before your next intake arrives.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:hello@sentrylineassessments.com"
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Email the team
                  <LinkArrow />
                </a>
                <a
                  href="https://cal.com"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white hover:text-white"
                >
                  Book discovery call
                  <LinkArrow />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Sentryline Assessments</p>
            <p className="text-xs text-slate-400">
              Online testing that protects academic credibility without sacrificing experience.
            </p>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-[0.3em] text-slate-400">
            <a className="transition hover:text-white" href="#features">
              Platform
            </a>
            <a className="transition hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-white" href="#faq">
              Support
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Sentryline Assessments</p>
        </div>
      </footer>
    </div>
  );
}
