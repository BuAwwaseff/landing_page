"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import { Language } from "@/lib/translations";

const languages: { label: string; value: Language }[] = [
  { label: "EN", value: "en" },
  { label: "FR", value: "fr" },
  { label: "AR", value: "ar" },
];

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const aboutHref = pathname === "/" ? "#about" : "/#about";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10  backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Brand logo"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href={"/"}
            className="text-sm font-medium text-white/80 transition hover:text-[#FFC100]"
          >
            {t.nav.aboutUs}
          </a>

          <Link
            href="/agent"
            className="text-sm font-medium text-white/80 transition hover:text-[#FFC100]"
          >
            {t.nav.becomeAgent}
          </Link>

          <Link
            href="/partner"
            className="text-sm font-medium text-white/80 transition hover:text-[#FFC100]"
          >
            {t.nav.becomePartner}
          </Link>
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          {languages.map((item) => {
            const isActive = language === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setLanguage(item.value)}
                className={[
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                  isActive
                    ? "bg-[#FFC100] text-black"
                    : "text-white/75 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}