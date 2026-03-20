export default function BecomePartner() {
  return (
    <section id="partner" className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]">
              Become a Partner
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Build a long-term partnership with a clear growth model
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              This partnership flow is designed for serious operators who want a
              premium setup, direct communication, and a structure built for
              long-term scale.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
              The goal is simple: reduce friction, accelerate onboarding, and
              create a direct path from first contact to active collaboration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#FFC100] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Contact Us
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#FFC100] hover:text-[#FFC100]"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">01</div>
              <div className="mt-2 text-xl font-semibold text-white">
                Direct partnership access
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Start with a direct conversation and a simple qualification flow.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">02</div>
              <div className="mt-2 text-xl font-semibold text-white">
                Clear operating structure
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Move forward with a model focused on clarity, support, and speed.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">03</div>
              <div className="mt-2 text-xl font-semibold text-white">
                Scalable business flow
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Grow through a premium funnel built around conversion and direct
                contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}