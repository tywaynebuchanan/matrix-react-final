import './App.css';
import {Routes,Route} from "react-router-dom"
import Services from './pages/servicespage/Services';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Team from './pages/team/Team'
import { BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Products from './pages/products/Products';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
            <Route index element={<Home />}/>
            <Route exact path="about" element={<About />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="services" element={<Services />} />
            <Route exact path="team" element={<Team />} />
            <Route exact path="products" element={<Products/>} />
            <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}


export default App;
