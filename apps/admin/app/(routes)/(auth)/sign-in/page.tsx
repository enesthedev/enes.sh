import { SignIn } from '@/app/sections'
import { headers } from 'next/headers'

export type PageProps = {
  searchParams?: { [key: string]: string | undefined }
}

export default async function Page({ searchParams }: PageProps) {
  let callbackUrl = searchParams?.from || '/'
  let error = null

  if (searchParams?.error) {
    // This one is for NextAuth client error handling
    error = searchParams.error
  }

  if (searchParams?.from?.toString().startsWith('/error')) {
    const headersList = headers()
    const referer = headersList.get('referer')
    const url = new URL(referer?.toString() || '/')
    const fromUrl = new URL(decodeURIComponent(callbackUrl), url.origin)

    error = fromUrl.searchParams.get('error') // This one is for NextAuth server error handling
    callbackUrl = '/'
  }

  return <SignIn callbackUrl={callbackUrl} error={error} />
}
