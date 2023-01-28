import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#39393A] text-[#FFFAFF]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#81968F]'>Hello, I'm</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#FFFAFF]'>Griffin Hobbs</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#81968F]'>I'm a Full-Stack Developer.</h2>
        <p className='text-[#81968F] py-4 max-w-[700px]'>I'm a full-stack developer who is passionate in creating beautiful, user-friendly digital experiences.
          I recently received my certificate in full-stack development from the University of California Irvine's Coding Bootcamp.
          I'm a highly motivated, fast learner who is always looking to improve my skills and learn new technologies.</p>

          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7A8B99] hover:border-[#7A8B99]'>My Projects 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-1'/>
              </span>
            </button>
          </div>
      </div>

    </div>
  )
}

export default About