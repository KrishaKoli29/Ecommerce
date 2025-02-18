import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    onFilter(Number(minPrice), Number(maxPrice));
  };

  return (
    <div className="filter">
      <label>
        Min Price:
        <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
      </label>
      <label>
        Max Price:
        <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
      </label>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
