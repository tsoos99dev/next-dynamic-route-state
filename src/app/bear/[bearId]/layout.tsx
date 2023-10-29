import { bearData } from '@/data';
import { AppStoreFragmentProvider } from '@/storeProvider';
import { getParam } from '@/util';
import { notFound } from 'next/navigation';

interface Props {
  params: { bearId: string };
}
export default function Layout({
  children,
  params,
}: React.PropsWithChildren<Props>) {
  console.log('Bear Layout');

  const bearId = getParam(params.bearId);
  if (bearId === null) notFound();

  const bear = bearData.find((bear) => bear.id === bearId);
  if (typeof bear === 'undefined') notFound();

  const cubs = bear.cubs;

  return (
    <AppStoreFragmentProvider cubs={cubs}>{children}</AppStoreFragmentProvider>
  );
}
