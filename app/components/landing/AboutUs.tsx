export default function AboutUs() {
  return (
    <section id="about" className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]">
              About Us
            </div>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              A direct, modern model built for agents and partners
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              We focus on simple onboarding, clear communication, and a fast
              contact flow that helps serious agents and partners get started
              without friction.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
              The page is designed to convert attention into action through a
              premium presentation, a strong calculator, and direct access to
              support when the visitor is ready to move forward.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#FFC100]/20 bg-gradient-to-b from-[#FFC100]/10 to-white/5 p-6 sm:p-8">
            <div className="rounded-[26px] border border-white/10 bg-black p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/50">Speed</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    Fast onboarding
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/50">Support</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    Direct communication
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/50">Structure</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    Conversion-focused flow
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/50">Growth</div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    Scalable partnership model
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-[#FFC100]/30 bg-[#FFC100]/5 p-5 text-center text-sm text-white/60">
                About section visual placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}