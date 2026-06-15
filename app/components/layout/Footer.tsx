"use client";

import Image from "next/image";
import Link from "next/link";
import { MelbetAnimatedLogo } from "../logo";
import { useLanguage } from "../providers/LanguageContext";
import { getLandingPlayerHomeContent } from "@/lib/player-home";

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
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

export default function Footer() {
  const { t, language, isArabic } = useLanguage();
  const home = getLandingPlayerHomeContent(language);

  const homeLinks = [
    { href: "/#games", label: home.games.eyebrow },
    { href: "/#sports", label: home.sports.eyebrow },
    { href: "/#offers", label: home.offers.eyebrow },
    { href: "/#support", label: home.finalCta.eyebrow },
  ];

  const routeLinks = [
    { href: "/", label: t.nav.home },
    { href: "/agent", label: t.nav.becomeAgent },
    { href: "/partner", label: t.nav.becomePartner },
    { href: "/aboutus", label: t.nav.aboutUs },
  ];

  const supportLinks = [
    { href: home.finalCta.primaryHref, key: "telegram", icon: "telegram", label: home.finalCta.primary },
    { href: home.finalCta.secondaryHref, key: "email", icon: "email", label: home.finalCta.secondary },
  ] as const;

  return (
    <footer dir={isArabic ? "rtl" : "ltr"} className="relative z-10 mt-auto px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-transparent px-6 py-8 shadow-none sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC100]/45 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_0.82fr_0.92fr_1.18fr]">
            <div className="space-y-5 text-right lg:order-4 lg:justify-self-end">
              <Link href="/" className="inline-flex justify-end" aria-label="Melbet">
                <MelbetAnimatedLogo decorative size="md" className="melbet-logo--flush-end" />
              </Link>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FFC100]">
                {home.footer.homeLabel}
              </p>
              <div className="flex flex-col gap-3">
                {homeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FFC100]">
                {home.footer.routesLabel}
              </p>
              <div className="flex flex-col gap-3">
                {routeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FFC100]">
                {home.footer.supportLabel}
              </p>
              <div className="flex flex-col gap-3">
                {supportLinks.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    target={item.icon === "telegram" ? "_blank" : undefined}
                    rel={item.icon === "telegram" ? "noreferrer" : undefined}
                    className="inline-flex min-h-[42px] items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 text-sm text-white/72 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#FFC100]/30 hover:text-white"
                  >
                    {item.icon === "telegram" ? (
                      <Image src="/telegram.png" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                    ) : (
                      <EmailIcon />
                    )}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/58">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
