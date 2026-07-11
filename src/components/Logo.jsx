import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div style={{ maxWidth: width }} className='font-bold text-xl whitespace-nowrap'>
      🎮 GameBlog
    </div>
  )
}

export default Logo