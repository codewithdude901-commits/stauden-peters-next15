"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";

type Alternate = { de: string; en: string } | null;
const locales = [{ code: "de", label: "De" }, { code: "en", label: "En" }];

const SEGMENT_MAP: Record<string, string> = {
  standorte: "locations",
  produkte: "products",
  projekte: "projects",
  kontakt: "contact",
  about: "about",
};

function mapPathToLocale(pathname: string, targetLocale: "de" | "en"): string {
  if (!pathname) return targetLocale === "de" ? "/" : "/en";
  const clean = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const isEnglish = clean.startsWith("/en");
  const withoutPrefix = isEnglish ? clean.replace(/^\/en/, "") : clean;
  const parts = withoutPrefix === "" ? [] : withoutPrefix.split("/").filter(Boolean);
  if (parts.length === 0) return targetLocale === "de" ? "/" : "/en";
  const first = parts[0];
  let mappedFirst = first;
  if (targetLocale === "en") mappedFirst = SEGMENT_MAP[first] ?? first;
  else {
    const rev = Object.entries(SEGMENT_MAP).find(([, enVal]) => enVal === first);
    mappedFirst = rev ? rev[0] : first;
  }
  // if detail route, return index path to avoid 404
  return targetLocale === "de" ? `/${mappedFirst}` : `/en/${mappedFirst}`;
}

export default function LocaleSwitcher() {
  const pathname = usePathname() ?? "/";
  const isEnglish = pathname.startsWith("/en");
  const currentLocale: "de" | "en" = isEnglish ? "en" : "de";

  const [alternate, setAlternate] = useState<Alternate>(() => {
    if (typeof window !== "undefined" && (window as any).__ALTERNATE) {
      return (window as any).__ALTERNATE as Alternate;
    }
    return null;
  });

  useEffect(() => {
    const handler = () => setAlternate((window as any).__ALTERNATE ?? null);
    window.addEventListener("alternateReady", handler);
    return () => window.removeEventListener("alternateReady", handler);
  }, []);

  const handleSwitch = (locale: "de" | "en") => {
    if (locale === currentLocale) return;
    if (alternate) {
      const target = alternate[locale];
      if (target) { window.location.href = target; return; }
    }
    const target = mapPathToLocale(pathname, locale);
    window.location.href = target || (locale === "de" ? "/" : "/en");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent border-[0.5px]">
          {locales.find((l) => l.code === currentLocale)?.label}
          <ChevronDown className="size-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-36">
        {locales.map((locale) => (
          <button
            key={locale.code}
            onClick={() => handleSwitch(locale.code as "de" | "en")}
            className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
          >
            {locale.label}
            {currentLocale === locale.code && <Check className="ml-auto size-4 text-primary" />}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
