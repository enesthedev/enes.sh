import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

module.exports = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_HASHNODE_GRAPHQL_URL,
  documents: './app/**/*.gql',
  generates: {
    './app/features/graphql/__generated__/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};
