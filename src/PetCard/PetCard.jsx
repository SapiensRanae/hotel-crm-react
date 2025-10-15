import React from 'react';

function PetCard({ pet }) {
  if (!pet) return null;

  const { name, photo, species, birthYear, favFoods } = pet;

  return (
    <div className="pet-card" style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      background: '#fff',
    }}>
      {photo && (
        <img
          src={photo}
          alt={name || 'Pet photo'}
          style={{ width: '100%', height: 160, objectFit: 'cover' }}
        />
      )}
      <div style={{ padding: 12 }}>
        {name && (
          <h3 style={{ margin: '0 0 8px', fontSize: 18 }}>
            {name}
          </h3>
        )}

        {species && (
          <p style={{ margin: '4px 0', color: '#555' }}>
            Species: {species}
          </p>
        )}

        {typeof birthYear !== 'undefined' && (
          <p style={{ margin: '4px 0', color: '#555' }}>
            Birth year: {birthYear}
          </p>
        )}

        {Array.isArray(favFoods) && favFoods.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Favorite foods:</div>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {favFoods.map((food, idx) => (
                <li key={idx} style={{ lineHeight: 1.4 }}>
                  {typeof food === 'string' ? food.replace(/<[^>]+>/g, '') : String(food)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PetCard;
