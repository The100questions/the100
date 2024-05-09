import { browser } from "$app/environment";
import { getValidLang } from "$lib/utils";
import { ALL_LANGUAGES } from "@constants";
import { derived, writable } from "svelte/store";
import translations from "./translations";

export const defaultLang = ALL_LANGUAGES[0].value;
const savedLang = browser
  ? getValidLang(localStorage.getItem("lang"))
  : defaultLang;

type LangType = (typeof ALL_LANGUAGES)[number]["value"];
type LocalesType = keyof (typeof translations)[typeof defaultLang];

export const language = writable<LangType>(savedLang);

function translate(
  locale: LangType = defaultLang,
  key: LocalesType,
  vars: { [key: string]: string } = {}
) {
  let text = translations[locale][key] ?? translations[defaultLang][key];
  if (!text) return key;

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  language,
  ($locale) =>
    (key: LocalesType, vars = {}) =>
      translate($locale, key, vars)
);

language.subscribe((lang) => {
  if (browser) localStorage.setItem("lang", lang);
});
