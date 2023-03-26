import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { config } from "../../../config"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: config.googleID,
      clientSecret: config.googleSecret
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)