const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Apple',
    price: 1.5,
    description: 'Fresh red apple',
    image: 'https://via.placeholder.com/300x200?text=Apple'
  },
  {
    id: 2,
    name: 'Banana',
    price: 0.5,
    description: 'Yellow banana bunch',
    image: 'https://via.placeholder.com/300x200?text=Banana'
  },
  {
    id: 3,
    name: 'Bread',
    price: 2.0,
    description: 'Fresh baked bread',
    image: 'https://via.placeholder.com/300x200?text=Bread'
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.listen(port, () => {
  console.log(`Kiran Store backend running at http://localhost:${port}`);
});
