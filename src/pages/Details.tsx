import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface DetailsProps {
  cards: Card[];
}

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

export default Details;
