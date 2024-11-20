'use client'

import { motion, Variants } from 'framer-motion'

import { useMounted } from '@/hooks'
import { cn } from '@enes-sh/utils'

interface WordFadeInProps {
  words: string
  className?: string
  delay?: number
  variants?: Variants
}

const WordFadeIn = ({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay }
    })
  },
  className
}: WordFadeInProps) => {
  const _words = words.split(' ')

  const mounted = useMounted()

  return mounted ? (
    <motion.h1
      variants={variants}
      initial='hidden'
      animate='visible'
      className={cn(
        'font-display text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem] dark:text-white',
        className
      )}
    >
      {_words.map((word, i) => (
        <motion.span key={word} variants={variants} custom={i}>
          {word}{' '}
        </motion.span>
      ))}
    </motion.h1>
  ) : (
    <noscript>
      <h1 className={className}>{words}</h1>
    </noscript>
  )
}

export { WordFadeIn, type WordFadeInProps }
