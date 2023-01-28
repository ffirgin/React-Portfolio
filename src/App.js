import React, { useState } from "react";
import Page from "./components/Page";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="scrollbar-hide">
      <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  )
}

export default App;
