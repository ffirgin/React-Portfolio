import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div id='trailer'>
        <Nav />
        <About />
        <Portfolio />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </div>
  );
}

export default App;
