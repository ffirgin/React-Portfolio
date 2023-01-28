import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#39393A] text-[#FFFAFF]">
      <div>
        <h1 className="text-5xl text-[#81968F] font-bold">G</h1>
      </div>

      {/* Desktop Menu */}
        <ul className='hidden md:flex'>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>

      <div onClick={toggle} className='md:hidden z-10'>
        {!isOpen ? <FaBars/> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
        <ul className={!isOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#39393A] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Portfolio</li>
            <li className='py-6 text-4xl'>Contact</li>
            <li className='py-6 text-4xl'>Resume</li>
          </ul> 

    </div>
  )
}

export default Nav