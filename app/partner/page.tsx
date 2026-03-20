"use client"
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import { useLanguage } from "../components/landing/LanguageContext";

export default function PartnerPage() {

    const { t, isArabic } = useLanguage();
    const growthMonths = [
        { label: t.partner.hero.month1, value: "$500", sizeClass: "min-h-[95px]" },
        { label: t.partner.hero.month2, value: "$1,500", sizeClass: "min-h-[145px]" },
        { label: t.partner.hero.month3, value: "$2,700+", sizeClass: "min-h-[200px]" },
        { label: t.partner.hero.month6, value: "∞", sizeClass: "min-h-[290px]" },
    ];

    const partnerBenefits = [
        {
            image: "/client.png",
            title: t.partner.benefits.lifetimeClientBase.title,
            text: t.partner.benefits.lifetimeClientBase.text,
        },
        {
            image: "/infinite.png",
            title: t.partner.benefits.lifetimeCommissions.title,
            text: t.partner.benefits.lifetimeCommissions.text,
        },
        {
            image: "/repeat.png",
            title: t.partner.benefits.passiveWeeklyIncome.title,
            text: t.partner.benefits.passiveWeeklyIncome.text,
        },
        {
            image: "/up.png",
            title: t.partner.benefits.compoundingGrowth.title,
            text: t.partner.benefits.compoundingGrowth.text,
        },
    ];


    const highlightPills = [
        t.partner.hero.lifetimeCommissions,
        t.partner.hero.weeklyPayouts,
        t.partner.hero.transferAffiliate,
    ];

    return (
        <main className="min-h-screen text-white">
            <Header /><section className="border-b border-white/10">
                <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 pt-4 pb-10 md:grid-cols-2 md:pt-6 md:pb-12 lg:gap-16">
                    <div className="flex max-w-[760px] flex-col items-start">
                        <div className="w-full max-w-[640px]">
                            <p className="text-[24px] font-extrabold uppercase tracking-[0.18em] text-[#FFC100] sm:text-[30px] lg:text-[48px]">
                                {t.partner.hero.badge}
                            </p>

                            <div className="mt-4 h-px w-full bg-[#FFC100]/35" />
                        </div>

                        <h1 className="mt-2 max-w-[760px] text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-{40px]">
                            {t.partner.hero.title}
                        </h1>

                        <p className="mt-8 max-w-[700px] text-lg leading-8 text-white/64 sm:text-[20px]">
                            {t.partner.hero.description}
                        </p>

                        <div className="mt-12">
                            <Link
                                href="/#register"
                                className="mt-40 inline-flex items-center justify-center rounded-[22px] bg-[#FFC100]
                                px-4 py-2 text-2xl font-bold text-black shadow-[0_0_28px_rgba(255,193,0,0.28)]
                                transition hover:-translate-y-0.5 hover:opacity-95"
                            >
                                {t.partner.hero.startNow}
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex h-full flex-col">
                        <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                            {t.partner.hero.growthPotential}
                        </p>

                        <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                            {t.partner.hero.growthTitle}
                        </h2>

                        <div className="mt-auto pt-20">
                            <div className="grid items-end grid-cols-2 gap-4 sm:grid-cols-4">
                                {growthMonths.map((item) => (
                                    <div
                                        key={item.label}
                                        className={[
                                            "landing-surface landing-hover flex flex-col items-center justify-center rounded-[24px] p-5 text-center",
                                            item.sizeClass,
                                        ].join(" ")}
                                    >
                                        <div className="text-sm text-white/50">{item.label}</div>
                                        <div dir="ltr" className="mt-3 text-2xl font-bold text-[#FFC100]">
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 grid gap-3 sm:grid-cols-3">
                                {highlightPills.map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex w-full items-center justify-center rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-3 text-center text-sm font-medium text-[#FFC100]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/0">
                <div className="mx-auto max-w-7xl px-6 py-10 md">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-2xl">
                            {t.partner.how.title}
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {partnerBenefits.map((item) => (
                            <div
                                key={item.title}
                                className="landing-surface landing-hover rounded-[28px] p-6"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-5 h-14 w-14 shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-lg leading-8 text-white/72">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-white/0 bg-transparent">
                <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                            {t.partner.final.title}
                        </h2>

                        <div className="mt-8">
                            <Link
                                href="/#register"
                                className="landing-button-primary rounded-full px-7 py-3.5 text-sm font-semibold"
                            >
                                {t.partner.final.button}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}