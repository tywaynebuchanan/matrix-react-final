import './App.css';
import {Routes,Route} from "react-router-dom"
import Services from './pages/servicespage/Services';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  );
}


export default App;
