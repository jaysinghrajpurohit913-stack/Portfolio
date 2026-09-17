export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Project Intern — UAV and Embedded Systems",
    org: "Faculty-Led Research Project, IIIT Kota",
    period: "June 2025 – August 2025",
    points: [
      "Engineered and calibrated a custom UAV for autonomous navigation",
      "15+ flight trials, 100% stability in challenging conditions",
      "Built a GPR-style embedded prototype",
      "Real-time sensor data logging pipeline (+15% detection accuracy)",
      "Procured and integrated 5+ hardware components",
      "Delivered 2 weeks ahead of the research deadline",
    ],
  },
  {
    role: "Coordinator",
    org: "ARC Robotics Club",
    period: "August 2025 – May 2026",
    points: [
      "Led technical workshops on UAV development and embedded systems for 50+ students",
      "Assembly of 2+ custom UAVs optimized for long-range telemetry",
      "Directed ongoing UAV projects targeting a 10–20 km operational range",
    ],
  },
  {
    role: "Facilitator",
    org: "Google Skills Arcade",
    period: "2026",
    points: ["Earned 750 credits through the program"],
  },
];
