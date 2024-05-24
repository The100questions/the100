import { getValidLang, parseJSON } from "$lib/utils.js";
import { USER_COOKIES } from "@constants";

export const load = async (event) => {
  const langCookie = event.cookies.get(USER_COOKIES.LANGUAGE);
  const userLang = parseJSON(langCookie)?.name;
  const lang = getValidLang(userLang);
  const session = await event.locals.auth()
  console.log("session",session)
  return {
    session,
    language: lang,
  };
};
