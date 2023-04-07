
import Link from 'next/link'
import React from 'react'
import parser from 'html-react-parser'
import Image from 'next/image'

export default function ImageSearchResult({results}) {
  return (
    <div className='w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4 items-center justify-center'>
            
            {results.items?.map((item)=>(
                <div key={item.link} className='mt-7 group'>
                    <div className='flex flex-col'>
                    <Link className='text-sm truncate cursor-pointer' href={item.image.contextLink}>                       
                            <img src={item.link} alt={item.title} className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow'/>
                    </Link>
                    <Link className='text-sm truncate cursor-pointer w-full' href={item.image.contextLink}>
                        <h2 className='group-hover:underline truncate text-xl '>{item.title}</h2>
                    </Link>
                    <Link className='text-sm truncate cursor-pointer text-gray-500' href={item.image.contextLink}>
                        <p>{item.displayLink}</p>
                    </Link>
                    
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
