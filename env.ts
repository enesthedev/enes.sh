import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    HASHNODE_GRAPHQL_URL: z.string().url(),
  },
  client: {},
  experimental__runtimeEnv: process.env,
});
