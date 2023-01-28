import React from 'react'
import pdf from '../assets/Griffin-Hobbs-Resume.pdf'
import { 
  AiOutLineHtml5, 
  SiJavascript, 
  SiCss3, 
  SiMysql, 
  AiFillGithub, 
  DiMongodb,
  SiReact,
  IoLogoNodejs,
  SiBootstrap,
  AiFillApi,
  SiHeroku,
  SiSequelize,

} from 'react-icons/ai'

const Resume = () => {
  return (
    <div name="resume" className='w-full h-screen bg-[#39393A] text-[#FFFAFF]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <h1 className='text-4xl font-bold text-center'>Resume</h1>
        <p className='text-[#FFFAFF] py-4 text-center'> Click 
          <a href ={pdf} download className='text-pink-500'> here </a> 
          to download my resume. </p>

          <div className='text-4xl font-bold text-center py-10'>
            My Technical Skills
            <div className='py-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>CSS</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>HTML5</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>Javascript</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>jQuery</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>React</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>APIs</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>Node</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>Express</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>MySQL, Sequelize</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>MongoDB, Mongoose</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>REST</div>
              <div className='text-center group container rounded-md flex justify-center items-center mx-auto border-2 py-3 mt-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>GraphQL</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Resume