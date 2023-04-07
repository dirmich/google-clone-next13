'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function PaginationButtons() {
    const pathname = usePathname()
    const params = useSearchParams()
    const term = params.get('term')
    const index = +params.get('page')||1
  return (
    <div className='flex w-full mb-4 text-blue-700 cursor-pointer sm:space-x-4'>
        {index>1&&(
        <Link href={`${pathname}?term=${term}&page=${index-1}`}>
            <BsChevronLeft/>
            <p className='text-sm'>Prev</p>
        </Link>
        )}
        <Link href={`${pathname}?term=${term}&page=${index+1}`}>
            <BsChevronRight/>
            <p className='text-sm'>Next</p>
        </Link>
    </div>
  )
}
