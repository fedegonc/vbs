import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Importar el tema

import Home from './pages/Home';
import Details from './pages/Details';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import { cards } from './assets/cardsData'; // Importar las tarjetas

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header className="header">
          <Logo />
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home cards={cards} />} /> {/* Corregir: Pasar `cards` como `prop` */}
          <Route path="/details/:id" element={<Details cards={cards} />} /> {/* Corregir: Pasar `cards` como `prop` */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
