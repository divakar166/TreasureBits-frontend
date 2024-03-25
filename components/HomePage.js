import Image from 'next/image';
import React from 'react';
import Trending from './Trending';

export default function HomePage() {
  return (
    <div className='h-[125vh] w-full flex flex-col'>
      <div className='h-[85vh] flex mt-10'>
        <div className='w-2/5 h-[100%] flex justify-center items-center'>
          <Image src='/home.png' alt='home' width={500} height={180} />
        </div>
        <div className='w-3/5 mx-10 px-2 mb-10 flex flex-col items-center justify-center text-center'>
          <div className='text-[5rem] leading-[5rem] font-bold lead'>Uncover Hidden Gems of Knowledge</div>
          <p className='mt-5 text-justify text-gray-700'>Treasure Bits invites you to embark on a journey of discovery where every click unveils valuable nuggets of wisdom. Join us as we navigate through the digital landscape, uncovering insights, and enriching our minds one byte at a time.
          {/* Delve into a world brimming with diverse topics, from technology to culture, and unearth the hidden gems of knowledge waiting to be discovered. Join us as we navigate through the digital landscape, uncovering insights, and enriching our minds one byte at a time. */}
          </p>
        </div>
      </div>
      <Trending />
    </div>
  )
}
