const reviews = [
  {
    quote:
      "Warm atmosphere, friendly people, and a place that feels welcoming from the moment you walk in.",
    author: "Google Review",
  },
  {
    quote:
      "One of the most comfortable and calm shop experiences we found while visiting Phuket.",
    author: "Local Visitor",
  },
  {
    quote:
      "The atmosphere and staff energy made the experience memorable and approachable.",
    author: "Returning Customer",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Community Feedback
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Real experiences from visitors and locals.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.quote}
              className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8"
            >
              <p className="text-lg leading-8 text-zinc-200">
                “{review.quote}”
              </p>

              <div className="mt-6 text-sm text-zinc-500">
                {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
