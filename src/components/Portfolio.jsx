import React from 'react'
import bits from '../assets/bits-please-chat.png'
import food from '../assets/food-and-news.png'
import jate from '../assets/JATE.png'
import notes from '../assets/Note-taker.png'

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen bg-[#39393A] text-[#FFFAFF]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#FFFAFF] border-[#81968F]'>Portfolio</p>
          <p className='py-6'>Here is some of my current projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

{/* Bits */}
          <div style={{backgroundImage: `url(${bits})`}} className='shadow-lg shadow-[#111715] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                BITS PLEASE CHAT

              </span>
              <div className='pt-8 text-center'>
                <a href="https://damp-river-11459.herokuapp.com">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                </a>
                <a href="https://github.com/monysary/Bits-Please-Chat">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Repo</button>
                </a>
              </div>
            </div>
          </div>
{/* End Bits */}

{/* Food & News */}
          <div style={{backgroundImage: `url(${food})`}} className='shadow-lg shadow-[#111715] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Food & News

              </span>
              <div className='pt-8 text-center'>
                <a href="https://dariusgarcia.github.io/food-and-news/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                </a>
                <a href="https://github.com/DariusGarcia/food-and-news">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Repo</button>
                </a>
              </div>
            </div>
          </div>
{/* End F&N */}

{/* JATE */}
<div style={{backgroundImage: `url(${jate})`}} className='shadow-lg shadow-[#111715] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Just Another Text Editor

              </span>
              <div className='pt-8 text-center'>
                <a href="https://damp-journey-93581.herokuapp.com">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                </a>
                <a href="https://github.com/ffirgin/PWA-Text-Editor">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Repo</button>
                </a>
              </div>
            </div>
          </div>
{/* End JATE */}

{/* Start Notes */}
<div style={{backgroundImage: `url(${notes})`}} className='shadow-lg shadow-[#111715] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Note Taker

              </span>
              <div className='pt-8 text-center'>
                <a href="https://dry-anchorage-72556.herokuapp.com">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Demo</button>
                </a>
                <a href="https://github.com/ffirgin/Note-Taker-App">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 text-lg'>Repo</button>
                </a>
              </div>
            </div>
          </div>
{/* End Notes */}

        </div>

      </div>
    </div>
  )
}

export default Portfolio