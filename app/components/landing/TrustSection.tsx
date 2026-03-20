const stats = [
  { value: "24/7", label: "Support" },
  { value: "1 Day", label: "Fast start" },
  { value: "High", label: "Conversion focus" },
  { value: "Direct", label: "Contact flow" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Trust signals
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Quick stats block
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-3xl font-bold">{item.value}</div>
              <div className="mt-2 text-sm text-white/65">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-white/15 p-8 text-center text-white/50">
          Logo strip placeholder
        </div>
      </div>
    </section>
  );
}