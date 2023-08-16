import React from 'react';
import './style.css';
import List from './List.jsx';
import Filter from './Filter.jsx';
export default function App() {
  const [sort, setSort] = React.useState('');
  const [filter, setFilter] = React.useState('');

  return (
    <div style={{ display: 'flex' }}>
      <Filter setSort={setSort} setFilter={setFilter} />
      <List sort={sort} filter={filter} />
    </div>
  );
}
