import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Components/Nav';
import About from './Pages/About';
import Experiences from './Pages/Experiences';
import Contact from './Pages/Contact';
import Hobbies from './Pages/Hobbies';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import './Styles/Nav.css';
import Arrow from './Components/Arrow';
import Particles from './Components/Particles';

function App() {
  return (
		<BrowserRouter>
				<Particles/>

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
    
  );
}

export default App;
