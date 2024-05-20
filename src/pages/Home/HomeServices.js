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
import AllData from '../../utils/data.json'

const HomeServices = () => {
  return (
    <>
        <section className="ftco-section bg-half-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <span className="subheading">{AllData.homepage.services.small_heading}</span>
            <h2 className="mb-4">{AllData.homepage.services.heading}</h2>
          </div>
        </div>
        <div className="row">
        {AllData.homepage.services.cards.map((item) => (
          <ServiceItem2 
          backgroundUrl={item.image}
          icon="flaticon-architect" 
          title={item.title}
          description={item.description}
        />
        ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeServices