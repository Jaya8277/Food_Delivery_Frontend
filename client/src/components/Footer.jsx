import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between flex-wrap px-4">
        {/* Left Side: Company Info */}
        <div className="w-full md:w-1/3 mb-4">
          <h3 className="text-lg font-bold mb-2">Company Name</h3>
          <p className="text-sm">Address Line 1</p>
          <p className="text-sm">Address Line 2</p>
          <p className="text-sm">City, State, ZIP</p>
        </div>

        {/* Center: Links */}
        <div className="w-full md:w-1/3 mb-4">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" className="text-sm hover:underline">About Us</a></li>
            <li><a href="#" className="text-sm hover:underline">Services</a></li>
            <li><a href="#" className="text-sm hover:underline">Contact</a></li>
            <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Side: Social Media */}
        <div className="w-full md:w-1/3 mb-4">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i> {/* Example Font Awesome Icon */}
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-4">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
