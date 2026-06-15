"use client";

import Image from "next/image";
import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";
import { getLandingPlayerHomeContent } from "@/lib/player-home";

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5.5 7.5 6.5 5 6.5-5" />
    </svg>
  );
}

export default function FinalCTA() {
  const { t, language, isArabic } = useLanguage();
  const home = getLandingPlayerHomeContent(language);

  return (
    <Reveal
      as="section"
      id="register"
      preset="section"
      className="mt-auto border-t border-white/10 bg-transparent"
    >
      <div id="contact" className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <Reveal
          as="div"
          dir={isArabic ? "rtl" : "ltr"}
          className="px-4 py-4 text-center sm:px-6 sm:py-6 lg:px-8 lg:py-8"
        >
          <div className="mx-auto max-w-4xl">
            <Reveal
              as="div"
              className="type-label inline-flex items-center rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-4 py-1.5 font-medium text-[#FFC100]"
            >
              {t.aboutus.register.badge}
            </Reveal>

            <Reveal
              as="h2"
              preset="text"
              delay={0.04}
              className="type-heading mt-5 font-bold text-white"
            >
              {t.aboutus.register.title}
            </Reveal>

            <Reveal
              as="p"
              preset="text"
              delay={0.08}
              className="type-body-lg mx-auto mt-4 max-w-2xl text-white/72"
            >
              {t.aboutus.register.description}
            </Reveal>

            <Reveal
              as="div"
              delay={0.12}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={home.finalCta.primaryHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-[60px] items-center overflow-hidden rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-5 text-[#FFC100] shadow-[0_10px_30px_rgba(255,193,0,0.12)] transition-all duration-300 ease-out hover:border-[#FFC100]/55 hover:bg-[#FFC100] hover:text-black hover:shadow-[0_14px_36px_rgba(255,193,0,0.22)]"
              >
                <span className="relative h-5 w-5 shrink-0">
                  <Image
                    src="/telegram.png"
                    alt="Telegram"
                    fill
                    className="object-contain"
                  />
                </span>

                <span className="type-label max-w-0 overflow-hidden whitespace-nowrap pl-0 font-bold transition-all duration-300 ease-out group-hover:max-w-[180px] group-hover:pl-3">
                  {t.aboutus.register.telegram}
                </span>
              </a>

              <a
                href={home.finalCta.secondaryHref}
                className="group inline-flex h-[60px] items-center overflow-hidden rounded-full border border-white/20 bg-white px-5 text-black transition-all duration-300 ease-out hover:border-white/35 hover:bg-white hover:text-black hover:shadow-[0_14px_36px_rgba(255,255,255,0.18)]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                  <EmailIcon />
                </span>

                <span className="type-label max-w-0 overflow-hidden whitespace-nowrap pl-0 font-bold text-black transition-all duration-300 ease-out group-hover:max-w-[180px] group-hover:pl-3">
                  {t.aboutus.register.email}
                </span>
              </a>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
}
