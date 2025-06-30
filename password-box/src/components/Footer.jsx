import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white flex flex-col justify-center items-center'>
    <div>
        <div className='logo text-2xl font-bold '>
      <span className='text-green-700'>&lt;</span>
       Password Manager
      <span className='text-green-700'>/&gt;</span>
      
       </div>
    </div>
    <div className='flex justify-center items-center'>Created with  <img src='heart.png' alt='love' className='w-6 mx-2 my-4'/> by Ranbir Chauhan</div>
    </div>
  )
}

export default Footer
