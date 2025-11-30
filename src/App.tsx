import React from 'react';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Kiran Store</h1>
        <p>Discover amazing products at great prices</p>
      </header>
      <main className="app-main">
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
