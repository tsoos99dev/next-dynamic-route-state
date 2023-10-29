'use client';

import { useBearOptional, useCubOptional } from '@/store';
import Link from 'next/link';

export default function NavBar() {
  console.log('NavBar');
  const bear = useBearOptional();
  const cub = useCubOptional();

  return (
    <nav className='h-16 bg-slate-800 flex items-center px-2 gap-2'>
      <Link
        href='/'
        className='text-slate-50 font-bold hover:bg-slate-50/20 px-4 py-2 rounded'
      >
        Home
      </Link>
      <RightArrow />
      {typeof bear === 'undefined' ? (
        <span className='text-slate-200'>--</span>
      ) : (
        <Link
          href={`/bear/${bear.id}`}
          className='text-slate-50 font-bold hover:bg-slate-50/20 px-4 py-2 rounded'
        >
          {bear.name}
        </Link>
      )}
      <RightArrow />
      <span className='text-slate-200 font-bold'>{cub?.name ?? '--'}</span>
    </nav>
  );
}

function RightArrow() {
  return (
    <svg
      className='w-3 h-3 text-gray-400 mx-1'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 6 10'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m1 9 4-4-4-4'
      />
    </svg>
  );
}
