# Contributing to CollegeCounselor

Thank you for your interest in supporting CollegeCounselor, the Coding Club initiative (originally proposed by Meraj) helping aspirants navigate college admissions and mentorship. Contributors from every batch are welcome—please review the guidelines below before you start.

## Getting Started

- **Sync with the project admin:** Reach out to the 3rd-year project admin (CollegeCounselor lead) in the club Discord/WhatsApp group to express interest and get access to discussions or Notion boards.
- **Read the docs:** Familiarize yourself with `README.md`, `CODE_OF_CONDUCT.md`, and current roadmap items.
- **Pick an issue:** Look for issues tagged `good first issue`, `help wanted`, or `mentorship needed`. If something is unclear, comment on the issue or ping the admin.

## Development Workflow

1. **Fork & clone:**
   ```bash
   git clone https://github.com/<your-username>/counseller.git
   cd counseller
   npm install
   ```
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/<issue-key>-short-description
   ```
3. **Run locally:**
   ```bash
   npm run dev
   ```
   Keep changes modular and aligned with the feature request.
4. **Lint before committing:**
   ```bash
   npm run lint
   ```
5. **Commit message style:** Use present-tense imperatives, e.g., `feat: add mentor spotlight section`.
6. **Push & open a PR:**
   ```bash
   git push origin feature/<issue-key>-short-description
   ```
   Reference the issue number, describe your changes, add screenshots for UI updates, and list any follow-up tasks.

## Code Style & Expectations

- **TypeScript first:** Avoid `any`; justify exceptions inline.
- **Accessibility matters:** Use semantic HTML, proper aria labels, and responsive Tailwind classes.
- **Testing & QA:** Manually verify core flows touched by your change. Highlight edge cases considered.
- **Documentation:** Update relevant docs if your change impacts onboarding, endpoints, or UI copy.

## Reviews & Approvals

- **Primary reviewer:** The 3rd-year project admin or a delegated senior mentor.
- **Turnaround goal:** Initial feedback within 48 hours. Be responsive to requested changes.
- **Pairing:** Juniors/new members are encouraged to pair with mentors for the first few PRs.

## Community Standards

- Follow the expectations outlined in `CODE_OF_CONDUCT.md`.
- Respect contributors' time zones and academic schedules.
- Celebrate wins! Share demos, lessons learned, and future ideas in the community channel.

We are excited to build CollegeCounselor together. If you have questions or want to propose a new feature, open a GitHub Discussion or reach out directly to the project admin.
