import { parseJSON } from "$lib/utils";
import { API_HEADERS, USER_COOKIES } from "@constants";
import {
  defaultLang,
  language,
} from "@services/translation/translationService";
import type { Handle, HandleFetch } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const langCookie = event.cookies.get(USER_COOKIES.LANGUAGE);
  const userLang = parseJSON(langCookie)?.name;
  if (!userLang) {
    event.cookies.set(
      USER_COOKIES.LANGUAGE,
      JSON.stringify({ name: defaultLang }),
      {
        path: "/",
      }
    );
  }
  language.set(userLang ?? defaultLang);
  const response = await resolve(event);
  return response;
};

export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
  const langCookie = event.cookies.get(USER_COOKIES.LANGUAGE);
  const userLang = parseJSON(langCookie)?.name;
  request.headers.append(API_HEADERS.LANGUAGE, userLang);
  return fetch(request);
};
