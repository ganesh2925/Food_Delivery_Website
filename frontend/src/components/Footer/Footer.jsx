import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, perspiciatis fugiat blanditiis sapiente quia quod, quasi iusto molestias voluptatem aspernatur ratione assumenda, quisquam odit accusamus officia? Magnam in sequi aliquam!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#menu">Delivery</a></li>
            <li><a href="#contact">Privacy policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li><a href="tel:+919392829327">Click here to Phone call</a></li>
            <li><a aria-label="Chat on WhatsApp" href="https://wa.me/+919392829327">Click here to Chat on WhatsApp</a></li>
            <li><a href="mailto:ganeshkumili18@gmail.com">Click here to Send email</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright © 2024. All Rights Reserved | Powered by <b>KUMILI GANESH</b></p>
    </div>
  );
}

export default Footer;