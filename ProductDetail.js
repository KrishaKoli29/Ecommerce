import React from 'react';
import { useParams } from 'react-router-dom';
import laptopImg from '../assets/laptop.jpg';
import tshirtImg from '../assets/tshirt.jpg';
import watchImg from '../assets/watch.jpg';
import smartphoneImg from '../assets/smartphone.jpg';
import jeansImg from '../assets/jeans.jpg';
import headphonesImg from '../assets/headphones.jpg';
import sunglassesImg from '../assets/sunglasses.jpg';

const products = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 1000, description: 'High-performance laptop with 16GB RAM.', image: laptopImg },
  { id: 2, name: 'T-Shirt', category: 'clothing', price: 20, description: 'Comfortable cotton T-shirt in various sizes.', image: tshirtImg },
  { id: 3, name: 'Watch', category: 'accessories', price: 50, description: 'Stylish watch with leather strap.', image: watchImg },
  { id: 4, name: 'Smartphone', category: 'electronics', price: 600, description: 'Latest model with a stunning display and fast performance.', image: smartphoneImg },
  { id: 5, name: 'Jeans', category: 'clothing', price: 40, description: 'Durable and stylish jeans available in different sizes.', image: jeansImg },
  { id: 6, name: 'Headphones', category: 'electronics', price: 150, description: 'Wireless headphones with noise cancellation.', image: headphonesImg },
  { id: 7, name: 'Sunglasses', category: 'accessories', price: 80, description: 'UV-protected sunglasses with a sleek design.', image: sunglassesImg },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id.toString() === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image"/>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
