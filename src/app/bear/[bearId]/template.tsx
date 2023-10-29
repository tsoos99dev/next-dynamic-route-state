'use client';

import { AppStoreFragmentProvider } from '@/storeProvider';
import { useParams } from 'next/navigation';
import { getParam } from '@/util';

export default function Template({ children }: React.PropsWithChildren) {
  console.log('Bear Template');
  const params = useParams();
  const cubId = getParam(params.cubId);

  return (
    <AppStoreFragmentProvider cubId={cubId}>
      {children}
    </AppStoreFragmentProvider>
  );
}
