import { AuthRoutes } from '@/app/constants'
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

import withAuth from 'next-auth/middleware'

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })

    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith(`${AuthRoutes.SIGNIN}`)

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/', req.url))
      }
      return null
    }

    if (!isAuth) {
      const from = req.nextUrl.pathname + (req.nextUrl.search || '')
      return NextResponse.redirect(
        new URL(`${AuthRoutes.SIGNIN}?from=${encodeURIComponent(from)}`, req.url)
      )
    }

    return null
  },
  {
    callbacks: {
      async authorized() {
        return true
      }
    }
  }
)
