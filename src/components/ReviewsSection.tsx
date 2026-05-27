import Section from "@/components/ui/Section";

const reviews = [
  {
    quote:
      "A very cozy and atmospheric place. They have the best cannabis I’ve ever smoked in my life... The staff are very kind and always ready to help. I definitely recommend visiting this place if you’re in Phuket.",
    author: "Customer story",
  },
  {
    quote:
      "Really best place, i love there from first look! I will recommend for everyone this place!",
    author: "Returning customer",
  },
  {
    quote:
      "Cosmic Temple Vibes is an absolute gem in the Phuket cannabis world. With a warm and inviting atmosphere that makes you feel right at home.",
    author: "Visitor feedback",
  },
];

export default function ReviewsSection() {
  return (
    <Section id="reviews" className="bg-[#11100f]">
      <div className="space-y-12">
        <div className="space-y-4">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            What Customers Say
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Quality, guidance, and a feeling people remember.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.quote}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
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
    </Section>
  );
}