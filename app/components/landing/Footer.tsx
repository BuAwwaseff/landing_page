"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-8 py-8 text-center">
        <div>{t.footer.copyright}</div>
      </div>
    </footer>
  );
}