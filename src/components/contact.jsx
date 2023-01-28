import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#39393A] text-[#FFFAFF] flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#81968F] text-[#FFFAFF]'>Contact</p>
          <p className='text-[#FFFAFF] py-4'> Use the form below, or send me an email @ ffirgn@gmail.com</p>
        </div>
        <input className='p-3' type="text" placeholder="Name" name ="name"></input>
        <input className='my-4 p-3 ' type="text" placeholder="Email" name ="Email"></input>
        <textarea className='p-2' name="message" rows="8" placeholder="Your message to me..."></textarea>
        <button className='text-[#FFFAFF] px-4 py-3 my-8 mx-auto flex items-center border-2 hover:bg-[#7A8B99] hover:border-[#7A8B99]'>Let's chat...</button>
      </form>
    </div>
  )
}

export default Contact