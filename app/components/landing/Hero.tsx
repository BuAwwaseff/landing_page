"use client";

import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const siteHref = "https://refpa3665.com/L?tag=d_5002529m_2170c_MIKEMEL";
  const { t, isArabic } = useLanguage();

  return (
    <section id="hero" className="landing-section-line border-b bg-transparent">
      <div
        dir="ltr"
        className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-2 px-6 md:grid-cols-2 md:py-12 lg:gap-8"
      >
<div
  dir={isArabic ? "rtl" : "ltr"}
  className={[
    "max-w-4xl",
    isArabic ? "order-2 md:order-2 text-right" : "order-1 md:order-1",
  ].join(" ")}
>
          <div className="inline-flex items-center rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]">
            {t.home.hero.badge}
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {t.home.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
            {t.home.hero.description}
          </p>

<div
  className={[
    "mt-10 flex flex-wrap gap-4",
    isArabic ? "justify-right" : "",
  ].join(" ")}
>
            <a
              href="#register"
              className="landing-button-secondary rounded-full px-6 py-3 text-sm font-semibold"
            >
              {t.home.hero.becomeAgent}
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="landing-surface landing-hover rounded-2xl p-4">
              <div className="text-2xl font-bold text-[#FFC100]">24/7</div>
              <div className="mt-1 text-sm text-white/65">
                {t.home.hero.support}
              </div>
            </div>

            <div className="landing-surface landing-hover rounded-2xl p-4">
              <div className="text-2xl font-bold text-[#FFC100]">
                {t.home.hero.fast}
              </div>
              <div className="mt-1 text-sm text-white/65">
                {t.home.hero.onboarding}
              </div>
            </div>

            <div className="landing-surface landing-hover col-span-2 rounded-2xl p-4 sm:col-span-1">
              <div className="text-2xl font-bold text-[#FFC100]">
                {t.home.hero.direct}
              </div>
              <div className="mt-1 text-sm text-white/65">
                {t.home.hero.managerAccess}
              </div>
            </div>
          </div>
        </div>

        <div
  className={[
    "relative flex min-h-[420px] items-center justify-center px-4 py-10",
    isArabic ? "order-1 md:order-1" : "order-2 md:order-2",
  ].join(" ")}
>
          <div className="relative flex flex-col items-center text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC100]/10 blur-3xl" />

            <div
              dir="ltr"
              className="relative mt-1 text-[clamp(3.8rem,10vw,7rem)] text-left"
            >
              <div className="melbet-wordmark" aria-label="MELBET">
                <span className="melbet-letter melbet-letter--white">M</span>
                <span className="melbet-letter melbet-letter--white">E</span>
                <span className="melbet-letter melbet-letter--white">L</span>
                <span className="melbet-letter melbet-letter--yellow">B</span>
                <span className="melbet-letter melbet-letter--yellow">E</span>
                <span className="melbet-letter melbet-letter--yellow">T</span>
              </div>
            </div>

            <div className="mt-1 text-base font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-lg">
              {t.home.hero.partnerProgram}
            </div>

            <a
              href={siteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="melbet-button mt-10 inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#FFC100]/35 bg-[#FFC100] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:opacity-95"
            >
              {t.home.hero.ourSite}
            </a>
          </div>

          <div className="pointer-events-none absolute -left-6 top-10 h-28 w-28 rounded-full bg-[#FFC100]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-white/6 blur-3xl" />
        </div>
      </div>
    </section>
  );
}