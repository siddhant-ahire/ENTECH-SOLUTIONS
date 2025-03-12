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
import useWebsiteStore from '../../store/websiteStore';

const HomeServices = () => {
  const { website } = useWebsiteStore();

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
        {Array.isArray(website?.websiteServices) && website.websiteServices?.filter(service => service?.website_services_show_on_homepage).map((item) => (
          <ServiceItem2 
          backgroundUrl={Array.isArray(item?.website_services_images) && `${process.env.REACT_APP_DOC_URL}${item?.website_services_images[0]?.url}`}
          icon="flaticon-architect" 
          title={item.website_services_title}
          description={item.website_services_description}
          path={item.website_services_title}
        />
        ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeServices