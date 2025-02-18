import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import laptopImg from '../assets/laptop.jpg';
import tshirtImg from '../assets/tshirt.jpg';
import watchImg from '../assets/watch.jpg';
import smartphoneImg from '../assets/smartphone.jpg';
import jeansImg from '../assets/jeans.jpg';
import headphonesImg from '../assets/headphones.jpg';
import sunglassesImg from '../assets/sunglasses.jpg';

const products = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 1000, image: laptopImg },
  { id: 2, name: 'T-Shirt', category: 'clothing', price: 20, image: tshirtImg },
  { id: 3, name: 'Watch', category: 'accessories', price: 50, image: watchImg },
  { id: 4, name: 'Smartphone', category: 'electronics', price: 600, image: smartphoneImg },
  { id: 5, name: 'Jeans', category: 'clothing', price: 40, image: jeansImg },
  { id: 6, name: 'Headphones', category: 'electronics', price: 150, image: headphonesImg },
  { id: 7, name: 'Sunglasses', category: 'accessories', price: 80, image: sunglassesImg },
];

const ProductListing = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products.filter(p => p.category === category));

  const handleFilter = (minPrice, maxPrice) => {
    setFilteredProducts(products.filter(p => p.category === category && p.price >= minPrice && p.price <= maxPrice));
  };

  return (
    <div className="container">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      <Filter onFilter={handleFilter} />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
