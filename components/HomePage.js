import Image from 'next/image';
import React from 'react';

export default function HomePage() {
  return (
    <div className='h-full w-full'>
      <div className=' w-[100%] h-[100%]'>
        <Image src='/home.jpg' width={500} height={180} />
      </div>
    </div>
  )
}
