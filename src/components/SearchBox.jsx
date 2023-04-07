'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsMicFill } from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'

export default function SearchBox() {
  const params = useSearchParams()
  const [term,setTerm] = useState(params.get('term')||'')
  const router = useRouter()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if (!term.trim()) return
    router.push(`/search/web?term=${term}`)
  }
  console.log(router)
  return (
    <form className='searchbox' onSubmit={handleSubmit}>
      <input type='text' className='flex-1 focus:outline-none' value={term} onChange={(e)=>setTerm(e.target.value)}/>
      <RxCross2 className='searchbox-icon' onClick={()=>setTerm('')}/>
      <div className='vline'/>
      <BsMicFill className='searchbox-icon hover:text-blue-500'/>
      <AiOutlineSearch className='searchbox-icon hover:text-blue-500' onClick={handleSubmit}/>
    </form>
  )
}
