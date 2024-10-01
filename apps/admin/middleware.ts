import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

import withAuth from 'next-auth/middleware'

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/sign-in')
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/', req.url))
      }
      return null
    }
    if (!isAuth) {
      let from = req.nextUrl.pathname
      if (req.nextUrl.search) {
        from += req.nextUrl.search
      }
      return NextResponse.redirect(new URL(`/sign-in?from=${encodeURIComponent(from)}`, req.url))
    }
  },
  {
    callbacks: {
      async authorized() {
        return true
      }
    }
  }
)
