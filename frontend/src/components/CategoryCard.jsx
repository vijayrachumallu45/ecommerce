import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/products?category=${encodeURIComponent(category.name)}`} className="category-card">
      <div className="category-image-wrapper">
        <img src={category.image} alt={category.name} className="category-image" />
        <div className="category-overlay">
          <h3 className="category-title">{category.name}</h3>
          <span className="category-action">Explore &rarr;</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
