import "server-only";
import type { Dict } from "@/dictionaries/zh-HK.json";

const dictionaries = {
  "zh-HK": () => import("@/dictionaries/zh-HK.json").then((m) => m.default),
  "zh-CN": () => import("@/dictionaries/zh-CN.json").then((m) => m.default),
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof Dict extends infer T ? T : never;

export const locales: Locale[] = ["zh-HK", "zh-CN", "en"];
export const defaultLocale: Locale = "zh-HK";

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
