"use client"
import React from 'react'
import '../Styles/AboutUs.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Aboutusowl() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <>
                        <div className='container'>
                        <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["desktop"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        >
                    <div className='about-us-card-1 '>
                            <i className='fa-solid fa-hourglass-half about-us-icon'></i>
                            <h2>Established in 1996</h2>
                            <p>
                                The company is now entering its 28th year and is proud of its
                                growth and extended reputation as a major player in the
                                worldwide family of Medical Gas Pipeline installers and users.
                            </p>
                            </div>

                            <div className='about-us-card-1 '>
              <i className='fa-solid fa-earth-americas about-us-icon'></i>
              <h2>Globally Recognised</h2>
              <p>
                We supply 90% of the India market and export to over 75
                countries worldwide. Growth has been structured to meet our
                customers needs both in the India and the expanding overseas
                markets.
              </p>
            </div>

            <div className='about-us-card-1 '>
              <i className='fa-solid fa-trademark about-us-icon'></i>
              <h2>Our Brand</h2>
              <p>
              The M.R. Engg. Works brand is a proudly owned trademark of M.R. Engg. Works Pvt. Ltd. All M.R. Engg. Works products are distinctly marked with this brand name, reflecting our commitment to exceptional design and quality.
              </p>
            </div>
           </Carousel>
       </div>
      
    </>
  )
}

export default Aboutusowl;
