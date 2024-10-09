"use client";
import React, { useEffect, useState } from 'react';
import '../../../Styles/Product.css'; 
import tourData from '../../../Data'; 
import { getName } from '../../../utils';
import Link from 'next/link';

const Product = ({ params }) => {
  const { id } = params; 
  const [single, setSingle] = useState(null); 
  useEffect(() => {
    if (id) {
      const product = tourData.find(item => 
        item.name.toLowerCase() === getName(id).toLowerCase() 
      );
      setSingle(product || {}); 
    }
  }, [id]);

  if (single === null) return <p>Loading...</p>;
  if (!single.name) return <p>Product not found.</p>; 
  
  return (
    <div>
      <div className='product container'>
        <div className='product-main row'>
          <div className='product-image col-12 col-md-5'>
            <img
              src={single.img}
              alt='product-image'
              className='single-img'
            />
          </div>
          <div className='product-details col-12 col-md-7'>
            <h2 className='product-details-h2'>{single.name}</h2>
            <p className='product-details-p'>
              {single.Description}
            </p>
            <Link href='/form'>
              <button className='product-btn2'>Request Quote</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
