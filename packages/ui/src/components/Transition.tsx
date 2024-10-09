'use client'

import { useMounted } from '@/hooks'
import { motion } from 'framer-motion'
import React from 'react'

interface TransitionProps {
  delay?: number
  children: React.ReactNode
}

const Transition = ({ children, delay = 0.1 }: TransitionProps) => {
  const mounted = useMounted()

  return mounted ? (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 1, delay: delay }}
    >
      {children}
    </motion.div>
  ) : (
    <noscript>
      <div>{children}</div>
    </noscript>
  )
}

export { Transition, type TransitionProps }
