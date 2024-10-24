import { ContentLayout, SidebarLayout } from '@/app/components/layouts'

export default async function Page() {
  return (
    <SidebarLayout>
      <ContentLayout title='test'>
        <div className='h-[2000px]'>test</div>
      </ContentLayout>
    </SidebarLayout>
  )
}
