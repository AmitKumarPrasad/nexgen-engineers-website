import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Technologies from './pages/Technologies';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function Layout({ children }) {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><Navbar /><main id="main-content">{children}</main><Footer /></>;
}

export default function App() {
  return <BrowserRouter><Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/technologies" element={<Technologies />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Layout></BrowserRouter>;
}