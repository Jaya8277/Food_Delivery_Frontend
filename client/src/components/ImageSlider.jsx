// ImageSlider.js
import React from 'react';
import Slider from 'react-slick'; // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Theme CSS

const ImageSlider = ({ images }) => {
  // Slider settings
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true, // Enable infinite loop sliding
    speed: 500, // Slide transition speed
    slidesToShow: 8, // Show 8 slides on large screens
    slidesToScroll: 1, // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6, // Show 6 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4, // Show 4 slides on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show 2 slides on very small screens
        },
      },
    ],
  };

  return (
    <div className="h-60 m-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className=" bg-red-400 h-50 w-full h-full object-cover rounded-lg" // Make images responsive
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
