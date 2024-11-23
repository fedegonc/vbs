import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface HomeProps {
  cards: Card[];
}

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

export default Home;
