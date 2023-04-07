'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
export default function HomeSearch() {
  const [input, setInput] = useState('')
  const [randomLoading,setRandomLoading] = useState(false)

  const router = useRouter()
  function handleSubmit (e) {
    e.preventDefault()
    // console.log('->',input)
    if (!input.trim()) return
    router.push(`/search/web?term=${input}`)
  }

  async function handleRandom(e) {
    e.preventDefault()
    setRandomLoading(true)
    try {
    const resp = await fetch('https://random-word-api.herokuapp.com/word').then((res)=>res.json()).then((data)=>data[0])   
    router.push(`/search/web?searchTerm=${resp}`)
    } catch(e) {
      console.log(e)
    } finally {
      setRandomLoading(false)
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit} className='flex w-full my-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className='text-xl text-gray-500 mr-3 '/>
        <input type='text'className='flex-grow focus:outline-none' placeholder='Google 검색 또는 URL 입력' onChange={(e)=>setInput(e.target.value)}/>
        <BsFillMicFill className='text-xl text-gray-500 mr-3'/>
    </form>
    <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
        <button className='btn' onClick={handleSubmit}>Google Search</button>
        <button className='btn flex items-center justify-center' onClick={handleRandom}>
          {randomLoading? (
            <Image src='loading2.svg' alt='logo' width={32} height={32} className='text-center'/>
          ) : 
          (<span>I am feeling lucky</span>)
        }
          </button>
    </div>
    </>
  )
}
