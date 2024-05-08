import { ALL_LANGUAGES } from "@constants";
import { derived, writable } from "svelte/store";
import translations from "./translations";

const defaultLang = ALL_LANGUAGES[0].value;

type LangType = (typeof ALL_LANGUAGES)[number]["value"];
type LocalesType = keyof (typeof translations)[typeof defaultLang];

export const language = writable<LangType>(defaultLang);

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
