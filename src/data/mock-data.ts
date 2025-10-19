export const mockShortlist = {
  likely: [
    {
      id: "nit-surathkal",
      name: "NIT Surathkal",
      program: "B.Tech CSE",
      probability: 0.82,
      closingRank: 14500,
      trend: "stable",
      fees: "₹1.8L / year",
      location: "Karnataka",
    },
    {
      id: "iiit-delhi",
      name: "IIIT Delhi",
      program: "B.Tech CSAM",
      probability: 0.76,
      closingRank: 15200,
      trend: "rising",
      fees: "₹3.6L / year",
      location: "Delhi",
    },
  ],
  target: [
    {
      id: "nit-trichy",
      name: "NIT Trichy",
      program: "B.Tech ECE",
      probability: 0.64,
      closingRank: 12800,
      trend: "falling",
      fees: "₹1.9L / year",
      location: "Tamil Nadu",
    },
    {
      id: "iiit-hyd",
      name: "IIIT Hyderabad",
      program: "B.Tech CSE",
      probability: 0.53,
      closingRank: 11500,
      trend: "stable",
      fees: "₹3.2L / year",
      location: "Telangana",
    },
  ],
  reach: [
    {
      id: "iit-kgp",
      name: "IIT Kharagpur",
      program: "B.Tech CSE",
      probability: 0.28,
      closingRank: 8200,
      trend: "rising",
      fees: "₹2.4L / year",
      location: "West Bengal",
    },
    {
      id: "iit-rpr",
      name: "IIT Ropar",
      program: "B.Tech AI",
      probability: 0.31,
      closingRank: 9100,
      trend: "stable",
      fees: "₹2.1L / year",
      location: "Punjab",
    },
  ],
};

export const mockMentors = [
  {
    id: "mentor-1",
    name: "Riya Patel",
    college: "NIT Surathkal",
    branch: "CSE",
    expertise: ["Counseling strategy", "Roadmap planning", "DSA"],
    rating: 4.9,
    sessions: 210,
    price: "₹899 / session",
    availability: ["Tue", "Thu", "Sun"],
  },
  {
    id: "mentor-2",
    name: "Arjun Mehra",
    college: "IIIT Delhi",
    branch: "CSAM",
    expertise: ["System design", "Product internships"],
    rating: 4.8,
    sessions: 185,
    price: "₹799 / session",
    availability: ["Mon", "Wed", "Sat"],
  },
  {
    id: "mentor-3",
    name: "Shruti Rao",
    college: "IIT Bombay",
    branch: "EE",
    expertise: ["Branch change", "Hackathons"],
    rating: 4.7,
    sessions: 132,
    price: "₹999 / session",
    availability: ["Sat", "Sun"],
  },
];

export const mockMentorRequests = [
  {
    id: "req-1",
    student: "Aman Gupta",
    topic: "Branch change strategy",
    preferredSlot: "Oct 21 · 7:00 PM",
    status: "pending",
  },
  {
    id: "req-2",
    student: "Neha Joshi",
    topic: "Resume review for internships",
    preferredSlot: "Oct 22 · 5:30 PM",
    status: "pending",
  },
  {
    id: "req-3",
    student: "Karan Mishra",
    topic: "Counseling mock round",
    preferredSlot: "Oct 23 · 8:15 PM",
    status: "accepted",
  },
];

export const mockTracks = [
  {
    id: "coding-foundations",
    title: "Coding Foundations",
    level: "Beginner",
    progress: 68,
    duration: "6 weeks",
    modules: 8,
  },
  {
    id: "dsa-path",
    title: "DSA Beginner to Intermediate",
    level: "Intermediate",
    progress: 42,
    duration: "8 weeks",
    modules: 10,
  },
  {
    id: "web-dev",
    title: "Full-stack Web Development",
    level: "Mixed",
    progress: 25,
    duration: "10 weeks",
    modules: 12,
  },
];

export const mockSessions = [
  {
    id: "session-1",
    title: "Strategy call for JoSAA round 2",
    mentor: "Riya Patel",
    date: "Oct 20",
    time: "6:30 PM IST",
    status: "upcoming",
  },
  {
    id: "session-2",
    title: "Resume review & project guidance",
    mentor: "Arjun Mehra",
    date: "Oct 15",
    time: "8:00 PM IST",
    status: "completed",
  },
];

export const mockResources = [
  {
    id: "resource-1",
    title: "Python Basics Crash Course",
    track: "coding-foundations",
    type: "Video",
    duration: "35 mins",
    difficulty: "Easy",
  },
  {
    id: "resource-2",
    title: "Arrays and Sliding Window",
    track: "dsa-path",
    type: "Article",
    duration: "20 mins",
    difficulty: "Medium",
  },
  {
    id: "resource-3",
    title: "Responsive Layouts with Flexbox & Grid",
    track: "web-dev",
    type: "Workshop",
    duration: "45 mins",
    difficulty: "Medium",
  },
];

export const mockLearningModules: Record<
  string,
  Array<{
    id: string;
    title: string;
    duration: string;
    status: "locked" | "in-progress" | "completed";
    lessons: Array<{ id: string; title: string; type: string; completed: boolean }>;
  }>
