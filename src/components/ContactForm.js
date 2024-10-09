"use client"
import React, { useState } from 'react';
import '../Styles/ContactForm.css';
import { useRouter } from 'next/navigation';

const ContactForm = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    address: '',
    message: ''
  });
 
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const emailBody = `
        <p>Name: ${formData.name}</p>
        <p>Phone: ${formData.mobile}</p>
        <p>Email: ${formData.email}</p>
        <p>Company: ${formData.company}</p>
        <p>Address: ${formData.address}</p>
        <p>Message: ${formData.message}</p>
      `;
  
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            company: formData.company,
            address: formData.address,
            message: formData.message,
            emailBody: emailBody, // Add the constructed email body
          }),
        });
  
        const result = await response.json();
  
        if (response.ok && result.success) {
          alert('Email sent successfully!');
          setTimeout(() => {
            router.push("/thankyou");
          }, 1000);
        } else {
          alert('Failed to send email. Please try again.');
        }
      } catch (error) {
        alert('An error occurred: ' + error.message);
      }
    }
  };
  

  return (
    <div className='container'>
      <div className='contact-us row'>
        <div className='contact-details col-12 col-md-6 '>
          {/* <p className='contact-details-p text-black'>QUICK SUPPORT –</p> */}
          <h2 className='contact-details-h2 fw-bolder'>Contact Us</h2>
          <div className='contact-s'>
            <div>
              <h4 className='fw-bolder callus' id='call_uss'>Call Us</h4>
              <p className='text-black'> +91-9811610877 </p>
              <p className='text-black'> +91-9810348780 </p>
              <p className='text-black'> +91-9310601480 </p>
            </div>

            <div>
              <h4 className='fw-bolder' id='call_uss'>Email Us</h4>
              <p className='text-black'>virendersingh@mrenggworks.com </p>
              <p className='text-black'> jasvinder@mrenggworks.com</p>
              <p className='text-black'> gaganjyotkaur@mrenggworks.com</p>
            </div>

            <div>
              <h4 className='fw-bolder' id='call_uss'>Our Address</h4>
              <p>8/33 Kirti Nagar, Industrial Area New Delhi -110015</p>
            </div>
          </div>
        </div>
        <div className='contact-form col-12 col-md-6'>
        <div className='contact-form-1'>
            <p className='contact-details-p'>GET IN TOUCH –</p>
            <h2 className='contact-details-h2'>Support Is Online</h2>
            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-row'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                  className='form-input'
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type='email'
                  name='email'
                  required
                  placeholder='Email Id'
                  className='form-input  unique'
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-row'>
                <input
                  type='tel'
                  name='mobile'
                  placeholder='Mobile Number'
                  required
                  className='form-input'
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='company'
                  placeholder='Company Name'
                  required
                  className='form-input unique'
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-row'>
                <input
                  type='text'
                  name='address'
                  placeholder='Address'
                  className='form-input'
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-row'>
                <textarea
                  name='message'
                  placeholder='Message'
                  className='form-input message-input'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button  type='submit' className='submit-button'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
