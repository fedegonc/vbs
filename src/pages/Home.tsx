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
      <h1>Galería de Arte</h1>
      <div className="button-container">
        <button onClick={() => navigate('/contact')} className="navigation-button">
          Contáctanos
        </button>
        <button onClick={() => navigate('/project')} className="navigation-button">
          Proyecto
        </button>
      </div>
      <div className="card-container">
        {cards.map((card: Card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <button className="card-button" onClick={() => navigate(`/details/${card.id}`)}>
              Ver Más Detalles
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
