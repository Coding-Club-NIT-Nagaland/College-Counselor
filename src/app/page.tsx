import Link from "next/link";

const features = [
  {
    title: "AI-powered predictions",
    description:
      "Generate data-backed college shortlists tailored to your entrance rank, category, and preferences.",
  },
  {
    title: "Mentor matchmaking",
    description:
      "Connect with verified seniors for one-to-one sessions, resumes, and branching advice.",
  },
  {
    title: "Structured learning tracks",
    description:
      "Follow curated coding, DSA, and web development roadmaps with progress tracking and streaks.",
  },
];

const steps = [
  {
    title: "Tell us about you",
    description:
      "Share your exam details, rank, and what matters most: location, fees, programs, and learning goals.",
  },
  {
    title: "See your smart shortlist",
    description:
      "Review Likely, Target, and Reach college suggestions with probability scores and historical trends.",
  },
  {
    title: "Book mentors & start learning",
    description:
      "Schedule sessions with seniors, unlock curated tracks, and keep your momentum with daily micro tasks.",
  },
];

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "B.Tech CSE, NIT Jaipur",
    quote:
      "The predictions gave me clarity in the final counseling rounds and pairing with a mentor made all the difference.",
  },
  {
    name: "Rahul Iyer",
    role: "Incoming freshman, IIIT Hyderabad",
    quote:
      "Daily learning streaks kept me consistent. The web dev track is perfect for complete beginners like me.",
  },
];

const metrics = [
  { label: "Students guided", value: "25K+" },
  { label: "Mentor sessions completed", value: "12K" },
  { label: "Average shortlist accuracy", value: "91%" },
];

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-24 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-blue-100">
              Your college journey, guided end-to-end
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Get into the right college and thrive from day one.
            </h1>
            <p className="text-lg text-blue-100">
              CollegeCounselor blends historical data, AI predictions, and real mentor wisdom so you can make confident decisions and build the skills that matter.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-lg shadow-blue-900/30 transition hover:bg-blue-50"
              >
                Create your free account
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the platform
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/20 bg-white/10 px-4 py-6"
                >
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="text-sm text-blue-100">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-white/90">
                  Snapshot of your personalized dashboard
                </h2>
                <p className="mt-2 text-sm text-blue-100">
                  Predictions, mentors, learning progress — all in one place.
                </p>
              </div>
              <div className="space-y-4 rounded-2xl bg-white/10 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-100">
                    Likely admits
                  </span>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-100">
                    4 colleges
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "NIT Trichy", probability: "82%" },
                    { name: "IIIT Delhi", probability: "76%" },
                    { name: "VIT Vellore", probability: "71%" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl bg-white/10 px-3 py-3 text-sm"
                    >
                      <span>{item.name}</span>
                      <span className="font-semibold text-white">
                        {item.probability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-medium text-blue-100">
                  Next mentor session
                </p>
                <p className="mt-2 text-lg font-semibold">Tomorrow, 6:30 PM</p>
                <p className="text-sm text-blue-100">Riya (NIT Surathkal, CSE)</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-medium text-blue-100">
                  Learning streak
                </p>
                <p className="mt-2 text-3xl font-bold">14 days 🔥</p>
                <p className="text-sm text-blue-100">
                  Keep it up to unlock alumni AMA sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything you need to navigate counseling season smoothly
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From rank predictions to mentorship to structured upskilling, we bring it all together.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                How CollegeCounselor works
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                An intuitive flow that keeps you focused on decisions that matter.
              </p>
            </div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Join a community of mentors and students who have already cracked it.
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Verified seniors share playbooks, mock interviews, and first-year survival kits. Students stay accountable with streaks, micro tasks, and calendar sync.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  Streaks & badges
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  Mentor reviews
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
                  Personalized nudges
                </span>
              </div>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-3xl border border-white/10 bg-white/10 p-6"
                >
                  <p className="text-lg italic text-slate-100">
                    “{testimonial.quote}”
                  </p>
                  <p className="mt-4 text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-300">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-16 text-center shadow-xl sm:px-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Ready to map your best-fit colleges and build the skills that set you apart?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Create your dashboard in minutes and get matched to mentors who have walked the same path.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Start your journey
            </Link>
            <Link
              href="/mentors"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Browse mentors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
