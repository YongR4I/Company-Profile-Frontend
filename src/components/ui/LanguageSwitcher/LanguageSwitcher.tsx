"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

const locales = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            disabled={isActive || isPending}
            className={`text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full transition-all duration-200 ${
              isActive
                ? "bg-white/20 text-white cursor-default"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
