import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Cheese Cake', price: 249.99, image: 'cheesecake.jpg' },
  { id: 2, name: 'Scones', price: 84.99, image: 'scones.jpg' },
  { id: 3, name: 'Stuffed Applepie', price: 129.99, image:'stuffedapplepie.jpg' },
  { id: 4, name: 'Apricot Cake', price: 149.99, image: 'apri.jpg'},
  
  // Add more products here
];

function ProductList() {
  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;