// 'use client'
import WebSearchResult from '@/components/WebSearchResult'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default async function WebSearch({searchParams}) {
  const page = searchParams.page || '1'
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.term}&start=${page}`)
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const data = await res.json()
  const items =data.items
  // console.log(items.length)
  if (!items) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No results found</h1>
        <p className='text-lg'>
          Try searching for something else or go back to the homepage
          
        </p>
        <Link href='/' className='text-blue-500'>Home</Link>
      </div>
    )
  }
  else
  return (
    <>
      <WebSearchResult  results={data}/>
    </>
  )
}
