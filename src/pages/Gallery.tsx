import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface GalleryProps {
  cards: Card[];
}

const Gallery: FC<GalleryProps> = ({ cards }) => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <h1>Galería de Tallados</h1>
      <div className="card-container d-flex flex-wrap justify-content-center">
        {cards.map((card: Card) => (
          <div className="card m-3" key={card.id} style={{ width: '18rem' }}>
            <img src={card.image} alt={card.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/details/${card.id}`)}
              >
                Ver Más Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Gallery;
