import React from 'react'
import logo from '../assets/logo.png'

function Logo({ width = '2000px' }) {
  return (
    <div className='flex items-center gap-2'>
      <img
        src={logo}
        alt="Straffed logo"
        style={{ maxWidth: width }}
        className='w-full h-auto object-contain'
      />
      <span className='text-xl font-bold text-white whitespace-nowrap'>
        Straffed
      </span>
    </div>
  )
}

export default Logo