> = {
  "coding-foundations": [
    {
      id: "cf-1",
      title: "Set up & syntax fundamentals",
      duration: "45 mins",
      status: "completed",
      lessons: [
        { id: "cf-1-1", title: "Install VS Code & Python", type: "Checklist", completed: true },
        { id: "cf-1-2", title: "Variables & types", type: "Video", completed: true },
        { id: "cf-1-3", title: "Input / Output", type: "Exercise", completed: true },
      ],
    },
    {
      id: "cf-2",
      title: "Control flow & functions",
      duration: "60 mins",
      status: "in-progress",
      lessons: [
        { id: "cf-2-1", title: "Conditional logic", type: "Video", completed: true },
        { id: "cf-2-2", title: "Loop patterns", type: "Quiz", completed: false },
        { id: "cf-2-3", title: "Functions workshop", type: "Project", completed: false },
      ],
    },
  ],
  "dsa-path": [
    {
      id: "dsa-1",
      title: "Arrays & pointers",
      duration: "70 mins",
      status: "in-progress",
      lessons: [
        { id: "dsa-1-1", title: "Sliding window patterns", type: "Article", completed: true },
        { id: "dsa-1-2", title: "Two pointers live class", type: "Video", completed: false },
        { id: "dsa-1-3", title: "Practice set", type: "Problem set", completed: false },
      ],
    },
    {
      id: "dsa-2",
      title: "Recursion & backtracking",
      duration: "85 mins",
      status: "locked",
      lessons: [
        { id: "dsa-2-1", title: "Recursion visualizer", type: "Tool", completed: false },
        { id: "dsa-2-2", title: "Backtracking in interviews", type: "Case study", completed: false },
      ],
    },
  ],
  "web-dev": [
    {
      id: "web-1",
      title: "Modern responsive layouts",
      duration: "55 mins",
      status: "in-progress",
      lessons: [
        { id: "web-1-1", title: "Flexbox deep-dive", type: "Workshop", completed: true },
        { id: "web-1-2", title: "CSS grid lab", type: "Interactive", completed: false },
        { id: "web-1-3", title: "Mini project: landing page", type: "Project", completed: false },
      ],
    },
    {
      id: "web-2",
      title: "Frontend tooling essentials",
      duration: "60 mins",
      status: "locked",
      lessons: [
        { id: "web-2-1", title: "Parcel vs Vite", type: "Article", completed: false },
        { id: "web-2-2", title: "ESLint + Prettier setup", type: "Guide", completed: false },
      ],
    },
  ],
};

export const mockAchievements = [
  {
    id: "ach-1",
    title: "Consistent performer",
    description: "Completed learning streak of 14 days",
    earnedOn: "Oct 17",
  },
  {
    id: "ach-2",
    title: "Mentor ready",
    description: "Attended 5 mentorship sessions",
    earnedOn: "Oct 10",
  },
];

export const mockAdminColleges = [
  {
    id: "college-1",
    name: "NIT Trichy",
    programs: 12,
    lastUpdated: "Oct 18",
    status: "published",
  },
  {
    id: "college-2",
    name: "IIIT Hyderabad",
    programs: 8,
    lastUpdated: "Oct 12",
    status: "draft",
  },
  {
    id: "college-3",
    name: "VIT Vellore",
    programs: 15,
    lastUpdated: "Oct 7",
    status: "published",
  },
];

export const mockAdminMentorQueue = [
  {
    id: "verify-1",
    name: "Ishita Rao",
    college: "IIT Bombay",
    documentStatus: "pending",
    submittedOn: "Oct 18",
  },
  {
    id: "verify-2",
    name: "Manav Singh",
    college: "BITS Pilani",
    documentStatus: "reviewing",
    submittedOn: "Oct 17",
  },
];

export const mockAuditLogs = [
  {
    id: "log-1",
    event: "Mentor verified",
    actor: "Admin · Ritu",
    timestamp: "Oct 18 · 09:45",
  },
  {
    id: "log-2",
    event: "Cutoff data upload",
    actor: "Admin · Sandeep",
    timestamp: "Oct 17 · 15:12",
  },
  {
    id: "log-3",
    event: "Resource published",
    actor: "Mentor · Riya",
    timestamp: "Oct 16 · 11:03",
  },
];

export const mockCounselingTimeline = [
  {
    id: "timeline-1",
    title: "Mock counseling drill",
    date: "Oct 21",
    description: "Run through priority list before JoSAA Round 2 lock-in.",
    type: "session" as const,
  },
  {
    id: "timeline-2",
    title: "Round 2 choice locking",
    date: "Oct 24",
    description: "Finalize seat preferences and submit before 5:00 PM IST.",
    type: "deadline" as const,
  },
  {
    id: "timeline-3",
    title: "Scholarship application webinar",
    date: "Oct 27",
    description: "Live mentor AMA on funding options and SOP tips.",
    type: "event" as const,
  },
];

export const mockNotifications = [
  {
    id: "notif-1",
    title: "Round 2 cutoffs updated",
    time: "2h ago",
    description: "Fresh data ingested for NITs — refresh predictions to see refined probabilities.",
  },
  {
    id: "notif-2",
    title: "Mentor feedback received",
    time: "6h ago",
    description: "Riya Patel added notes from yesterday's session. Review before your next call.",
  },
  {
    id: "notif-3",
    title: "Daily streak reminder",
    time: "10h ago",
    description: "Complete today's DSA quiz to keep the 14-day streak alive!",
  },
];
