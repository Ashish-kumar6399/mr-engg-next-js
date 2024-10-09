'use client'
import React, { useRef } from 'react';
import '../Styles/Service.css';
import Link from 'next/link';


const Service = () => {
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    const container = cardContainerRef.current;
    const scrollAmount = container.clientWidth;

    if (container.scrollLeft === 0) {
      // If at the first image, jump to the last image with smooth scroll
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = cardContainerRef.current;
    const scrollAmount = container.clientWidth;

    // Use a slightly reduced value to handle any floating point or minor padding issues
    if (Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth) {
      // If at the last image, reset back to the first image smoothly
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='services'>
        <h1>
          Our Service <span style={{ color: '#2EA6F6' }}></span>
        </h1>
        <div className='ser-p container'>
          <p id='para_colour'>
            M.R. Engg. Works offers a complete end-to-end solution for medical gas pipeline systems. Our dedicated sales and customer service team is here to guide you through the entire process, from initial consultation to order placement.
          </p>
        </div>

        {/* Service Card with Left and Right Controllers */}
        <div className='card-wrapper'>
          <button id='scroll-button1' className='scroll-btn left' onClick={scrollLeft}>&lt;</button>
          <div className='card-container' ref={cardContainerRef}>
            <div className='card mt-2'>
              <img id='img_service' src={'/image/IMG_1631.webp'} alt='Card 1' />
              <div className='card-body'>
                <h2>Theatre Suction Trolley</h2>
                <p className='' id='para_colour'>
                A theatre suction trolley is a mobile unit with a suction pump and canisters, used to remove fluids during surgeries.
                </p>
                <Link href='/products'>
                <button id='services-button'>Learn More</button>
                </Link>              </div>
            </div>
            <div className='card mt-2'>
              <img id='img_service' src={'/image/IMG_1913.webp'} alt='Card 2' />
              <div className='card-body'>
                <h2>Nurse Call System</h2>
                <p id='para_colour'>
                  A nurse call system is a communication tool used in healthcare settings that allows patients to alert nurses or staff for assistance.
                </p>


                <Link href='/products'>
                <button id='services-button'>Learn More</button>
                </Link>              </div>
            </div>
            <div className='card mt-2'>
              <img id='img_service' src={'/image/IMG_1811.webp'} alt='Card 3' />
              <div className='card-body'>
                <h2>Bed Head Panel</h2>
                <p id='para_colour'>
                  A bed head panel is a unit mounted at the head of a hospital bed, providing essential controls and connections.
                </p>
                <Link href='/products'>
                <button id='services-button'>Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          <button id='scroll-button2' className='scroll-btn right' onClick={scrollRight}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Service;