// src/data/cardsData.ts

export interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const cards: Card[] = [
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
