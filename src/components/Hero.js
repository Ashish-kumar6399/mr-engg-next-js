'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../Styles/Header.css';
import '../Styles/Hero.css';

const Hero = () => {
  
  const images = [
    // img
    '/image/U11.webp',
    '/image/u111.webp'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className='container   ' id='operation_div'>
      <div className=' row d-flex  mr_flex'>
        <div className='before-header-content  col-12 col-md-6'>
          <h1 className='hero_section' id='hero_para'>
            Medical Gas Pipeline Specialists{' '}
            {/* <span style={{ color: '#2EA6F6' }}>   </span> */}
          </h1>
          <p className='content-p'>
          Our goal is to be the world’s top manufacturer, supplier, service provider, and technology consultant for Medical Gas Pipeline Systems (MGPS). We deliver high-quality, innovative solutions with a focus on safety and customer satisfaction, ensuring excellence in healthcare infrastructure globally.
          </p>
          <Link href='/products'>
            <button className='view-all-product'   id='btn_before_header'   >View all products</button>
          </Link>
        </div>
        <div className='before-header-img col-12 col-md-6 '>
            <img
              className='mb-4 '
              id='img_operation'
              src={images[currentImageIndex]}
              alt='img/photo'
            />
          </div>
      </div>
    </div>
  );
};

export default Hero;