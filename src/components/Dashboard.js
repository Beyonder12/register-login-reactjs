import React, { useState } from 'react';

function Dashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 200 },
    // add more products as needed
  ]);

  return (
    <div>
      <h2>Dashboard Page</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
