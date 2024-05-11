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

const HomeServices = () => {
  return (
    <>
        <section className="ftco-section bg-half-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <span className="subheading">Our Services</span>
            <h2 className="mb-4">We Offer Services</h2>
          </div>
        </div>
        <div className="row">
          <ServiceItem2 
            backgroundUrl="images/services-1.jpg" 
            icon="flaticon-architect" 
            title="Architecture" 
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <ServiceItem2 
            backgroundUrl="images/services-2.jpg" 
            icon="flaticon-worker" 
            title="Renovation" 
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <ServiceItem2 
            backgroundUrl="images/services-3.jpg" 
            icon="flaticon-hammer" 
            title="Construction" 
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeServices