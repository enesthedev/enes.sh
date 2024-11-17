import { AUTH_ROUTES } from '@/app/constants'
import { env } from '@/env'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@enes-sh/db'
import { NextAuthOptions } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

export const AuthOptions = {
  pages: {
    signIn: AUTH_ROUTES.SIGNIN,
    signOut: AUTH_ROUTES.SIGNOUT,
    error: AUTH_ROUTES.ERROR,
    verifyRequest: AUTH_ROUTES.VERIFY_REQUEST,
    newUser: AUTH_ROUTES.NEW_USER
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (user.email && new RegExp(env.ALLOWED_EMAIL_PATTERN).test(user.email)) {
        return true
      }
      return false
    }
  },
  session: {
    strategy: 'jwt'
  }
} satisfies NextAuthOptions
