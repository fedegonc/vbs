import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FC } from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Services from './pages/Services'; // Importar la página de Servicios
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import { cards } from './assets/cardsData'; // Importa las tarjetas desde cardsData
import theme from './theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header className="header">
          <Logo />
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
