import Link from 'next/link'
import React from 'react'
import parser from 'html-react-parser'
import PaginationButtons from './PaginationButtons'

export default function WebSearchResult({results}) {
  return (
    <div className='w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        <p className='text-gray-600 text-sm '>
            About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)
            {results.items?.map((item)=>(
                <div key={item.link} className='mt-7 group'>
                    <div className='flex flex-col'>
                        <Link className='text-sm truncate cursor-pointer' href={item.link}>{item.formattedUrl}</Link>
                        <Link className='text-xl font-medium text-blue-800 decoration-blue-800 group-hover:underline cursor-pointer' href={item.link}>{parser(item.htmlTitle)}</Link>
                        <div className='w-[50%] text-ellipsis text-gray-600'>{parser(item.htmlSnippet)}</div>
                    </div>
                </div>
            ))}
        </p>
        <div className='mt-4'>
        <PaginationButtons/>
        </div>
    </div>
  )
}
