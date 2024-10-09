import { env } from '@/app/env'
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'

import { AuthRoutes } from '@/app/constants'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@enes-sh/db'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  pages: {
    signIn: AuthRoutes.SIGNIN,
    signOut: AuthRoutes.SIGNOUT,
    error: AuthRoutes.ERROR,
    verifyRequest: AuthRoutes.VERIFY_REQUEST,
    newUser: AuthRoutes.NEW_USER
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

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions)
}
