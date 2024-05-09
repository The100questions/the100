import { getValidLang, parseJSON } from "$lib/utils.js";
import { USER_COOKIES } from "@constants";
import { language } from "@services/translation/translationService";

export const load = async (event) => {
  const langCookie = event.cookies.get(USER_COOKIES.LANGUAGE);
  const userLang = parseJSON(langCookie)?.name;
  const lang = getValidLang(userLang);
  if (userLang) {
    language.set(lang);
  }
};
