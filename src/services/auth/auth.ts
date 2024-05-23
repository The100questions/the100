import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"

export const { handle, signIn } = SvelteKitAuth({
    trustHost: true,
    skipCSRFCheck: Symbol("skip-csrf-check"),
    debug: true,
  providers: [
    Google
  ],
})
