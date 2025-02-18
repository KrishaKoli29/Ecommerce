import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1><Link to="/">E-commerce Site</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/electronics">Electronics</Link></li>
          <li><Link to="/category/clothing">Clothing</Link></li>
          <li><Link to="/category/accessories">Accessories</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
