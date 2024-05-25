import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } from "$env/static/private";
import clientPromise from "$lib/server/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";

export const { handle, signIn } = SvelteKitAuth({
  debug: true,
  trustHost: true,
  providers: [
    Google({
      clientId: AUTH_GITHUB_ID,
      clientSecret: AUTH_GITHUB_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
});
