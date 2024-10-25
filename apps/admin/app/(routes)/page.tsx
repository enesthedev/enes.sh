import { CountedCardSkeleton } from '@/app/components'
import { ContentLayout, SidebarLayout } from '@/app/components/layouts'
import { Suspense } from 'react'
import { PostsCountCard } from './posts-count-card'

export default async function Page() {
  return (
    <SidebarLayout>
      <ContentLayout title='test'>
        <div className='mt-0 grid sm:grid-cols-2 lg:grid-cols-3'>
          <Suspense fallback={<CountedCardSkeleton />}>
            <PostsCountCard />
          </Suspense>
        </div>
      </ContentLayout>
    </SidebarLayout>
  )
}
