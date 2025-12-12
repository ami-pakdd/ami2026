import Countdown from "@/components/Countdown";

export default function DatesSection() {
  const dates = [
    { event: 'Workshop CFP Announcement', date: 'December 13, 2025' },
    { event: 'Paper Submission Deadline', date: 'February 22, 2026' },
    { event: 'Acceptance Notification', date: 'March 15, 2026' },
    { event: 'Camera-Ready Papers Due', date: 'March 29, 2026' },
    { event: 'Workshop Date', date: 'June 9, 2026', highlight: true },
  ];

  return (
    <section id="dates" className="mb-20 scroll-mt-24">

      <h2 className="text-3xl font-display font-bold mb-10 text-ctu-blue text-center">
        Important Dates
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-xl border border-ctu-blue/20 shadow-sm">
        <div className="p-8">

          <div className="space-y-6">
            {dates.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 ${
                  idx < dates.length - 1 ? 'border-b border-ctu-blue/20' : ''
                }`}
              >

                <span
                  className={`font-semibold text-ctu-blue ${
                    item.highlight ? 'text-xl' : 'text-lg'
                  }`}
                >
                  {item.event}
                </span>

                <span
                  className={`font-bold text-ctu-blue ${
                    item.highlight ? 'text-2xl' : 'text-xl'
                  }`}
                >
                  {item.date}
                </span>
              </div>
            ))}
          </div>

          <Countdown targetDate="2026-02-22T23:59:00-08:00" />

          <p className="mt-2 text-sm text-gray-600 text-center">
            Deadline: February 22, 2026 at 23:59 PST (UTC−8)
          </p>

        </div>
      </div>

    </section>
  );
}
