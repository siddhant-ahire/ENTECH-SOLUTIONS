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

const HomeBlogs = () => {
    const blogs = [
        { imageUrl: 'images/image_1.jpg', date: 'Sept. 06, 2020', author: 'Admin', comments: '3', title: 'Best for any industrial & business solution', link: 'blog-single.html', readMoreLink: 'blog.html' },
        { imageUrl: 'images/image_2.jpg', date: 'Sept. 06, 2020', author: 'Admin', comments: '3', title: 'Best for any industrial & business solution', link: 'blog-single.html', readMoreLink: 'blog.html' },
        { imageUrl: 'images/image_3.jpg', date: 'Sept. 06, 2020', author: 'Admin', comments: '3', title: 'Best for any industrial & business solution', link: 'blog-single.html', readMoreLink: 'blog.html' },
        // Add more blog entries as needed
      ];
  return (
    <>
        <section className="ftco-section bg-light pb-0">
      <div className="container">
        <div className="row justify-content-center pb-3">
          <div className="col-md-10 heading-section text-center">
            <span className="subheading">Our Blog</span>
            <h2 className="mb-4">Latest Blog Updates</h2>
          </div>
        </div>
        <div className="row d-flex">
          {blogs.map((blog, index) => (
            <BlogEntry key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeBlogs