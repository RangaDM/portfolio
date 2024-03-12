import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

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
        <Tech />
        <Works />
        <Feedbacks />
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
