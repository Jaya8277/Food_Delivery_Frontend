import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Slider from 'react-slick'; // Import the react-slick slider
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: 'Pizza Hut',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/f87555d8-a964-4ca5-b2fc-5376287bb587_822315.jpg',
    rating: '4.5',
    time: '20-30 mins',
    category: 'Beverages, Pizzas',
    location: 'Banshankari'
  },
  {
    id: 2,
    name: 'Dominos',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg',
    rating: '4.3',
    time: '25-35 mins',
    category: 'Pizzas, Sides',
    location: 'MG Road'
  },
  {
    id: 3,
    name: 'KFC',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG',
    rating: '4.2',
    time: '15-25 mins',
    category: 'Chicken, Fast Food',
    location: 'Jayanagar'
  },
  {
    id: 4,
    name: 'Subway',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG',
    rating: '4.0',
    time: '10-20 mins',
    category: 'Sandwiches, Salads',
    location: 'Indiranagar'
  },
  {
    id: 1,
    name: 'Pizza Hut',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/f87555d8-a964-4ca5-b2fc-5376287bb587_822315.jpg',
    rating: '4.5',
    time: '20-30 mins',
    category: 'Beverages, Pizzas',
    location: 'Banshankari'
  },
  {
    id: 2,
    name: 'Dominos',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg',
    rating: '4.3',
    time: '25-35 mins',
    category: 'Pizzas, Sides',
    location: 'MG Road'
  },
  {
    id: 3,
    name: 'KFC',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG',
    rating: '4.2',
    time: '15-25 mins',
    category: 'Chicken, Fast Food',
    location: 'Jayanagar'
  },
  {
    id: 4,
    name: 'Subway',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG',
    rating: '4.0',
    time: '10-20 mins',
    category: 'Sandwiches, Salads',
    location: 'Indiranagar'
  },
  {
    id: 1,
    name: 'Pizza Hut',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/f87555d8-a964-4ca5-b2fc-5376287bb587_822315.jpg',
    rating: '4.5',
    time: '20-30 mins',
    category: 'Beverages, Pizzas',
    location: 'Banshankari'
  },
  {
    id: 2,
    name: 'Dominos',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg',
    rating: '4.3',
    time: '25-35 mins',
    category: 'Pizzas, Sides',
    location: 'MG Road'
  },
  {
    id: 3,
    name: 'KFC',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG',
    rating: '4.2',
    time: '15-25 mins',
    category: 'Chicken, Fast Food',
    location: 'Jayanagar'
  },
  {
    id: 4,
    name: 'Subway',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG',
    rating: '4.0',
    time: '10-20 mins',
    category: 'Sandwiches, Salads',
    location: 'Indiranagar'
  },
];


const images = [
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png',
];
const Home = () => {
  // Slider settings for react-slick
  const settings = {
    dots: true, // Disable dots
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Show 4 slides by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Show 2 slides on small screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on very small screens
        }
      }
    ]
  };

  return (
    <>
      <Header />
      <div  className="px-4 mb-20 text-left sm:px-8 md:px-[12%]"> {/* Responsive padding */}

      <ImageSlider images={images} />

                <h1 className="text-2xl font-bold  text-gray-900  ml-3 mb-5">      Top restaurant chains in Bangalore</h1>

        <Slider {...settings} className="mt-8 pb-10">
          {products.map(product => (
            <div key={product.id} className="p-2 px-4"> {/* Apply padding to create gap */}
              <Card product={product} />
            </div>
          ))}
        </Slider>
 
        <h1 className="text-2xl font-bold  text-gray-900 mt-20 ml-3 mb-5">Restaurants with online food delivery in Bangalore</h1>

        <div className="flex space-x-3 ml-3 m-4"> {/* Flex container with spacing between buttons */}
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">Filter</button>
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">Sort By</button>
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">Fast Delivery</button>
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">New on Swiggy</button>
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">Ratings 4.0+</button>
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">Pure Veg</button>
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">Offers</button>
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">Rs. 300-Rs. 600</button>
  <button className="bg-transparent border border-gray-300 rounded-3xl text-sm px-4 py-1.5 shadow-md hover:bg-gray-100 transition duration-200">Less than Rs. 300</button>
</div>

      
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Responsive grid layout */}
        {products.map(product => (
          <div key={product.id} className="p-2"> {/* Removed extra padding as grid gap will handle spacing */}
            <Card product={product} />
          </div>
        ))}
      </div>

      </div>
      <Footer/>
    </>
  );
};

export default Home;
