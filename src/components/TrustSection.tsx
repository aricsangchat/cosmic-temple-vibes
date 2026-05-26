export default function TrustSection() {
  return (
    <section
      id="trust"
      className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Local Trust
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built around clarity, atmosphere, and local presence.
          </h2>

          <div className="space-y-4 text-zinc-300">
            <p>
              The experience is designed to feel calm, welcoming, and easy to navigate on both desktop and mobile.
            </p>

            <p>
              Friendly guidance, thoughtful presentation, and strong local identity help reinforce trust with visitors discovering the brand in Phuket.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
          <div className="aspect-[4/5] rounded-2xl border border-dashed border-white/20 bg-black/30 p-6 text-zinc-500">
            Placeholder image area for local business credentials or storefront photography
          </div>
        </div>
      </div>
    </section>
  );
}
