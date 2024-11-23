import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FC } from 'react';
import Home from './pages/Home';
import Details from './pages/Details';

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

const App: FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Artwork 1',
      description: 'This is the description of artwork 1.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Artwork 2',
      description: 'This is the description of artwork 2.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Artwork 3',
      description: 'This is the description of artwork 3.',
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cards={cards} />} />
        <Route path="/details/:id" element={<Details cards={cards} />} />
      </Routes>
    </Router>
  );
};

export default App;
