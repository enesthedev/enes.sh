import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST: z.string(),
    NEXT_PUBLIC_HASHNODE_GRAPHQL_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
    NEXT_PUBLIC_HASHNODE_GRAPHQL_URL: process.env.NEXT_PUBLIC_HASHNODE_GRAPHQL_URL,
  },
});
