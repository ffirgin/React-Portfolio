import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='fixed bottom-0'>
      <footer className='w-full flex flex-row'>
        <a href="https://www.linkedin.com/in/ffirgn/">
          <AiOutlineLinkedin size={40} className="bg-[#81968F]" />
        </a>
        <a href='https://github.com/ffirgin/'>
        <AiOutlineGithub size={40} className="bg-[#81968F]" />
        </a>
    </footer>
    </div>
  )
}

export default Footer