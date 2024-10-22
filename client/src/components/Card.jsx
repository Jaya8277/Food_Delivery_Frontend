// Card.js
import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-95 hover:shadow-2xl"> {/* Scale up on hover */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full rounded-2xl h-40 object-cover"  
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-700">{product.rating} ⭐ {product.time}</p>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-gray-500">{product.location}</p>
      </div>
    </div>
  );
};

export default Card;
