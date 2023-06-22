import "./App.css";

import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import { About } from "./components/Pages/About/About";
import { Contact } from "./components/Pages/Contact/Contact";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import  Services  from "./components/Pages/Services/Services";
import NavBar from "./components/Pages/NavBar/NavBar";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
