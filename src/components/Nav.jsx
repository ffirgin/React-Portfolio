import React from 'react'

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#39393A] text-[#FFFAFF]'>
      <div>
        <h1 className="text-5xl text-[#81968F] font-bold">G</h1>
        </div>
          <ul className="flex">
            {pages.map((Page) => (
            <li className={`mx-5 ${currentPage.name === Page.name && 'navActive'}`}key={Page.name}>
              <span onClick={() => setCurrentPage(Page)}>
                {Page.name}
              </span>
            </li>
            ))}
          </ul>
    </div>
  )
}

export default Nav