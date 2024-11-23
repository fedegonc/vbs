import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import { FC } from 'react';

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface HomeProps {
  cards: Card[];
}

interface DetailsProps {
  cards: Card[];
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

const Home: FC<HomeProps> = ({ cards }) => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Art Gallery</h1>
      <div className="card-container">
        {cards.map((card: Card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <button className="card-button" onClick={() => navigate(`/details/${card.id}`)}>
              View More Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

const Details: FC<DetailsProps> = ({ cards }) => {
  const { id } = useParams<{ id: string }>();
  const card = cards.find((c) => c.id === parseInt(id ?? '', 10));

  if (!card) {
    return <h2>Artwork not found</h2>;
  }

  return (
    <main>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} className="card-image" />
      <p>{card.description}</p>
      <button onClick={() => window.history.back()} className="card-button">Go Back</button>
    </main>
  );
};

export default App;

/* CSS for styling the cards (add to App.css) */
/*
.card-container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 300px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.card-description {
  padding: 0 1rem;
  margin-bottom: 1rem;
  color: #555;
}

.card-button {
  background-color: #61dafb;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.3s;
}

.card-button:hover {
  background-color: #21a1f1;
}
*/
