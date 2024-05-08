import { capitalize, getValidLang } from "$lib/utils.js";
import { USER_COOKIES } from "@constants";
import { json } from "@sveltejs/kit";

export const GET = async ({ cookies, url }) => {
  const langInput = url.searchParams.get("lang");
  const validLang = getValidLang(langInput ?? "");

  cookies.set(USER_COOKIES.LANGUAGE, JSON.stringify({ name: validLang }), {
    path: "/",
  });
  return json({
    message: `language updated to ${capitalize(validLang)}!`,
    status: 200,
  });
};
