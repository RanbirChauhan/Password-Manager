import React from 'react'

const Navbar = () => {
  return (

    <nav className='bg-slate-900 text-white'>
        <div className="mycontainer flex justify-between items-center px-8 py-5 h-14">
      <div className='logo text-2xl font-bold '>
      <span className='text-green-700'>&lt;</span>
       Password Manager
      <span className='text-green-700'>/&gt;</span>
      
       </div>  
      <ul>
        <li className='flex gap-8 px-8'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='/about'>About</a>
            <a className='hover:font-bold' href='/about'>Contacts</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
