import Me from '@public/images/avatar.png'

import { Avatar, AvatarFallback, AvatarImage, Transition, WordFadeIn } from '@app/components'

export default function Page() {
  return (
    <div className='flex min-h-screen justify-center'>
      <div className='flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-4 md:px-8 lg:px-24'>
        <div className='flex flex-col-reverse md:flex-row md:space-x-12'>
          <section className='flex w-full flex-col space-y-8'>
            <WordFadeIn
              words='Merhaba, Ben Enes 👋'
              className='text-3xl font-bold tracking-tight text-zinc-800 lg:text-5xl'
            />
            <Transition delay={0.3}>
              <p className='text-justify text-sm text-zinc-600 lg:text-base'>
                24 yaşındayım ve Trabzon'da yaşıyorum. Şu anda Samsun merkezli bir Türk girişimi
                olan meetGO'da yazılım geliştirici olarak çalışıyorum. Bu internet sitesinde yazılım
                alanında öğrendiklerimi, okuduğum kitapları ve ürettiğim projeleri paylaşıyorum.
              </p>
            </Transition>
          </section>
          <div className='mb-10 flex flex-col md:mb-0 md:items-end md:justify-start lg:w-full'>
            <Transition delay={0.2}>
              <Avatar className='aspect-square size-32 rotate-3 rounded-2xl bg-zinc-100 object-cover md:size-48 lg:size-64'>
                <AvatarImage alt={'te'} src={Me.src} />
                <AvatarFallback>EB</AvatarFallback>
              </Avatar>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  )
}
