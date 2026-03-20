"use client";

import Link from "next/link";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import { useLanguage } from "../components/landing/LanguageContext";
import Image from "next/image";

export default function AgentPage() {
  const { t, isArabic, language } = useLanguage();

  const agentBenefits = [
    {
      image: "/percentage.png",
      title: t.agent.benefits.dailyCommissions.title,
      text: t.agent.benefits.dailyCommissions.text,
      badge:
        language === "ar"
          ? "عمولة 10%"
          : language === "fr"
            ? "Commission 10%"
            : "10% Commission",
    },
    {
      image: "/arrows.png",
      title: t.agent.benefits.transferAgentModel.title,
      text: t.agent.benefits.transferAgentModel.text,
      badge: null,
    },
    {
      image: "/teamcash.png",
      title:
        language === "ar"
          ? "بنية جاهزة"
          : language === "fr"
            ? "Infrastructure Existante"
            : "Existing Infrastructure",
      text:
        language === "ar"
          ? "اعمل ضمن بنية تشغيلية جاهزة وموجودة مسبقاً، مما يسمح لك بالانطلاق بسرعة أكبر وباحتكاك أقل."
          : language === "fr"
            ? "Travaillez avec une infrastructure opérationnelle déjà en place, ce qui vous permet de démarrer plus vite avec moins de friction."
            : "Work with infrastructure that already exists, allowing you to launch faster with less friction.",
      badge: null,
    },
    {
      image: "/best.png",
      title: t.agent.benefits.topAgentPotential.title,
      text: t.agent.benefits.topAgentPotential.text,
      badge: null,
    },
  ];

  const supportPoints = [
    {
      title: t.agent.support.instantResponse.title,
      text: t.agent.support.instantResponse.text,
    },
    {
      title: t.agent.support.operationalGuidance.title,
      text: t.agent.support.operationalGuidance.text,
    },
    {
      title: t.agent.support.growthCoaching.title,
      text: t.agent.support.growthCoaching.text,
    },
  ];

  return (
    <main className="min-h-screen text-white">
      <Header />

      <section className="border-b border-white/10 bg-transparent">
        <div
          dir="ltr"
          className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-10 px-6 py-10 md:grid-cols-2 md:py-12 lg:gap-16"
        >
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className={[
              "max-w-2xl",
              isArabic ? "order-2 md:order-2 text-right" : "order-1 md:order-1",
            ].join(" ")}
          >
            <div className="inline-flex items-center rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]">
              {t.agent.hero.badge}
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              {t.agent.hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              {t.agent.hero.description}
            </p>

            <div
              className={[
                "mt-10 flex flex-wrap gap-4",
                isArabic ? "justify-end" : "",
              ].join(" ")}
            >
              <Link
                href="/#register"
                className="landing-button-primary rounded-full px-6 py-3 text-sm font-semibold"
              >
                {t.agent.hero.startNow}
              </Link>

              <Link
                href="/#calculator"
                className="landing-button-secondary rounded-full px-6 py-3 text-sm font-semibold"
              >
                {t.agent.hero.estimateIncome}
              </Link>
            </div>
          </div>

          <div
            className={[
              "relative flex min-h-[420px] items-center justify-center px-4 py-10",
              isArabic ? "order-1 md:order-1" : "order-2 md:order-2",
            ].join(" ")}
          >
            <div className="relative flex w-full max-w-[560px] flex-col items-center text-center">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC100]/10 blur-3xl" />
              <div className="relative mt-4 w-full max-w-[1080px]">
                <Image
                  src="/phone.png"
                  alt="Phone visual"
                  width={1200}
                  height={1800}
                  priority
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_0_24px_rgba(255,193,0,0.18)]"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute -left-6 top-10 h-28 w-28 rounded-full bg-[#FFC100]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-white/6 blur-3xl" />
          </div>
        </div>
      </section><section className="border-b border-white/10 bg-transparent">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="mx-auto max-w-7xl px-6 py-16 md:py-20"
        >
          <div className={["max-w-3xl", isArabic ? "text-right" : ""].join(" ")}>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              {t.agent.benefits.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/72">
              {t.agent.benefits.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {agentBenefits.map((item) => (
              <div className="flex flex-col items-center text-center">
                <div className="relative h-16 w-16 benefit-icon-float">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {item.badge ? (
                  <div className="mt-5 inline-flex rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-2 text-sm font-semibold text-[#FFC100]">
                    {item.badge}
                  </div>
                ) : null}

                <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/72">
                  {item.text}
                </p>
              </div>))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-transparent">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="mx-auto max-w-7xl px-6 py-16 md:py-20"
        >
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div className={["max-w-2xl", isArabic ? "text-right" : ""].join(" ")}>
              <div className="inline-flex items-center rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]">
                {t.agent.support.badge}
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                {t.agent.support.title}
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/72">
                {t.agent.support.text}
              </p>

              <div className={["mt-8", isArabic ? "flex justify-end" : ""].join(" ")}>
                <Link
                  href="/#register"
                  className="landing-button-primary rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {t.agent.support.registerNow}
                </Link>
              </div>
            </div>

            <div className="grid gap-5">
              {supportPoints.map((item) => (
                <div
                  key={item.title}
                  className={[
                    "landing-surface landing-hover rounded-[28px] p-6",
                    isArabic ? "text-right" : "",
                  ].join(" ")}
                >
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-white/72">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-transparent">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="mx-auto max-w-7xl px-6 py-16 md:py-20"
        >
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]">
              {t.agent.final.badge}
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              {t.agent.final.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              {t.agent.final.text}
            </p>

            <div className="mt-8">
              <Link
                href="/#register"
                className="landing-button-primary rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                {t.agent.final.button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}