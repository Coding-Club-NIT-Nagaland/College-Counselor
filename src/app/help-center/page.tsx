export default function HelpCenterPage() {
  const faqs = [
    {
      question: "How do predictions work?",
      answer:
        "Predictions are generated using previous year cutoffs, seat matrix updates, and your saved preferences. Update your rank and category details regularly for the best accuracy.",
    },
    {
      question: "Can I change mentor sessions?",
      answer:
        "Yes. Visit the mentorship tab in your dashboard to reschedule or request a different mentor up to 12 hours before the session.",
    },
    {
      question: "Where can I track my learning progress?",
      answer:
        "Open the learning tab in your dashboard to view streaks, module completion, and recommended next steps.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Help center
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Get answers faster.
          </h1>
          <p className="text-lg text-slate-600">
            Browse popular questions or reach out to our support team for personalized help.
          </p>
        </header>

        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">FAQs</h2>
          <ul className="space-y-4 text-sm text-slate-600">
            {faqs.map((faq) => (
              <li key={faq.question} className="space-y-2">
                <p className="font-semibold text-slate-900">{faq.question}</p>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Still need help?</h2>
          <p className="text-sm text-slate-600">
            Write to <span className="font-semibold text-slate-900">support@collegecounselor.ai</span> or
            send us a message through the contact form. We typically respond within 24 hours.
          </p>
        </section>
      </div>
    </div>
  );
}
