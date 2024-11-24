'use client';
import { env } from '@/env';
// ^ this file needs the "use client" pragma

import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

// have a function to create a client for you
function makeClient() {
  const httpLink = new HttpLink({
    uri: env.NEXT_PUBLIC_HASHNODE_GRAPHQL_URL,
    fetchOptions: { cache: 'no-store' },
  });

  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
