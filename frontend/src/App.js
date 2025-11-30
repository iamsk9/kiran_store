import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '1rem', backgroundColor: '#f8f9fa', marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>Home</Link>
          <Link to="/products" style={{ textDecoration: 'none', color: '#007bff' }}>Products</Link>
        </nav>
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
