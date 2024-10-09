import React from "react";
import "../Styles/Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container pt-4">
      <div className="container">
        <div className="row">
          <div className="footer-1 col-12 col-md-6 col-lg-4">
            <h4 className="fw-bolder contact text-white">Contact Us</h4>
            <div className="d-flex">
              <div id="icons-footer1">
                <Link
                  href="https://www.instagram.com/mr_engg_works_pvt_ltd?igsh=MThhYmdmaHBlcmtsOA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-instagram"></i>
                </Link>
              </div>
              <div id="icons-footer2">
                <Link
                  href="https://www.facebook.com/profile.php?id=61564068751410&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </Link>
              </div>
              <div id="icons-footer3">
                <Link
                  href="https://www.linkedin.com/company/mr-engg-works-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="fw-bolder callus text-white">
                <i className="fa-solid fa-phone text-white"></i> Call Us
              </h4>
              <p>
                <a href="tel:+919811610877" className="text-white  text-decoration-none">
                  +91-9811610877
                </a>
              </p>

              <p>
                <a href="tel:+919810348780" className="text-white  text-decoration-none">
                  +91-9810348780
                </a>
              </p>
              <p>
                <a href="tel:+919310601480" className="text-white  text-decoration-none">
                  +91-9310601480
                </a>
              </p>
            </div>

            <h4 className="fw-bolder text-white">
              {" "}
              <i className="fa-solid fa-envelope text-white"></i> Email Us
            </h4>

            <p>
  <a href="mailto:virendersingh@mrenggworks.com" className="text-white   text-decoration-none">
    virendersingh@mrenggworks.com
  </a>
</p>
<p>
  <a href="mailto:jasvinder@mrenggworks.com" className="text-white  text-decoration-none">
    jasvinder@mrenggworks.com
  </a>
</p>
<p>
  <a href="mailto:gaganjyotkaur@mrenggworks.com" className="text-white  text-decoration-none">
    gaganjyotkaur@mrenggworks.com
  </a>
</p>

            <h4 className="fw-bolder text-white ">
              <i className="fa-solid fa-location-dot text-white"></i> Our
              Address
            </h4>
            <p className="text-white">
              8/33, R.J.H Complex, 3rd Floor, Block-B, Kirti Nagar Industrial
              Area, New Delhi-110015
            </p>
          </div>

          <div className="footer-2 col-12 col-md-6 col-lg-4">
            <h4 className="fw-bolder working text-white">Working Hours</h4>
            <p>Monday ——— 9.30 AM – 7.00 PM</p>
            <p>Tuesday ——— 9.30 AM – 7.00 PM</p>
            <p>Wednesday —– 9.30 AM – 7.00 PM</p>
            <p>Thursday —— 9.30 AM – 7.00 PM</p>
            <p>Friday ———— 9.30 AM – 7.00 PM</p>
            <p>Saturday —— 9.30 AM – 7.00 PM</p>
            <p>Sunday ——— Closed</p>
          </div>

          <div className="footer-3 col-12 col-md-6 col-lg-4">
            <h4 className="fw-bolder text-white">Find Us Here</h4>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14005.390377580614!2d77.13561854959873!3d28.64930918276825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d028a792de867%3A0xff6211369d4a8c23!2sM.R.Engg%20Works%20Pvt%20Ltd%2C%20RJH%20Complex%20%2C%208%2F33%20%2C%203RD%20FLOOR%20%2C%20NEAR%20UNDER%20PASS%20KIRTI%20NAGAR%20INDUSTRIAL%20AREA%20NEW%20DELHI%2C%20New%2C%20Delhi%2C%20110015!3m2!1d28.647588!2d77.144921!5e0!3m2!1sen!2sin!4v1725450153685!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
              width="100%"
              height="90%"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <hr className="border" />

      <div className="container  kanak ">
        <p className=" text-white text-start kanak_first">
          {" "}
          2024 M.R. Engg. Works. All rights reserved
        </p>
        <p className=" text-white kanak_second">
          {" "}
          Designed and Developed by{" "}
          <span className="text-danger">
            {" "}
            <Link
              className="text-decoration-underlined text-white"
              href="https://kanakdrishtiinfo.com/"
              target="blank"
            >
              Kanak Drishti Infotech
            </Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
