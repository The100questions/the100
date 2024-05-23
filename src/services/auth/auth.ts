import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"

export const { handle, signIn } = SvelteKitAuth({
    trustHost: true,
  providers: [
    Google({
      clientId: "143035775519-4ro6p4r4hjnudveklau9ajk45mekeaj5.apps.googleusercontent.com",
      clientSecret: "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",

    })
  ],
})
