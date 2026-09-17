// Single source of truth for identity + social links.
// Replace the TODO values with verified information — nothing here is invented,
// but a few fields need to be filled in before launch.

export const profile = {
  name: "Jaideep Singh Rajpurohit",
  shortName: "Jaideep",
  role: "Software · AI · Robotics",
  tagline: "Building across software, AI & the physical world.",
  summary:
    "Electronics & Communication Engineering student at IIIT Kota building software systems, AI applications, and real-world engineering projects.",
  location: "IIIT Kota, Rajasthan, India",

  education: {
    institution: "Indian Institute of Information Technology Kota",
    degree: "B.Tech, Electronics & Communication Engineering",
    period: "2023 – 2027",
    cgpa: "8.01 / 10",
  },

  links: {
    github: "https://github.com/jaysinghrajpurohit913-stack",
    linkedin: "https://www.linkedin.com/in/jaideep-0565a4292",
    email: "jaysinghrajpurohit913@gmail.com",
    resume: "/resume/jaideep-singh-rajpurohit.pdf",
    photo: "/images/jaideep.jpg",
  },

  currentFocus: [
    { label: "Backend Systems", state: "Building" as const },
    { label: "AI Engineering", state: "Deepening" as const },
    { label: "System Design", state: "Exploring" as const },
    { label: "DSA", state: "Building" as const },
  ],

  pillars: {
    software: {
      label: "Software",
      barLevel: 4, // qualitative, out of 4 — used only for the hero panel bars
    },
    ai: {
      label: "AI",
      barLevel: 3,
    },
    robotics: {
      label: "Robotics",
      barLevel: 2,
    },
  },
} as const;

export type FocusState = "Exploring" | "Building" | "Deepening" | "Researching";
