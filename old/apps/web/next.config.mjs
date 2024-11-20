import { createJiti } from 'jiti'
import { fileURLToPath } from 'node:url'

const jiti = createJiti(fileURLToPath(import.meta.url))

jiti('./app/env')

import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withNextIntl(nextConfig)
