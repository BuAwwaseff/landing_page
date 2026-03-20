"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "./LanguageContext";

type SliderRowProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  prefix?: string;
  onChange: (value: number) => void;
};

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  prefix = "",
  onChange,
}: SliderRowProps) {
  return (
    <div className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-medium text-white/85">{label}</span>

        <span dir="ltr" className="text-lg font-bold text-[#FFC100]">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-5 h-3 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#FFC100] [transform:scaleY(1.35)]"
      />

      <div className="mt-3 flex items-center justify-between text-sm text-white/35">
        <span dir="ltr">
          {prefix}
          {min.toLocaleString()}
          {suffix}
        </span>
        <span dir="ltr">
          {prefix}
          {max.toLocaleString()}
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default function Calculator() {
  const [dailyVolume, setDailyVolume] = useState(14300);
  const [workingDays, setWorkingDays] = useState(11);

  const commissionRate = 0.10;
  const { t, isArabic } = useLanguage();

  const dailyIncome = useMemo(() => {
    return dailyVolume * commissionRate;
  }, [dailyVolume]);

  const monthlyIncome = useMemo(() => {
    return dailyIncome * workingDays;
  }, [dailyIncome, workingDays]);

  const money = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  return (
    <section id="calculator" className="border-b border-white/10 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl font-bold leading-[0.95] text-white sm:text-5xl lg:text-6xl">
            <span>{t.home.calculator.titleStart} </span>
            <span className="text-[#FFC100] [text-shadow:0_0_12px_rgba(255,193,0,0.28),0_0_30px_rgba(255,193,0,0.14)]">
              {t.home.calculator.titleAccent}
            </span>
          </h2>

          <div className="mt-6 inline-flex rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-5 py-2 text-sm font-semibold text-[#FFC100]">
            {t.home.calculator.commissionBadge}
          </div>
        </div>

        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16"
        >
          <div className="grid gap-8">
            <SliderRow
              label={t.home.calculator.dailyVolume}
              value={dailyVolume}
              min={50}
              max={50000}
              step={100}
              prefix="$"
              onChange={setDailyVolume}
            />

            <SliderRow
              label={t.home.calculator.workingDays}
              value={workingDays}
              min={1}
              max={31}
              step={1}
              onChange={setWorkingDays}
            />
          </div>

          <div className="flex flex-col justify-center">
            <p
              className={[
                "text-center text-sm uppercase tracking-[0.25em] text-white/45 md:text-left",
                isArabic ? "md:text-right" : "",
              ].join(" ")}
            >
              {t.home.calculator.estimatedResult}
            </p>

            <div className="mt-10">
              <div className="text-base text-white/60">
                {t.home.calculator.monthlyIncome}
              </div>
              <div
                dir="ltr"
                className="mt-2 text-6xl font-bold text-[#FFC100] [text-shadow:0_0_12px_rgba(255,193,0,0.26),0_0_30px_rgba(255,193,0,0.14)] sm:text-7xl"
              >
                ${money.format(monthlyIncome)}
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-white/10" />

            <div className="mt-8">
              <div className="text-base text-white/60">
                {t.home.calculator.dailyIncome}
              </div>
              <div dir="ltr" className="mt-2 text-5xl font-bold text-white sm:text-6xl">
                ${money.format(dailyIncome)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}