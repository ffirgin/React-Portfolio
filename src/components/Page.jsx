import React from 'react'
import PageContent from './PageContent'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './contact'
import Resume from './Resume'

function Page({ currentPage}) {

  const render = () => {
    switch (currentPage.name) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageContent>{render()}</PageContent>
    </section>
  )

}
export default Page