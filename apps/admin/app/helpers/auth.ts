import { env } from '@/app/env'
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
    error: '/error',
    verifyRequest: '/verify-request',
    newUser: '/new-user'
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
