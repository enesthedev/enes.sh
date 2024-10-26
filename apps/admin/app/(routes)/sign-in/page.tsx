import { SignIn } from '@/app/features/auth'
import { AuthRoutes } from '@/shared/constants'
import { StringKeyMap } from '@/shared/types'
import { headers } from 'next/headers'

export type PageProps = {
  searchParams?: StringKeyMap<string | undefined>
}

export default async function Page({ searchParams }: PageProps) {
  let { from = '/', error = null } = searchParams || {} // Destructure searchParams with defaults

  if (from.toString().startsWith(AuthRoutes.ERROR)) {
    const referer = headers().get('referer') || '/'
    const url = new URL(referer)
    const fromUrl = new URL(decodeURIComponent(from), url.origin)

    error = fromUrl.searchParams.get('error') || error
    from = '/' // Reset the callback URL for errors
  }

  return <SignIn callbackUrl={from} error={error} />
}
