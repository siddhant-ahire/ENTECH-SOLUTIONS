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
import AllData from '../../utils/data.json'

const popover =  (
  <Popover id="popover-basic">
  {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
  <Popover.Body className='d-flex justify-content-center'>
    <div>
      {
        AllData.header.services.map((v, index) => {
          return <p className=''>Service........ {index}</p>
        })
      }
      </div>
  </Popover.Body>
</Popover>
);

const HomeHeader = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991.98);
    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 991.98);
        };
    
        window.addEventListener('resize', handleResize);
        return () =>{
          window.removeEventListener('resize', handleResize);
        } 
        
      }, []); // Empty dependency array means this effect runs only once after the initial render
    
  return (
    <>
          <div className="py-1 top">
        <div className="container">
          <div className="row">
            <div className="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
              <p className="mb-0 w-100">
                <span className="fa fa-paper-plane"></span>
                <span className="text">youremail@email.com</span>
              </p>
            </div>
            <div className="col-sm justify-content-center d-flex mb-md-0 mb-2">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                  {/* <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a> */}
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-youtube"><i className="sr-only">Youtube</i></span></a>
                  {/* <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a> */}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
              <p className="mb-0 register-link">
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Inquire Now</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-5 mobile-second-header">
      <div className="container">
        <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
          <div className="col-md-4 d-flex mb-2 mb-md-0">
            <a className="navbar-brand d-flex align-items-center" href="index.html">
            <img src="/images/logo-entech.png" width={130} height={70}/>
            </a>
          </div>
          <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="fa fa-map"></span>
            </div>
            <div className="pr-md-4 pl-md-3 pl-3 text">
              <p className="con"><span>Free Call</span> <span>+1 234 456 78910</span></p>
              <p className="con">Call Us Now 24/7 Customer Support</p>
            </div>
          </div>
          <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
            <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-paper-plane"></span>
            </div>
            <div className="text pl-3 pl-md-3">
              <p className="hr"><span>Our Location</span></p>
              <p className="con">198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container d-flex align-items-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars" onClick={(e) => {
            
          }}></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
            {isLargeScreen ? (

            <OverlayTrigger trigger="click" placement="bottom"  overlay={popover}>
              <li className="nav-item nav-item-services" ><a href="javascript:void(0)" style={{cursor:'pointer'}} className="nav-link">Services</a></li>
            </OverlayTrigger>
            ) :(
              <li className="nav-item nav-item-services">
                <a href="javascript:void(0)" style={{ cursor: 'pointer' }} className="nav-link">Services</a>
              </li>
            )}
            <li className="nav-item"><a href="project.html" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Clients</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Career</a></li>

          </ul>
          <a href="#" className="btn-custom" data-toggle="modal" data-target="#exampleModalCenter">Contact Us</a>
        </div>
      </div>
    </nav>
    {/* <div class="collapse" id="collapseExample">
      <div class="card card-body mt-4 w-50 mx-auto">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div> */}
    </div>
    </>
  )
}

export default HomeHeader