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

const HomeProjects = () => {
        // Example data array
        const projects = [
            { imageUrl: "/images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
            { imageUrl: "/images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
            { imageUrl: "/images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
            { imageUrl: "/images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
            { imageUrl: "/images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
            { imageUrl: "/images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" }
          ];
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
          {projects.map((project, index) => (
            <Project key={index} imageUrl={project.imageUrl} title={project.title} location={project.location} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeProjects