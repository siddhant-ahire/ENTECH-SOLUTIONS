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
import HomeTestimonials from './HomeTestimonials';
import HomeBlogs from './HomeBlogs';


const Home = () => {

  return (
    <div>
        <HomeCarousel/>
        <HomeHighlights/>
        <HomeAboutUs/>
        <HomeRequestQuote/>
        <HomeServices/>
        <HomeCounter/>
        <HomeProjects/>
        <HomeTestimonials/>
        <HomeBlogs/>
    </div>
  );
};

export default Home;
