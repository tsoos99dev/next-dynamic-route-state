'use client';

import { AppStoreFragmentProvider } from '@/storeProvider';
import { useParams } from 'next/navigation';
import { getParam } from '@/util';

export default function Template({ children }: React.PropsWithChildren) {
  console.log('Root Template');
  const params = useParams();

  console.log('Params: ', params);

  const bearId = getParam(params.bearId);
  const cubId = getParam(params.cubId);

  return (
    <AppStoreFragmentProvider bearId={bearId} cubId={cubId}>
      {children}
    </AppStoreFragmentProvider>
  );
}
