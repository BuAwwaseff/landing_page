"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Benefits() {
  const { t, isArabic } = useLanguage();

  const benefits = [
    {
      image: "/bolt2.png",
      title: t.home.benefits.quickStart.title,
      text: t.home.benefits.quickStart.text,
    },
    {
      image: "/marketing3.png",
      title: t.home.benefits.marketingKit.title,
      text: t.home.benefits.marketingKit.text,
    },
    {
      image: "/visa.png",
      title: t.home.benefits.flexiblePayments.title,
      text: t.home.benefits.flexiblePayments.text,
    },
    {
      image: "/manager.png",
      title: t.home.benefits.privateAdvisor.title,
      text: t.home.benefits.privateAdvisor.text,
    },
  ];

  return (
    <section id="benefits" className="border-b border-white/10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={["max-w-3xl", isArabic ? "text-right" : ""].join(" ")}
        >
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            {t.home.benefits.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/72">
            {t.home.benefits.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="landing-surface landing-hover rounded-[28px] px-8 py-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="benefit-icon-float relative h-16 w-16">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/72">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}