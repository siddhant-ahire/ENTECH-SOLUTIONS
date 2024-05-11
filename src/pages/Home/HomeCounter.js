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
const HomeCounter = () => {
    const backgroundImageStyle4 = {
        backgroundImage: "url('images/about-3.jpg')"
      };
  return (
    <>
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter">
      <div className="img image-overlay" style={backgroundImageStyle4}></div>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-6 py-5 bg-secondary aside-stretch">
            <div className="heading-section heading-section-white p-4 pl-md-0 py-md-5 pr-md-5">
              <span className="subheading">Wilcon A Construction Company</span>
              <h2 className="mb-4">Best Provider for Industrial Services</h2>
              <h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="row">
              <Counter icon="flaticon-engineer" number="48,000" text="Project Completed" />
              <Counter icon="flaticon-worker-1" number="54,900" text="Happy Customers" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeCounter