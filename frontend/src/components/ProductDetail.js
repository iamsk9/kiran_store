import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ maxWidth: '600px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '1rem' }} />
      <h3>{product.name}</h3>
      <p style={{ fontSize: '1.5rem', color: '#28a745', fontWeight: 'bold' }}>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
