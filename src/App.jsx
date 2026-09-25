import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Technologies from './pages/Technologies';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Layout({ children }) { return <><Navbar />{children}<Footer /></>; }

export default function App() {
  return <BrowserRouter><Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/technologies" element={<Technologies />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
  </Routes></Layout></BrowserRouter>;
}