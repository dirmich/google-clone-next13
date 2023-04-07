import ImageSearchResult from '@/components/ImageSearchResult'
import Link from 'next/link'
import React from 'react'

export default async function ImageSearchPage({searchParams}) {
  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.term}&searchType=image`)
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const data = await res.json()
  const items =data.items
  console.log(data)
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
    <div>
      <ImageSearchResult results={data}/> 
    </div>
  )
}
