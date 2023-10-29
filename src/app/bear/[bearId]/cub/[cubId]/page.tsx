'use client';

import { useAppStore, useCub } from '@/store';
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');

  console.log('Cub Page');

  const cub = useCub();
  const setCub = useAppStore((state) => state.setCub);

  return (
    <div className='flex flex-col gap-4 w-full items-center'>
      <div className='flex flex-col shadow w-full max-w-lg rounded items-center justify-center p-4 bg-slate-50 gap-4'>
        <span>Cub</span>
        <span className='font-bold'>{cub.name}</span>
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
          onClick={() => setCub({ ...cub, name })}
        >
          Set name
        </button>
      </div>
    </div>
  );
}
