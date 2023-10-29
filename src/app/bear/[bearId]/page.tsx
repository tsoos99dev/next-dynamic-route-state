'use client';

import { useAppStore, useBear } from '@/store';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');

  console.log('Bear Page');

  const bear = useBear();
  const setBear = useAppStore((state) => state.setBear);
  const cubs = useAppStore((state) => state.cubs);

  return (
    <div className='flex flex-col gap-4 w-full items-center'>
      <div className='flex flex-col shadow w-full max-w-lg rounded items-center justify-center p-4 bg-slate-50 gap-4'>
        <span>Bear</span>
        <span className='font-bold'>{bear.name}</span>
        <div>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name
          </label>
          <input
            id='name'
            type='text'
            className='text-sm border-none shadow focus:ring-slate-400 focus:ring-2 rounded'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          className='text-sm font-bold px-4 py-2 rounded bg-slate-400 text-slate-50 hover:bg-slate-300'
          onClick={() => setBear({ ...bear, name })}
        >
          Set name
        </button>
      </div>

      <div className='w-full max-w-lg shadow rounded flex items-center justify-center p-4 bg-slate-50 gap-4'>
        <span>Cubs</span>
        {cubs.map((cub) => (
          <Link
            key={cub.id}
            href={`/bear/${bear.id}/cub/${cub.id}`}
            className='font-bold hover:bg-slate-200 px-4 py-2 rounded'
          >
            {cub.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
