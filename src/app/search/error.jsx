'use client'
import React, { useEffect } from 'react'

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log('Error: ',error)
    },[error])

  return (
    <div>
        <h1>Something went wrong</h1>
        <button onClick={()=>reset()}>
            <p className='text-blue-500'>Try again</p>
        </button>
    </div>
  )
}
