import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  StarsCanvas,
  Works
} from "./components";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Tech from "./components/Tech";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Banner />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Skills />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="z-10">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
