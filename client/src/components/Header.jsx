import React from 'react';
import {
  SearchIcon,
  TagIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'; // Import icons from Heroicons

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md flex items-center justify-around sticky top-0 h-20 z-50"> {/* Added z-50 for visibility above other content */}
      {/* Left side: Logo and Location Button */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          src="https://imgs.search.brave.com/m7KG0aucC3wnM6fPRajXSVB-rbIQIwlms2hWMjOPjKo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9vcHBv/c2l0ZWhxLmNvbS9z/dGF0aWMvMmU0MWFi/Njg4MjcxY2JjMTBl/NzcwYzg0NDIyZjJj/ODAvYTJiNjEvMF9t/ZWRpdW1jYXJkc19z/d2lnZ3lfOGFmMTYy/NTkwYi5wbmc" // Replace with your logo URL
          alt="Logo"
          className="h-12 w-12 rounded-xl" // Adjust size and make it circular
        />
        {/* Location Button */}
        <button className="px-4 py-2 rounded flex items-center space-x-1">
          {/* <span>📍</span> */}
          <span>Other</span>
        </button>
      </div>

      {/* Right side: Icons and Text */}
      <div className="flex justify-end space-x-8">
        {/* Search */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <SearchIcon className="h-6 w-6 text-blue-500" />
          <span className="text-gray-600">Search</span>
        </div>

        {/* Offer */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <TagIcon className="h-6 w-6 text-green-500" />
          <span className="text-gray-600">Offer</span>
        </div>

        {/* Help */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <QuestionMarkCircleIcon className="h-6 w-6 text-yellow-500" />
          <span className="text-gray-600">Help</span>
        </div>

        {/* Sign In */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <UserIcon className="h-6 w-6 text-purple-500" />
          <span className="text-gray-600">Sign In</span>
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <ShoppingCartIcon className="h-6 w-6 text-red-500" />
          <span className="text-gray-600">Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
