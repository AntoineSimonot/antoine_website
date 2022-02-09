import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import About from './Pages/About';
import Experiences from './Pages/Experiences';
import Contact from './Pages/Contact';
import Hobbies from './Pages/Hobbies';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import './Styles/Nav.css';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useEffect } from 'react';
import Arrow from './Components/Arrow';

const options = {
  timeout: 3500,
  position: positions.TOP_RIGHT
};

function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
          <Arrow/>
        </BrowserRouter>  
    </Provider>

  );
}

export default App;
