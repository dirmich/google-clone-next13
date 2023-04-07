import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
        <div className='border-b px-8 py-3'>
            <CountryLookup />
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-3'>
            <ul>
                <li>About</li>
                <li>Advertising</li>
                <li>Business</li>
                <li>How Search works</li>
            </ul>
            <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Settings</li>
            </ul>
        </div>
    </footer>
  )
}
