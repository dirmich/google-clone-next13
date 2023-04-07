import Link from 'next/link'
import React from 'react';
import {TbGridDots} from 'react-icons/tb'
function HomeHeader() {
    return (
        <header className='flex flex-row justify-end p-5 text-sm'>
            <div className='flex flex-row items-center text-sm space-x-4'>
                <Link href='https://mail.google.com'>GMail</Link>
                <Link href='https://www.google.co.kr/imghp?hl=ko&tab=ri&ogbl'>이미지</Link>
                <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2'/>
                <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>
            </div>
        </header>
    );
}

export default HomeHeader;