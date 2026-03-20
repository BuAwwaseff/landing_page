"use client";

import { useLanguage } from "./LanguageContext";

export default function FinalCTA() {
  const { t, isArabic } = useLanguage();

  return (
    <section id="register" className="border-t border-white/10 bg-transparent">
      <div id="contact" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={[
            " px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14",
            isArabic ? "text-right" : "text-center",
          ].join(" ")}
        >
          <div className="mx-auto max-w-4xl">
            <div
              className={[
                "inline-flex items-center rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]",
                isArabic ? "" : "",
              ].join(" ")}
            >
              {t.home.register.badge}
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              {t.home.register.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              {t.home.register.description}
            </p>

            <div
              className={[
                "mt-10 flex flex-wrap items-center gap-4",
                isArabic ? "justify-end" : "justify-center",
              ].join(" ")}
            >
              <a
                href="#"
                className="landing-button-primary rounded-[20px] px-8 py-4 text-base font-bold"
              >
                {t.home.register.telegram}
              </a>

              <a
                href="#"
                className="landing-button-secondary rounded-[20px] px-8 py-4 text-base font-bold"
              >
                {t.home.register.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}