import React from 'react';
import '../Styles/AboutUs.css';
import Aboutusowl from './Aboutusowl';

const AboutUs = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='about-us'>
          <div className='col-12 w-100'>
            <div id='about-unique'>
                <div id='about-img' >
                  <img src={'/image/about.webp'} alt="about/image" id='about_us_div_change' />
                </div>
                <div>
                  <h2>Trusted Medical Gas Pipeline Specialists</h2>
                  <p id='content-about-us-page'>
                    M.R. Engg. Works Pvt. Ltd. (Formerly M.R. Engineering Works) is one of the leading manufacturers & suppliers of Medical Gas Pipeline System (MGPS). We take special care that Medical Gas Pipeline Systems (MGPS) is a patient's life support and its designing & installation require a precise technical expertise. Thus, continual skill development and innovation is central to our organization. Employing technological expertise in design and development of newer products for critical application we have carved out a special space in the Medical Gas Pipeline Systems (MGPS) industry which has led us to succeed in Indian & Foreign markets.
                  </p>
                </div>
              </div>
          </div>

          <div className='about-us-card'>


           
          </div>
          <Aboutusowl/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
