import React from 'react';
import { Link } from 'react-router-dom';
import electronicsImg from '../assets/electronics.jpg';
import clothingImg from '../assets/clothing.jpg';
import accessoriesImg from '../assets/accessories.jpg';

const categories = [
  { name: 'Electronics', img: electronicsImg },
  { name: 'Clothing', img: clothingImg },
  { name: 'Accessories', img: accessoriesImg }
];

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="company-name">✨Kiko Shop✨</h1>
      </header>
      <section className="hero">
        <h2>Welcome to Kiko Shop!</h2>
        <h3>Your one-stop destination for the best products in electronics, clothing, and accessories 🥳</h3>
      </section>
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-cards">
          {categories.map(category => (
            <div key={category.name} className="category-card">
              <Link to={`/category/${category.name.toLowerCase()}`}>
                <div className="card-content">
                  <img src={category.img} alt={category.name} />
                  <h2>{category.name}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
