"use client";

import { getLandingPlayerHomeContent } from "@/lib/player-home";
import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";
import HeroStage from "./HeroStage/HeroStage";

export default function Hero() {
  const { t, isArabic, language } = useLanguage();
  const home = getLandingPlayerHomeContent(language);
  const siteHref = home.hero.primaryHref;

  return (
    <Reveal
      as="section"
      id="hero"
      preset="section"
      className="landing-section-line overflow-x-clip border-b bg-transparent"
    >
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="container-main grid section-gap min-w-0 pt-[var(--space-6)] pb-[var(--space-10)] md:pt-[var(--space-10)] md:pb-[var(--space-16)] lg:pt-[var(--space-12)] lg:pb-[var(--space-18)]"
      >
        <Reveal
          as="div"
          preset="soft"
          delay={0.1}
          className="order-1 relative flex min-h-[210px] min-w-0 w-full items-start justify-center overflow-hidden px-[var(--space-2)] pt-[var(--space-6)] pb-[var(--space-3)] md:min-h-[380px] md:px-[var(--space-4)] md:pt-[var(--space-8)]"
        >
          <div className="relative flex w-full min-w-0 max-w-[760px] flex-col items-center pt-2 text-center md:pt-4">
            <div
              dir="ltr"
              className="relative mt-0 flex w-full min-w-0 justify-center overflow-visible pt-1 text-left md:pt-2"
            >
              <div className="max-w-full scale-[0.86] origin-center md:scale-100">
                <div
                  className="melbet-wordmark melbet-wordmark--plain melbet-wordmark--hero text-[clamp(2rem,9vw,3rem)] md:text-[clamp(3.8rem,10vw,7rem)]"
                  aria-label="MELBET"
                >
                  <span className="melbet-letter melbet-letter--white">M</span>
                  <span className="melbet-letter melbet-letter--white">E</span>
                  <span className="melbet-letter melbet-letter--white">L</span>
                  <span className="melbet-letter melbet-letter--yellow">B</span>
                  <span className="melbet-letter melbet-letter--yellow">E</span>
                  <span className="melbet-letter melbet-letter--yellow">T</span>
                </div>
              </div>
            </div>

            <div className="type-label mt-[var(--space-3)] text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-white-72)] md:mt-[var(--space-4)] md:text-[0.8rem] md:tracking-[0.2em]">
              {t.aboutus.hero.partnerProgram}
            </div>

            <Reveal
              as="h1"
              preset="text"
              delay={0.04}
              className="mt-[var(--space-5)] max-w-[620px] text-[clamp(1rem,2.4vw,1.45rem)] font-semibold leading-[1.45] text-white/70 md:mt-[var(--space-6)] md:text-[clamp(1.15rem,2vw,1.6rem)]"
            >
              {t.aboutus.hero.title}
            </Reveal>

            <a
              href={siteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="melbet-button landing-button-primary mt-[var(--space-7)] inline-flex min-w-[132px] items-center justify-center rounded-full px-[var(--space-4)] py-[10px] text-[0.72rem] font-bold uppercase tracking-[0.1em] transition hover:-translate-y-0.5 hover:opacity-95 md:type-label md:mt-[var(--space-8)] md:min-w-[220px] md:px-[var(--space-7)] md:py-[var(--space-4)] md:tracking-[0.12em]"
            >
              {t.aboutus.hero.ourSite}
            </a>
          </div>
        </Reveal>

        <Reveal
          as="div"
          delay={0.16}
          className="order-2 min-w-0 -mt-[var(--space-2)] md:-mt-[var(--space-10)]"
        >
          <HeroStage />
        </Reveal>
      </div>
    </Reveal>
  );
}
