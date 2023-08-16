import React from 'react';
export default function Filter({ setFilter, setSort }) {
  function handleClick() {}
  return (
    <div style={{ border: '1px solid', textAlign: 'center', padding: '12px' }}>
      <h3 style={{ color: 'crimson' }}>Filter</h3>
      <select
        style={{ margin: '5px', width: '120px', textAlign: 'center' }}
        onChange={(e) => setSort(e.target.value)}
      >
        <option>Select</option>
        <option value="Low to High">Low to High</option>
        <option value="High to Low">High to Low</option>
      </select>
      <br />
      <select
        style={{ margin: '5px', width: '120px', textAlign: 'center' }}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>Select</option>
        <option value="0-300">0-300</option>
        <option value="300-600">300-600</option>
        <option value="600-900">600-900</option>
        <option value="1000-1200">1000-1200</option>
      </select>{' '}
      <br />
      <br />
      <button
        style={{
          backgroundColor: 'crimson',
          color: 'white',
          border: 'none',
          borderRadius: '5%',
          padding: '8px',
        }}
        onClick={handleClick}
      >
        Apply
      </button>
    </div>
  );
}
