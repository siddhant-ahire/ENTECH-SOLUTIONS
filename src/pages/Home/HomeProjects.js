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


const HomeProjects = () => {
  const { website } = useWebsiteStore();

  return (
    <>
        <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Our Global Work Industries</span>
            <h2 className="mb-4">Latest Projects</h2>
          </div>
        </div>
        <div className="row">
          {Array.isArray(website?.websiteProjects)   && website.websiteProjects?.filter(project => project?.website_projects_show_on_homepage).map((project, index) => (
            <Project 
            key={index} 
            imageUrl={Array.isArray(project?.website_projects_images) && `${project?.website_projects_images[0]}`} 
            title={project?.website_projects_title} 
            location={project?.website_projects_id} 
            imageUrls={Array.isArray(project?.website_projects_images) && project?.website_projects_images.map(image => `${image}`)} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeProjects