"use client";

import PortraitHero from "./portrait-hero";
import ProjectCard from "./project-card";

import { Timeline } from "primereact/timeline";

const contact = {
  email: "thirapongp7@gmail.com",
  phone: "+66 87-328-4793",
  github: "https://github.com/TeerapongP",
};

const navItems = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
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
  "Kotlin",
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
      "Kotlin",
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
      "Robot Framework",
      "Grafana",
      "Unit testing",
      "On-premise deploy",
      "App Store release support",
    ],
  },
];

const experiences = [
  {
    date: "05 May 2026 - Present",
    title: "Software Engineer",
    company: "Ascend Money",
    location: "Bangkok, Thailand",
    detail: "Develop backend services with Kotlin and Spring, including REST APIs, batch jobs, and unit tests. Build automated tests with Robot Framework and Grafana dashboards for system and transaction monitoring.",
  },
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

const featuredProjects = [
  {
    ...projects[0],
    metric: "125",
    metricLabel: "UAT defects resolved",
    role: "Defect resolution & QA collaboration",
    challenge: "Prepare ONE 31 for a stable production release.",
    contribution: "Diagnosed and resolved defects during user acceptance testing, working with QA on release readiness.",
    outcome: "Resolved 125 UAT defects to support production stability.",
    steps: ["Diagnose", "Resolve", "Release support"],
  },
  {
    ...projects[3],
    metric: "1,500+",
    metricLabel: "sub-modules across the KTAM platform",
    role: "Frontend development",
    challenge: "Deliver consistent interfaces across a large asset management platform.",
    contribution: "Implemented Angular UI components from client specifications, built reusable shared libraries, and debugged application issues.",
    outcome: "Shared libraries supported consistent UI behavior across the platform.",
    steps: ["Client specifications", "Shared libraries", "Consistent UI"],
  },
  {
    ...projects[1],
    metric: "UI + API",
    metricLabel: "full-stack banking delivery",
    role: "Full-stack development",
    challenge: "Connect customer experience workflows with secure backend services.",
    contribution: "Built Spring Boot REST APIs, integrated PostgreSQL storage, and implemented Angular file management with role-based access and error handling.",
    outcome: "Delivered upload/download workflows and integrated frontend components with backend services.",
    steps: ["Angular interface", "Spring Boot APIs", "PostgreSQL"],
  },
];

const education = [
  {
    school: "King Mongkut's University of Technology North Bangkok",
    degree:
      "Master of Science in Digital Network and Information Security Management",
    date: "May 2025 - Present",
    note: "In progress · Current GPA 3.25",
  },
  {
    school: "Kasetsart University, Kamphaeng Saen Campus",
    degree: "Bachelor of Science in Information Technology Infrastructure",
    date: "Graduated 2023",
    note: "GPA 3.07",
  },
];

const graduateCoursework = [
  {
    term: "Semester 1 / 2568",
    gpa: "3.00",
    credits: "9",
    cumulativeGpa: "3.00",
    courses: [
      {
        code: "070315108",
        name: "Digital Network Technology",
        grade: "B",
        credits: "3",
        description:
          "Covers the fundamentals of digital network technology, including network protocols, routing protocols, and multimedia streaming. The course also introduces IoT fundamentals, basic cryptography, foundational security concepts, and cloud technology.",
      },
      {
        code: "070315109",
        name: "Digital Network and Information Security",
        grade: "C+",
        credits: "3",
        description:
          "Focuses on cybersecurity threats, attacks, vulnerabilities, security tools, system architecture, identity management, and access control. It also covers risk management, cryptography, public key infrastructure, data privacy, data governance, and cybersecurity culture.",
      },
      {
        code: "070315213",
        name: "Big Data Analytics in Cyber Security",
        grade: "B+",
        credits: "3",
        description:
          "Explores big data analytics for cybersecurity, including cyberattack frameworks, incident management, intrusion detection, and intrusion prevention. The course also applies machine learning and AI to data preparation, exploration, dimensionality reduction, and security measurement.",
      },
    ],
  },
  {
    term: "Semester 2 / 2568",
    gpa: "3.50",
    credits: "9",
    cumulativeGpa: "3.25",
    courses: [
      {
        code: "070315107",
        name: "Information System Auditing",
        grade: "B+",
        credits: "3",
        description:
          "Covers information system auditing processes, governance, risk, compliance, and IT management. The course includes system acquisition, development, implementation, operation, maintenance, service management, and protection of information assets under relevant laws, standards, frameworks, and best practices.",
      },
      {
        code: "070315215",
        name: "Ethical Hacking for Cyber Security",
        grade: "B+",
        credits: "3",
        description:
          "Covers information and network security tools, along with security assessment for wired networks, wireless networks, and web applications. The course emphasizes countermeasures, ethical hacking practices, and related legal considerations.",
      },
      {
        code: "070315309",
        name: "Project Management for Network and Information Security",
        grade: "B+",
        credits: "3",
        description:
          "Focuses on project management for network and information security work. Topics include project planning, cost estimation, human resources, communication, quality management, procurement planning, project monitoring, control, and project closing.",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="portfolio-site min-h-screen">
      <header className="portfolio-header sticky top-0 z-40 backdrop-blur-xl">
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
            aria-label="Email Thirapong Pinkaew"
            className="inline-flex items-center gap-2.5 rounded-xl border border-slate-900 bg-slate-950 px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md sm:px-4"
          >
            <span className="hidden sm:inline">Contact me</span>
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
        <PortraitHero />
        <div className="profile-highlights">
          {highlights.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>

        <section id="projects" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <SectionHeading
              eyebrow="Selected projects"
              title="Selected work. Concrete contributions."
              description="Frontend delivery, backend integration, and release support for enterprise teams. Here is what I contributed."
            />
            <div className="featured-projects">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.name}>
                  <div className="case-visual">
                    <span className="case-index">0{index + 1} / {project.role}</span>
                    <strong>{project.metric}</strong>
                    <span className="case-metric-label">{project.metricLabel}</span>
                    <ol className="case-flow" aria-label={project.name + " contribution overview"}>
                      {project.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                  </div>
                  <div className="case-body">
                    <p className="case-period">{project.period}</p>
                    <h3>{project.name}</h3>
                    <dl className="case-details">
                      <div><dt>The challenge</dt><dd>{project.challenge}</dd></div>
                      <div><dt>My contribution</dt><dd>{project.contribution}</dd></div>
                      <div><dt>The result</dt><dd>{project.outcome}</dd></div>
                    </dl>
                    <div className="case-stack">{project.stack.map((item) => <SkillPill key={item}>{item}</SkillPill>)}</div>
                  </div>
                </ProjectCard>
              ))}
            </div>
            <div className="project-followup"><p>More detail on my responsibilities and work history.</p><a href="/cv-thirapong-pinkaew.pdf" download>Download full CV <span aria-hidden="true">↗</span></a></div>
            <h3 className="mt-10 text-xl font-semibold text-slate-950">More project experience</h3>
            <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.filter((project) => !featuredProjects.some((featured) => featured.name === project.name)).map((project) => (
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

        <section id="experience" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Production work across enterprise teams"
            description="Hands-on delivery in full-stack roles, with repeated exposure to banking, asset management, telecom, public-sector, and mobile systems."
          />
          <div className="experience-stage mt-8 rounded-lg border border-slate-200 p-4 sm:p-8 lg:p-10">
            <Timeline
              className="experience-timeline"
              value={experiences}
              align="alternate"
              marker={() => (
                <span className="timeline-node flex h-9 w-9 items-center justify-center rounded-full border border-sky-200 bg-white text-sm text-sky-700 shadow-sm ring-4 ring-sky-50 sm:h-11 sm:w-11 sm:text-base">
                  <i className="pi pi-code" />
                </span>
              )}
              content={(item) => (
                <ProjectCard variant="experience">
                  <span className="timeline-date mb-3 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm md:hidden">
                    {item.date}
                  </span>
                  <p className="text-sm font-semibold text-sky-700">
                    {item.company}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-950 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                  {item.detail ? (
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {item.detail}
                    </p>
                  ) : null}
                </ProjectCard>
              )}
              opposite={(item) => (
                <span className="timeline-date inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm">
                  {item.date}
                </span>
              )}
            />
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="A stack built for practical delivery"
            description="Angular and TypeScript for frontend delivery; Kotlin, Spring Boot, and .NET for backend services, with automated testing and monitoring."
          />
          <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
            <ProjectCard variant="toolkit">
              <div className="toolkit-light-bar" aria-hidden="true" />
              <div className="skills-card-heading flex items-start gap-3 sm:items-center">
                <span className="skills-icon skills-icon-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
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
              <div className="skills-chips mt-7 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </ProjectCard>

            <div className="grid gap-6">
              {skillGroups.map((group) => (
                <ProjectCard key={group.title} variant="skill">
                  <div className="skills-group-content flex flex-col gap-4 sm:flex-row">
                    <span className="skills-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                      <i className={group.icon} />
                    </span>
                    <div className="skills-group-copy min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-slate-950">
                          {group.title}
                        </h3>
                        <span className="skills-count rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                          {group.items.length} skills
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {group.description}
                      </p>
                      <div className="skills-chips mt-5 flex flex-wrap gap-2.5">
                        {group.items.map((item) => (
                          <SkillPill key={item}>{item}</SkillPill>
                        ))}
                      </div>
                    </div>
                  </div>
                </ProjectCard>
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
            <div className="education-grid mt-8 grid gap-7 md:grid-cols-2">
              {education.map((item) => (
                <ProjectCard key={item.school} variant="education">
                  <span className="education-emblem" aria-hidden="true"><i className="pi pi-graduation-cap" /></span>
                  <p className="education-date text-sm font-semibold text-sky-700">
                    {item.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950 sm:text-xl">
                    {item.school}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {item.degree}
                  </p>
                  {item.note ? (
                    <p className="education-gpa mt-3 text-sm font-semibold text-slate-500">
                      {item.note}
                    </p>
                  ) : null}
                </ProjectCard>
              ))}
            </div>

            <details className="coursework-disclosure">
              <summary><span>Graduate coursework & grades<small>Digital Network and Information Security · GPA 3.25</small></span><span className="disclosure-icon" aria-hidden="true">+</span></summary>
              <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-2">
                {graduateCoursework.map((semester) => (
                  <article
                    key={semester.term}
                    className="semester-panel flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 sm:p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                      <h4 className="text-base font-semibold text-slate-950">
                        {semester.term}
                      </h4>
                    </div>

                    <div className="mt-4 grid flex-1 gap-3 lg:grid-rows-3">
                      {semester.courses.map((course) => (
                        <article
                          key={course.code}
                          className="course-panel flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4"
                        >
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <h5 className="text-sm font-semibold leading-6 text-slate-950 sm:text-base">
                                {course.name}
                              </h5>
                            </div>
                            <div className="flex shrink-0 flex-wrap gap-2">
                              <span className="inline-flex min-w-12 items-center justify-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                                {course.grade}
                              </span>
                            </div>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {course.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <ProjectCard variant="contact">
            <div className="contact-panel-grid grid lg:grid-cols-[1fr_25rem]">
              <div className="contact-copy p-6 sm:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
                  Contact
                </p>
                <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight sm:text-4xl">
                  Let&apos;s build reliable software for real business
                  workflows.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                  Based in Bangkok, with experience across full-stack web development,
                  enterprise frontend systems, backend services, and production support.
                  Contact me to discuss your team and the role.
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

              <div className="contact-actions border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div className="grid gap-3">
                  <ContactAction
                    href={`mailto:${contact.email}`}
                    icon="pi pi-send"
                    title="Email me"
                    description="Start a conversation"
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
          </ProjectCard>
        </section>
      </main>
    </div>
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
      download={href.endsWith(".pdf") ? true : undefined}
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

function SkillPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 sm:px-3.5 sm:text-sm">
      {children}
    </span>
  );
}
