"use client";

import { Timeline } from "primereact/timeline";

const contact = {
  email: "thirapongp7@gmail.com",
  phone: "+66 87-328-4793",
  github: "https://github.com/TeerapongP",
};

const navItems = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const highlights = [
  { value: "3+", label: "years building production systems" },
  { value: "1,500+", label: "KTAM sub-modules supported" },
  { value: "125", label: "UAT defects resolved for release" },
  { value: "MSc", label: "Digital Network & Security in progress" },
];

const skills = [
  "Angular",
  "TypeScript",
  "React",
  "Next.js",
  "Nuxt 3",
  "Tailwind CSS",
  "PrimeNG",
  "Java",
  "Spring Boot",
  "Spring Batch",
  "C#",
  ".NET Core",
  "ASP.NET",
  "Prisma ORM",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "SQL",
  "Git",
];

const skillGroups = [
  {
    title: "Frontend",
    icon: "pi pi-desktop",
    description: "Client-facing interfaces, component systems, and responsive web apps.",
    items: [
      "Angular",
      "React",
      "Next.js",
      "Nuxt 3",
      "TypeScript",
      "Tailwind CSS",
      "PrimeNG",
      "HTML",
      "CSS",
      "jQuery",
    ],
  },
  {
    title: "Backend",
    icon: "pi pi-server",
    description: "REST APIs, batch jobs, service integration, and enterprise modules.",
    items: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "C#",
      ".NET Core",
      "ASP.NET",
      "RESTful APIs",
      "Prisma ORM",
    ],
  },
  {
    title: "Data & Delivery",
    icon: "pi pi-shield",
    description: "Databases, secure processing, deployment support, and release readiness.",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQL",
      "AES-256",
      "Git",
      "On-premise deploy",
      "App Store release support",
    ],
  },
];

const experiences = [
  {
    date: "Jun 2024 - Apr 2026",
    title: "Software Developer",
    company: "Sirisoft Public Company Limited",
    location: "Bangkok, Thailand",
    detail:
      "Build enterprise modules across Angular frontends and Java Spring Boot / .NET backends for banking, asset management, telecom, and data security platforms.",
  },
  {
    date: "Apr 2023 - May 2024",
    title: "Software Developer (Full Stack)",
    company: "Softsquare Co., Ltd",
    location: "Pathum Thani, Thailand",
    detail:
      "Developed and maintained client systems using Angular, Nuxt 3, React Native, Spring Boot, .NET 6, ASP.NET, and jQuery across web portals, mobile apps, and back-office tools.",
  },
];

const projects = [
  {
    name: "ONE 31",
    period: "Nov 2025 - Apr 2026",
    stack: ["QA collaboration", "UAT", "Production release"],
    summary:
      "Diagnosed and resolved 125 UAT defects to support a stable production release and improve system quality.",
  },
  {
    name: "KTB CEM",
    period: "Aug 2025 - Sep 2025",
    stack: ["Angular", "Spring Boot", "PostgreSQL / Oracle"],
    summary:
      "Built secure REST APIs and an Angular file management module with upload/download flows, structured data display, role-based access, and error handling.",
  },
  {
    name: "KTB Data Encryption Support",
    period: "Jun 2025",
    stack: ["Spring Boot", "Spring Batch", "AES-256", "PostgreSQL"],
    summary:
      "Created batch processing for bulk encryption of sensitive financial data using AES-256 and a 256-bit pepper.",
  },
  {
    name: "Krungthai Asset Management (KTAM)",
    period: "Jun 2024 - May 2025",
    stack: ["Angular", "TypeScript", "Shared libraries"],
    summary:
      "Implemented client-specified UI across a large asset management platform and built shared libraries for consistent behavior across 1,500+ sub-modules.",
  },
  {
    name: "Puean Tae Ngern Duan",
    period: "Oct 2023 - May 2024",
    stack: ["React Native", "Angular", ".NET 6", "C#"],
    summary:
      "Maintained mobile apps for iOS, Android, and Huawei plus a web back office, including issue resolution, security fixes, and release support.",
  },
  {
    name: "SSRU / IWRM / SMBC Web Systems",
    period: "2023",
    stack: ["Angular", "Nuxt 3", ".NET", "ASP.NET", "Spring Boot"],
    summary:
      "Delivered and supported back-office and banking web systems, focusing on UI implementation, troubleshooting, performance, and reliability.",
  },
];

const education = [
  {
    school: "King Mongkut's University of Technology North Bangkok",
    degree:
      "Master of Science in Digital Network and Information Security Management",
    date: "May 2025 - Present",
  },
  {
    school: "Kasetsart University, Kamphaeng Saen Campus",
    degree: "Bachelor of Science in Information Technology Infrastructure",
    date: "Graduated 2023",
    note: "GPA 3.07",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-xs font-semibold text-white shadow-sm transition group-hover:bg-sky-700 sm:h-10 sm:w-10 sm:text-sm">
              TP
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-950">
                Thirapong Pinkaew
              </span>
              <span className="mt-0.5 block text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                Software Developer
              </span>
            </span>
          </a>
          <div className="hidden items-center rounded-full border border-slate-200 bg-slate-50/80 p-1 shadow-sm md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950 hover:shadow-sm"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2.5 rounded-xl border border-slate-900 bg-slate-950 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md sm:px-4"
          >
            <span className="hidden sm:inline">Hire me</span>
            <i className="pi pi-send text-sm sm:order-first" />
          </a>
        </nav>
        <div className="border-t border-slate-100 px-4 py-2 md:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex flex-wrap gap-2">
                <Badge>Software Developer</Badge>
                <Badge>Full Stack</Badge>
                <Badge>Security-minded</Badge>
              </div>
              <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Building secure enterprise web systems for finance, banking,
                and business platforms.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg">
                I am Thirapong Pinkaew, a software developer experienced in
                Angular, Next.js, Spring Boot, .NET, and SQL platforms. I turn
                complex requirements into stable production software, from
                reusable frontend libraries to encrypted batch systems.
              </p>
              <div className="mt-8 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
                <HeroAction
                  href="#projects"
                  icon="pi pi-briefcase"
                  label="View projects"
                  variant="primary"
                />
                <HeroAction
                  href="/thirapong-pinkaew-resume.pdf"
                  icon="pi pi-download"
                  label="Download resume"
                />
                <HeroAction
                  href={contact.github}
                  icon="pi pi-github"
                  label="GitHub"
                  external
                />
              </div>
            </div>

            <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8 lg:p-12">
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm">
                    Core profile
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold leading-snug text-slate-950 sm:mt-6 sm:text-3xl">
                    Frontend precision with backend delivery range.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-600">
                    Comfortable across client-facing enterprise modules, REST
                    API design, database integration, on-premise deployment, and
                    production release support.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="text-2xl font-semibold text-slate-950">
                        {item.value}
                      </div>
                      <div className="mt-1 text-sm leading-5 text-slate-500">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Production work across enterprise teams"
            description="Hands-on delivery in full-stack roles, with repeated exposure to banking, asset management, telecom, public-sector, and mobile systems."
          />
          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-8 lg:p-10">
            <Timeline
              className="experience-timeline"
              value={experiences}
              align="alternate"
              marker={() => (
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-200 bg-white text-sm text-sky-700 shadow-sm ring-4 ring-sky-50 sm:h-11 sm:w-11 sm:text-base">
                  <i className="pi pi-code" />
                </span>
              )}
              content={(item) => (
                <article className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 text-left shadow-sm transition hover:border-sky-200 hover:bg-white hover:shadow-md sm:p-6">
                  <span className="mb-3 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm md:hidden">
                    {item.date}
                  </span>
                  <p className="text-sm font-semibold text-sky-700">
                    {item.company}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-950 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {item.detail}
                  </p>
                </article>
              )}
              opposite={(item) => (
                <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm">
                  {item.date}
                </span>
              )}
            />
          </div>
        </section>

        <section id="projects" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <SectionHeading
              eyebrow="Selected projects"
              title="Work that balances UI, APIs, data, and release pressure"
              description="A practical mix of frontend implementation, backend services, secure processing, support, and deployment."
            />
            <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md sm:p-7"
                >
                  <div className="flex h-full flex-col">
                    <p className="text-sm font-semibold text-sky-700">
                      {project.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-950 sm:text-xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <SkillPill key={item}>{item}</SkillPill>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="A stack built for practical delivery"
            description="Strongest around Angular and TypeScript, with backend depth in Spring Boot and .NET."
          />
          <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400" />
              <div className="flex items-start gap-3 sm:items-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white">
                  <i className="pi pi-sparkles" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">
                    Main toolkit
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Technologies I use across frontend, backend, and delivery.
                  </p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md sm:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                      <i className={group.icon} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-slate-950">
                          {group.title}
                        </h3>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                          {group.items.length} skills
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {group.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {group.items.map((item) => (
                          <SkillPill key={item}>{item}</SkillPill>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <SectionHeading
              eyebrow="Education"
              title="Information technology foundation with security specialization"
              description="Current graduate study is aligned with cybersecurity, secure data handling, and network-aware system design."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {education.map((item) => (
                <article
                  key={item.school}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
                >
                  <p className="text-sm font-semibold text-sky-700">
                    {item.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950 sm:text-xl">
                    {item.school}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {item.degree}
                  </p>
                  {item.note ? (
                    <p className="mt-3 text-sm font-semibold text-slate-500">
                      {item.note}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white shadow-xl shadow-slate-200/70">
            <div className="grid lg:grid-cols-[1fr_25rem]">
              <div className="p-5 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
                  Contact
                </p>
                <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">
                  Let&apos;s build reliable software for real business
                  workflows.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Available for software developer roles focused on full-stack
                  web development, enterprise frontend systems, secure backend
                  services, and production support.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/50 hover:bg-white/[0.07] sm:p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
                        <i className="pi pi-envelope" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-400">
                          Email
                        </p>
                        <p className="mt-1 break-all text-base font-semibold text-white group-hover:text-cyan-100">
                          {contact.email}
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${contact.phone.replaceAll(" ", "")}`}
                    className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/50 hover:bg-white/[0.07] sm:p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
                        <i className="pi pi-phone" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-400">
                          Phone
                        </p>
                        <p className="mt-1 text-base font-semibold text-white group-hover:text-cyan-100">
                          {contact.phone}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.03] p-5 sm:p-8 lg:border-l lg:border-t-0">
                <div className="grid gap-3">
                  <ContactAction
                    href={`mailto:${contact.email}`}
                    icon="pi pi-send"
                    title="Email me"
                    description="Start a conversation"
                  />
                  <ContactAction
                    href="/thirapong-pinkaew-resume.pdf"
                    icon="pi pi-download"
                    title="Download Resume"
                    description="One-page summary"
                  />
                  <ContactAction
                    href="/cv-thirapong-pinkaew.pdf"
                    icon="pi pi-file-pdf"
                    title="Download CV"
                    description="Full work history"
                  />
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 px-5 py-4 text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                  >
                    <i className="pi pi-github" />
                    View GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HeroAction({
  href,
  icon,
  label,
  variant = "secondary",
  external = false,
}: {
  href: string;
  icon: string;
  label: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const classes =
    variant === "primary"
      ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-200 hover:-translate-y-0.5 hover:bg-slate-800"
      : "border-slate-200 bg-white text-slate-800 shadow-sm hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-800 hover:shadow-md";
  const iconClasses =
    variant === "primary" ? "bg-white/15" : "bg-slate-100 group-hover:bg-white";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border px-5 py-3 text-sm font-semibold transition sm:w-auto ${classes}`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base transition ${iconClasses}`}
      >
        <i className={icon} />
      </span>
      <span>{label}</span>
    </a>
  );
}

function ContactAction({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-black/20 sm:p-5"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-slate-950 transition group-hover:bg-cyan-200 sm:h-12 sm:w-12">
          <i className={icon} />
        </span>
        <div>
          <p className="text-sm font-semibold text-white sm:text-base">{title}</p>
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        </div>
      </div>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 sm:text-sm">
      {children}
    </span>
  );
}

function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 sm:px-3.5 sm:text-sm">
      {children}
    </span>
  );
}
