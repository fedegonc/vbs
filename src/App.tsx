import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FC } from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import { cards } from './assets/cardsData';

const App: FC = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Gallery cards={cards} />} /> {/* Aquí se pasa `cards` como prop */}
        <Route path="/details/:id" element={<Details cards={cards} />} /> {/* Aquí también */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
