import React, { useEffect, useState, useRef } from 'react';
import ServiceItem from '../../components/ServiceItem';
import ServiceItem2 from '../../components/ServiceItem2';
import Counter from '../../components/Counter';
import Project from '../../components/Project';
// In your component or App.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialItem from '../../components/TestimonialItem';
import Slider from 'react-slick';
import BlogEntry from '../../components/BlogEntry';
import CustomSlider from '../../components/CustomSlider';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import HomeHeader from './HomeHeader';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
    const images = [
        "images/bg_1.jpg",
        "images/bg_2.jpg",
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        document.getElementById('ftco-loader').style.display='none'
        const intervalId = setInterval(() => {
          setCurrentIndex(current => (current + 1) % images.length);
        }, 5000); // Change image every 5000 ms (5 seconds)
    
        return () =>{
          clearInterval(intervalId); // Cleanup interval on component unmount
        } 
        
      }, []); // Empty dependency array means this effect runs only once after the initial render
      const backgroundImageStyle = {
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      };
      const nextImage = () => {
        setCurrentIndex(current => (current + 1) % images.length);
      };
    
      const prevImage = () => {
        setCurrentIndex(current => (current - 1 + images.length) % images.length);
      };
    
  return (
    <>
        <section className="hero-wrap js-fullheight" style={backgroundImageStyle} data-stellar-background-ratio="0.5">
  <div className="overlay"></div>
  <div className="container">
    <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
      <div className="col-lg-6">
        <div className="mt-5">
          <h1 className="mb-4">We Build <br/>Great Projects</h1>
          <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
          <p>
            <Link to={"services"}  className="btn btn-primary mr-2">Our Services</Link>
            {/* <a href="#" className="btn btn-white" data-toggle="modal" data-target="#exampleModalCenter">Request A Quote</a> */}
          </p>
        </div>
      </div>
    </div>
    {/* New div for buttons with flex styles */}
    <div style={{
      position: 'absolute', 
      top: '50%', 
      left: 0, 
      right: 0, 
      display: 'flex', 
      justifyContent: 'space-between', 
      width: '100%'
    }}>
      <button onClick={prevImage} className="btn btn-arrow-left" style={{ marginLeft: '10px' }}><i className='fa fa-chevron-left mr-2 text-white'></i></button>
      <button onClick={nextImage} className="btn btn-arrow-right" style={{ marginRight: '10px' }}><i className='fa fa-chevron-right mr-2 text-white'></i></button>
    </div>
  </div>
</section>
    </>
  )
}

export default HomeCarousel