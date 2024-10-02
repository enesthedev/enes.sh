import { env } from '@/app/env'
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'

import { AuthRoutes } from '@/app/constants'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  pages: {
    signIn: AuthRoutes.SIGNIN,
    signOut: AuthRoutes.SIGNOUT,
    error: AuthRoutes.ERROR,
    verifyRequest: AuthRoutes.VERIFY_REQUEST,
    newUser: AuthRoutes.NEW_USER
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn(params) {
      if (params.user.email && new RegExp(env.ALLOWED_EMAIL_PATTERN).test(params.user.email)) {
        return true
      }
      return false
    }
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
