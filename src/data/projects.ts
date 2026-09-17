import type { Project } from "@/types/project";

// Adding a project should never require touching UI components.
// Every claim below traces to information provided about the actual projects.
// Items marked "TODO: verify" should be confirmed before launch (see section 57/66
// of the build brief — no fabricated claims).

export const projects: Project[] = [
  {
    slug: "pulse",
    title: "Pulse",
    subtitle: "URL Monitoring System",
    category: ["Backend", "Full Stack", "Monitoring"],
    status: "completed",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "Vite",
      "TypeScript",
      "MongoDB Atlas",
      "JWT",
      "HTTP-only cookies",
      "CORS",
      "Render",
    ],
    problem:
      "Tracking whether a set of URLs are up, and how quickly they respond, requires a system that polls consistently, records history, and surfaces failures — without the operator having to check manually.",
    description:
      "A URL monitoring system that tracks uptime and response time for a user's monitors, detects failures, and exposes monitor management behind authenticated, protected routes.",
    motivation:
      "Built to understand how monitoring and alerting systems work end-to-end: scheduled checks, state tracking, and surfacing failure over a normal request/response backend rather than a specialized time-series stack.",
    architecture: [
      "React (Vite) client",
      "Express REST API",
      "JWT auth with HTTP-only cookies",
      "MongoDB Atlas for monitors + check history",
      "Scheduled uptime checks",
      "Deployed on Render",
    ],
    decisions: [
      {
        decision: "HTTP-only cookie authentication",
        why: "Reduce direct JavaScript access to authentication credentials on the client.",
        tradeoff: "Requires careful CORS and credential configuration between the deployed frontend and backend origins.",
      },
      {
        decision: "Per-user monitor limits",
        why: "Keep the free-tier scheduled-check load predictable on a single small backend instance.",
        tradeoff: "Requires enforcing and surfacing the limit clearly in the UI rather than failing silently.",
      },
    ],
    // NOTE: no "what broke" entry is included for Pulse yet — add one via the `challenges`
    // array once a specific production failure (e.g. the auth/CORS issue this stack is prone
    // to) has actually been confirmed. Do not publish an invented incident.
    lessons: [
      "Monitor scheduling at small scale is straightforward; the harder part is making failure states legible to the user.",
    ],
    futureWork: [
      "Email/webhook alerting on monitor failure",
      "Historical uptime charts per monitor",
    ],
    evidence: [
      {
        type: "repository",
        label: "url-monitor-backend",
        detail: "Express API, auth, and monitor scheduling logic.",
        href: "https://github.com/jaysinghrajpurohit913-stack/url-monitor-backend",
      },
      {
        type: "deployment",
        label: "Backend deployment",
        detail: "Live API deployed on Render.",
        href: "https://url-monitor-backend-wi46.onrender.com",
      },
      {
        type: "deployment",
        label: "Live application",
        detail: "Deployed frontend, live and reachable.",
        href: "https://url-monitor-frontend.onrender.com",
      },
    ],
    github: "https://github.com/jaysinghrajpurohit913-stack/url-monitor-backend",
    live: "https://url-monitor-frontend.onrender.com",
    featured: true,
  },
  {
    slug: "relay",
    title: "Relay",
    subtitle: "Real-time Chat Application",
    category: ["Software", "Backend", "Real-time"],
    status: "completed",
    technologies: ["Node.js", "Express", "React", "Socket.IO", "MongoDB", "JWT"],
    problem:
      "Real-time messaging needs consistent state across a stateless HTTP API and a persistent socket connection, plus authentication that both layers agree on.",
    description:
      "A real-time chat application supporting direct and group conversations, with authenticated REST APIs for conversation/user management and Socket.IO for live messaging.",
    motivation:
      "Built to work through the specific problem of keeping REST-authenticated sessions and a WebSocket connection in agreement — the same JWT has to authorize both the API calls and the socket handshake.",
    architecture: [
      "React client",
      "REST API (Express) for conversations, users, auth",
      "Socket.IO server for real-time message delivery",
      "MongoDB for conversation and message models",
      "JWT-authenticated sockets",
    ],
    decisions: [
      {
        decision: "Socket.IO authentication via JWT handshake",
        why: "Keep a single source of truth for identity across REST and WebSocket layers instead of a separate session system for sockets.",
        tradeoff: "Socket reconnects need to re-present a valid token, adding client-side complexity around token refresh.",
      },
      {
        decision: "Conversation model shared by direct and group chats",
        why: "Avoid maintaining two parallel data models for what is structurally the same entity with a different participant count.",
        tradeoff: "Group-specific features (roles, adding/removing members) need extra guards that a chat-specific model wouldn't require.",
      },
    ],
    lessons: [
      "Authenticating a WebSocket connection is a genuinely different problem from authenticating a REST request, even when both use the same JWT.",
      "Modeling direct and group conversations as one entity paid off in code reuse but required more careful authorization checks.",
    ],
    futureWork: ["Message delivery/read receipts", "Typing indicators"],
    evidence: [
      {
        type: "note",
        label: "Socket authentication",
        detail: "JWT-based handshake shared with REST auth, protected conversation routes.",
      },
      {
        type: "architecture",
        label: "Real-time architecture",
        detail: "REST for state, Socket.IO for live delivery, MongoDB for persistence.",
      },
    ],
    // TODO: add verified GitHub repository URL for Relay.
    featured: true,
  },
  {
    slug: "ai-interview-readiness-engine",
    title: "AI Interview Readiness Engine",
    subtitle: "Evidence-grounded interview preparation",
    category: ["AI", "Backend"],
    status: "in-progress",
    technologies: ["TypeScript", "Express", "SQLite", "better-sqlite3", "Zod", "Anthropic API"],
    problem:
      "Generic interview prep doesn't account for what a specific resume actually claims or what a specific job description actually asks for — so preparation ends up broad instead of targeted.",
    description:
      "A system designed to turn a resume and a job description into structured interview preparation: extracting claims and role weights, running adaptive rounds, and grounding AI scoring in an evidence graph rather than free-form judgment.",
    motivation:
      "Exploring how to make an LLM-backed evaluation system show its work — connecting a readiness score back to the specific claims and evidence that produced it, instead of a single opaque number.",
    architecture: [
      "Resume + job description ingestion",
      "Candidate claim/skill extraction",
      "Role-weighted interview rounds",
      "Adaptive question engine",
      "AI scoring against an evidence graph",
      "Readiness / confidence / trend reporting",
      "Weakness clustering → personalized drills",
    ],
    decisions: [
      {
        decision: "SQLite via better-sqlite3 for structured state",
        why: "Keep the project deployable as a single process without provisioning a separate database service during development.",
        tradeoff: "Will need a migration path to a networked database if the project moves beyond single-instance deployment.",
      },
      {
        decision: "Zod-validated AI provider abstraction",
        why: "Structured, schema-checked outputs from the LLM rather than trusting free-form text parsing.",
        tradeoff: "Adds a layer of prompt/schema iteration whenever the output shape changes.",
      },
    ],
    lessons: [
      "Grounding an AI score in an explicit evidence graph makes failures easier to debug than a single black-box confidence number.",
    ],
    futureWork: [
      "Expand adaptive round coverage",
      "Public evidence-graph visualization for a completed report",
    ],
    evidence: [
      {
        type: "architecture",
        label: "Evidence-grounded scoring",
        detail: "AI scoring is checked against an explicit evidence graph rather than freeform judgment.",
      },
    ],
    featured: true,
  },
  {
    slug: "uav-sensor-research",
    title: "UAV / Sensor Research",
    subtitle: "UAV calibration, flight testing, and GPR-style sensor logging",
    category: ["Robotics", "Research"],
    status: "completed",
    technologies: [
      "UAV calibration",
      "Embedded systems",
      "Real-time sensor logging",
      "GPR signal processing",
      "Real-time video feed",
    ],
    problem:
      "A custom UAV needed to fly stably enough for autonomous navigation trials while carrying a GPR-style detection prototype that logs sensor data reliably in real time — a combination that has to be proven in the air, not just on a bench.",
    description:
      "Faculty-led research project engineering and calibrating a custom UAV for autonomous navigation, alongside a GPR-style embedded prototype with a real-time sensor data logging pipeline.",
    architecture: [
      "Sensors",
      "Data acquisition",
      "Signal processing",
      "Detection",
      "Logging",
      "Analysis",
    ],
    metrics: [
      "15+ flight trials with 100% stability maintained in challenging conditions",
      "Real-time sensor logging pipeline improved detection accuracy by 15%",
      "5+ hardware components procured and integrated",
      "Prototype fully assembled and operational 2 weeks ahead of the research deadline",
    ],
    lessons: [
      "Calibration and stability tuning that works in controlled tests still has to be validated across many real flight trials before it can be trusted.",
    ],
    evidence: [
      {
        type: "metric",
        label: "Flight trials",
        detail: "15+ flight trials with 100% stability maintained in challenging conditions, as Project Intern on a faculty-led research project at IIIT Kota (June–August 2025).",
      },
      {
        type: "metric",
        label: "Detection performance",
        detail: "Real-time sensor data logging pipeline that improved detection accuracy by 15%.",
      },
    ],
    featured: true,
  },
  {
    slug: "create-jr-backend",
    title: "create-jr-backend",
    subtitle: "npm CLI for scaffolding Express.js backends",
    category: ["Backend"],
    status: "completed",
    technologies: ["Node.js", "npm", "JavaScript"],
    problem:
      "Starting a new Express.js backend means repeating the same folder structure, environment configuration, and boilerplate every time — work that doesn't need to be redone by hand for each project.",
    description:
      "An npm CLI package that scaffolds a production-ready Express.js backend application with a single command, automating folder structure, environment configuration, dependency installation, and reusable boilerplate.",
    motivation:
      "Built after noticing the same backend setup steps recurring across projects, and released publicly so the same automation could save the same time for anyone else.",
    architecture: ["CLI entry point", "Project scaffolder", "Boilerplate templates", "Dependency installer"],
    metrics: ["Reduced backend project setup time from ~30 minutes to under 1 minute"],
    lessons: [
      "Publishing a CLI tool publicly on npm surfaces packaging and documentation concerns that a private script never forces you to solve.",
    ],
    evidence: [
      {
        type: "deployment",
        label: "npm package",
        detail: "Published publicly on npm with documentation.",
        href: "https://www.npmjs.com/package/create-jr-express-backend",
      },
      {
        type: "metric",
        label: "Setup time reduction",
        detail: "Cuts backend project setup time from approximately 30 minutes to under one minute.",
      },
    ],
    live: "https://www.npmjs.com/package/create-jr-express-backend",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
