import { auth } from '@/app/libraries'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@enes-sh/ui'

export default async function Home() {
  const session = await auth()

  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}
