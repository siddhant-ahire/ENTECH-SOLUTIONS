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
import HomeCarousel from './HomeCarousel';
import HomeHighlights from './HomeHighlights';
import HomeAboutUs from './HomeAboutUs';
import HomeRequestQuote from './HomeRequestQuote';
import HomeServices from './HomeServices';
import HomeCounter from './HomeCounter';
import HomeProjects from './HomeProjects';
const HomeTestimonials = () => {
    const testimonials = [
        { imageUrl: "images/person_1.jpg", quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", name: "Jeff Freshman", position: "Guest" },
        { imageUrl: "images/person_2.jpg", quote: "Far far away, behind the word sdfsdf, far from the sdfsdfsdf Vokalia and Consonantia, there live the blind texts.", name: "Jeff Freshman", position: "Guest" },
        // Add more testimonials as needed
      ];
  return (
    <>
        <section className="ftco-section ftco-no-pt ftco-no-pb testimony-section img">
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 p-4 pl-md-0 py-md-5 pr-md-5 aside-stretch d-flex align-items-center">
            <div className="heading-section heading-section-white">
              <span className="subheading" style={{ color: "#fff" }}>Read Testimonials</span>
              <h2 className="mb-4" style={{ fontSize: "50px" }}>It's always a joy to hear that the work we do has positively reviews</h2>
            </div>
          </div>
          <div className="col-md-6 pl-md-5 py-4 py-md-5 aside-stretch-right">
            {/* <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem key={index} {...testimonial} />
              ))}
            </Slider> */}
            <CustomSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeTestimonials