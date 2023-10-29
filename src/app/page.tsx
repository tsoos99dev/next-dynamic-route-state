'use client';

import { useAppStore } from '@/store';
import Link from 'next/link';

export default function Home() {
  console.log('Home Page');

  const bears = useAppStore((state) => state.bears);

  return (
    <div className='w-full max-w-lg shadow rounded flex items-center justify-center p-4 bg-slate-50 gap-4'>
      <span>Bears</span>
      {bears.map((bear) => (
        <Link
          key={bear.id}
          href={`/bear/${bear.id}`}
          className='font-bold hover:bg-slate-200 px-4 py-2 rounded'
        >
          {bear.name}
        </Link>
      ))}
    </div>
  );
}
