'use client';

import { env } from '@/env';
import { useGetPublicationQuery } from '../../graphql/__generated__/graphql';

export const PublicationLandingDetails = () => {
  const { data, loading } = useGetPublicationQuery({
    variables: { host: env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST },
  });
  return (
    <div>
      <h1>Publication Landing Details</h1>
      {data?.publication?.title}
      {loading.toString()}
    </div>
  );
};
