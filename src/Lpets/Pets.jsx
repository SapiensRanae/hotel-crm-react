import React from 'react';
import PetCard from '../PetCard/PetCard.jsx';

const petsData = [
  {
    id: 1,
    name: 'Purrsloud',
    species: 'Cat',
    favFoods: ['wet food', 'dry food', '<strong>any</strong> food'],
    birthYear: 2017,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-2.jpg',
  },
  {
    id: 2,
    name: 'Barksalot',
    species: 'Dog',
    birthYear: 2008,
    photo: 'https://learnwebcode.github.io/json-example/images/dog-1.jpg',
  },
  {
    id: 3,
    name: 'Meowsalot',
    species: 'Cat',
    favFoods: ['tuna', 'catnip', 'celery'],
    birthYear: 2024,
    photo: 'https://learnwebcode.github.io/json-example/images/cat-1.jpg',
  },
];

function Pets() {
  return (
    <div className="pets-list" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '16px',
      padding: '16px',
    }}>
      {petsData.map(pet => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default Pets;
