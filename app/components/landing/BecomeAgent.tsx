export default function BecomeAgent() {
  return (
    <section id="agent" className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="rounded-[32px] border border-[#FFC100]/20 bg-gradient-to-b from-[#FFC100]/10 to-white/5 p-6 sm:p-8">
            <div className="rounded-[26px] border border-white/10 bg-black p-6 sm:p-8">
              <div className="inline-flex items-center rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]">
                Become an Agent
              </div>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Start fast with a simple and direct agent flow
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Join a structured model designed to help agents launch quickly,
                work with clear support, and focus on growth from day one.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#FFC100] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  Contact Us
                </a>

                <a
                  href="#calculator"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#FFC100] hover:text-[#FFC100]"
                >
                  See Earnings
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">Step 1</div>
              <div className="mt-2 text-xl font-semibold text-white">
                Reach out directly
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Contact the team through the main CTA and get immediate guidance.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">Step 2</div>
              <div className="mt-2 text-xl font-semibold text-white">
                Complete onboarding
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Move through a clear setup process with support at each step.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">Step 3</div>
              <div className="mt-2 text-xl font-semibold text-white">
                Launch your activity
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Start operating with a conversion-focused model and clear flow.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/50">Step 4</div>
              <div className="mt-2 text-xl font-semibold text-white">
                Scale with support
              </div>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Keep growing with direct communication and ongoing assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}