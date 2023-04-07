'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch,AiOutlineCamera } from 'react-icons/ai'

export default function SearchHeaderOptions() {
    const pathname = usePathname()
    const router = useRouter()
    const param = useSearchParams()
    const [isWeb,setIsWeb] = useState(pathname==='/search/web')
    console.log(pathname,isWeb)
    useEffect(()=>{
        setIsWeb(pathname==='/search/web')
    },[pathname])
    const selectTab = (tab)=> {
        router.push(`/search/${tab}?term=${param.get('term')}`)
    }
  return (
    <div className='flex space-x-2 justify-center  select-none border-b w-full text-sm'>
        <div className={`flex justify-center items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${isWeb && '!text-blue-600 !border-blue-600'}`} onClick={()=>selectTab('web')}>
            <AiOutlineSearch/>
            <p>All</p>
        </div>
        <div className={`flex justify-center items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${!isWeb && '!text-blue-600 !border-blue-600'}`} onClick={()=>selectTab('image')}>
            <AiOutlineCamera/>
            <p>Images</p>
        </div>
    </div>
  )
}
