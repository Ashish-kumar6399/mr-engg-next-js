'use client'
import React from 'react';
import '../Styles/PlantRoom.css';
import Link from 'next/link';

const PlantRoom = () => {
  return (
    <div className='container '>
      <div className='Plant-Room row'>
        <div className='Plant-Room-img col-12 col-md-6'>
          <img
          src={'image/plantroom.webp'}
            alt='img/photo'
          />
        </div>
        <div className='Plant-Room-content col-12 col-md-6'>
          <h1>
            From Plant Room  to Patient<br />
          </h1>
          <p className='content-p'>
          M.R. Engg. Works is a recognized leader in the medical gas pipeline industry in India, trusted by healthcare providers across the country. We offer a comprehensive range of medical equipment, including degreased copper accessories, tubes, and advanced medical pendants. Need products urgently? Our dedicated sales team is here to assist with all your queries and support your projects. Contact us today for expert assistance and timely solutions.
          </p>
          <div className='Plant-Room-check'>
            <div className='check-1'>
              <p>
                <i className='fa-solid fa-circle-check'></i>&nbsp;&nbsp;HTM
                02-01 Compliant
              </p>
              <p>
                <i className='fa-solid fa-circle-check'></i>
                &nbsp;&nbsp;Technical Drawings
              </p>
            </div>
            <div className='check-2'>
              <p>
                <i className='fa-solid fa-circle-check'></i>&nbsp;&nbsp;Global
                Shipping
              </p>
              <p>
                <i className='fa-solid fa-circle-check'></i>&nbsp;&nbsp;Customer
                Support
              </p>
            </div>
          </div>
          <Link href='/products'>
          <div id='main_div_catt'>
                <button
                    className='btn_main_div_catt text-center'
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open('/image/new_pdf.pdf', '_blank');
                      }
                    }}>
                  View catalogue
                </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantRoom;