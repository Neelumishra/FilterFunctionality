import React from 'react';
import './style.css';
let copyValue = [];
export default function List({ sort, filter }) {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState([]);
  React.useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((r) => r.json())
      .then((data) => {
        setValue(data);
        copyValue = data;
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    console.log('2nd use effect');
    if (sort === 'Low to High') {
      const hold = value.sort((a, b) => a.price - b.price);

      setValue([...hold]);
      // setValue([...value.sort((a, b) => a.price - b.price)]);
    } else if (sort === 'High to Low') {
      setValue([...value.sort((a, b) => b.price - a.price)]);
    }
  }, [sort]);
  React.useEffect(() => {
    // setValue([...copy Value]);
    if (filter == '0-300') {
      const filterValue = copyValue.filter((e) => e.price < 300);
      setValue([...filterValue]);
    } else if (filter == '300-600') {
      const filterValue = copyValue.filter(
        (e) => e.price > 300 && e.price < 600
      );
      setValue([...filterValue]);
    } else if (filter == '600-900') {
      const filterValue = copyValue.filter(
        (e) => e.price > 600 && e.price < 900
      );
      setValue([...filterValue]);
    } else if (filter == '1000-1200') {
      const filterValue = copyValue.filter(
        (e) => e.price > 1000 && e.price < 1200
      );
      setValue([...filterValue]);
    }
  }, [filter]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="main">
      {value.map((e) => (
        <div style={{ border: '1px solid', padding: '10px' }}>
          <img src={e.image} width="200px" height="200px" />
          <h3>{e.title}</h3>
          <b>{`Rs ${e.price}`}</b>
        </div>
      ))}
    </div>
  );
}
