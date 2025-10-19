# CollegeCounselor

CollegeCounselor is the Coding Club initiative that delivers an end-to-end counselling and mentorship companion for aspirants. The platform helps students navigate entrance exams, shortlist colleges, connect with verified seniors, and stay on track with structured learning paths.

---

## Table of Contents

1. [Mission](#mission)
2. [Project Idea](#project-idea)
3. [Overview](#overview)
4. [Key Features](#key-features)
5. [Architecture & Tech Stack](#architecture--tech-stack)
6. [Project Governance](#project-governance)
7. [Getting Started](#getting-started)
8. [Project Structure](#project-structure)
9. [Available Scripts](#available-scripts)
10. [Quality Gates](#quality-gates)
11. [Roadmap](#roadmap)
12. [Contributing](#contributing)
13. [Community & Support](#community--support)
14. [Project Credits](#project-credits)
15. [Acknowledgements](#acknowledgements)
16. [License](#license)

---

## Mission

CollegeCounselor exists to give every aspirant a clear, confident path from entrance exam ranks to thriving campus life.

## Project Idea

CollegeCounselor was conceptualized to bridge the gap between raw exam ranks and informed college decisions. Inspired by countless junior-senior conversations, the platform combines:

- Structured data analysis for smart college shortlisting.
- Mentor-led guidance that captures real campus experiences.
- Habit-forming learning tracks that keep aspirants accountable.


## Overview

CollegeCounselor unifies data-driven college counselling with hands-on mentorship and guided learning. The platform balances predictive analytics, peer-led advice, and gamified learning streaks to keep students engaged from exam prep to campus life.

### Why CollegeCounselor?

- **Data-backed guidance:** Generate AI-powered college shortlists tailored to rank, category, and personal priorities.
- **Human touch:** Match students with vetted seniors for one-on-one sessions, resume reviews, and branch-specific mentoring.
- **Skills to thrive:** Offer curated DSA and web development roadmaps with streak tracking and actionable micro tasks.

## Architecture & Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS 4 (utility-first design system)
- **Language:** TypeScript for end-to-end type safety
- **Tooling:** ESLint 9 for linting and quality checks

> _Note:_ As the product evolves, we will extend this section with API diagrams, deployment topology, and data flow once services are introduced.

## Project Governance

- **Project idea:** Initiated as “CollegeCounselor” within Coding Club.
- **Project admin:** 3rd-year senior (handles roadmap decisions, release approvals, and mentor onboarding).
- **Core team:** Open to contributors across batches; see [`CONTRIBUTING.md`](CONTRIBUTING.md) for onboarding steps.

## Getting Started

### Prerequisites

- Node.js 18.18+ (recommended: the active LTS release)
- npm 9+ (or an equivalent package manager such as pnpm, yarn, or bun)

### Installation

```bash
git clone https://github.com/<org-or-user>/counseller.git
cd counseller
npm install
```

### Local Development

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application. The dev server hot-reloads on file changes.

### Production Build

```bash
npm run build
npm start
```

### Environment Variables

Place environment-specific values in `.env.local`. At this stage the app runs without additional secrets, but future integrations (auth, analytics, mentoring APIs) will document required keys here.

## Project Structure

```text
.
├── public/             # Static assets (icons, illustrations)
├── src/
│   ├── app/            # Next.js App Router routes & layout
│   ├── components/     # Reusable UI components
│   ├── data/           # Static datasets used across pages
│   └── lib/            # Utilities and shared helpers
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
└── LICENSE.md
```

## Available Scripts

- `npm run dev` – start the development server with Turbopack
- `npm run build` – generate an optimized production build
- `npm start` – launch Next.js in production mode
- `npm run lint` – run ESLint with the repo’s configuration

## Quality Gates

- Keep `npm run lint` clean before opening a pull request.
- Prefer TypeScript strictness and avoid using `any` unless justified with inline comments.
- Add accessible, responsive UI elements when contributing to `src/components/` or `src/app/`.

## Roadmap

- [ ] Mentor booking flows with calendar sync
- [ ] Integrate real college datasets and ranking APIs
- [ ] Gamified progress tracking and weekly streak reports
- [ ] Role-based dashboards for mentors, admins, and students
- [ ] Deploy staging environment with preview builds

## Contributing

We welcome contributors from all batches. Review the guidelines in [`CONTRIBUTING.md`](CONTRIBUTING.md) to understand our workflow, coding standards, and review process. New members should introduce themselves in the project channel and pair with a mentor for the first issue.

## Community & Support

- Follow the expectations in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) to maintain a respectful, inclusive community.
- Reach out to the 3rd-year project admin or the Coding Club leadership for escalations.
- File bugs or feature suggestions via GitHub Issues.

## Project Credits

- **Idea by Meraj:** The concept and initial narrative were drafted by Meraj to ensure aspirants get data-driven guidance with real mentorship.
- **Project admin:** A committed 3rd-year senior coordinates contributors, roadmap alignment, and community updates.

## Acknowledgements

- **Idea origin:** The concept was proposed by Meraj to uplift aspirants with data, mentorship, and consistent practice.
- **Leadership:** The project is stewarded by a devoted 3rd-year senior who aligns releases, mentors, and contributor onboarding.
- **Community support:** Coding Club members, mentors, and juniors continually shape the roadmap with real-world feedback.

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to fork, adapt, and build on CollegeCounselor with attribution.
