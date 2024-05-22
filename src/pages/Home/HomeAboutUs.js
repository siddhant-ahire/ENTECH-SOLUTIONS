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
import { Slide } from 'react-awesome-reveal';

const HomeAboutUs = () => {
    const [showModal, setShowModal] = useState(false);
    const videoRef = useRef(null); // Using useRef to reference the video element
    const backgroundImageStyle2 = {
        backgroundImage: "url('images/about-1.png')",
        backgroundSize: 'contain', // or specify a size like '50%' or '100px'
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };
    
      const videoBackgroundImageStyle2 = {
        backgroundImage: "url('images/about-2.jpg')"
      };
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    useEffect(() => {
      let isActive = true; // Flag to check component's mounted state
      const videoElement = videoRef.current;
    
      if (showModal && videoElement) {
        videoElement.play().then(() => {
          if (!isActive) {
            videoElement.pause();
          }
        }).catch(error => {
          console.error("Error attempting to play video:", error);
        });
      }
    
      return () => {
        isActive = false; // Update flag on cleanup
        if (videoElement) {
          videoElement.pause();
          videoElement.currentTime = 0;
        }
      };
    }, [showModal]);
  return (
    <>
        <section className="ftco-section" id="about-section">
      <div className="container">
        <div className="row">
          <Slide triggerOnce direction={"Left"} className="col-md-6 d-flex " >
            <div className="img w-100 about-bg-image" style={backgroundImageStyle2}>
              {/* <div className="icon d-flex align-items-center justify-content-center"> */}
                {/* <span className="flaticon-crane"></span> */}
              {/* </div> */}
            </div>
            </Slide>
          <div className="col-md-6 py-5 pl-md-5">
          <div className="row justify-content-center mb-4 pt-md-4">
            <div className="col-md-12 heading-section">
              <span className="subheading"><Slide triggerOnce direction='right'>Welcome to Entech Solutions</Slide></span>
              <h2 className="mb-4"><Slide triggerOnce direction='right'>What we do?</Slide></h2>
              <div className="d-flex about">
                <div className="icon"><span className="flaticon-hammer"></span></div>
                <h3><Slide triggerOnce direction='up'>We're in this business since 1975 and We provide the best industrial services</Slide></h3>
              </div>
              <p><Slide triggerOnce direction='right'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Slide></p>
              <div className="d-flex video-image align-items-center mt-md-4">
                <a  href="javascript:void(0)" className="video img d-flex align-items-center justify-content-center" onClick={openModal} style={videoBackgroundImageStyle2}>
                  <span className="fa fa-play-circle"></span>
                </a>
                <h4 className="ml-4"><Slide triggerOnce direction='down'>This is how we work on our clients, Watch video</Slide></h4>
              </div>
            </div>
          </div>

          {showModal && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 10 }}>
              <div style={{ width: '80%', position: 'fixed', top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
                <video ref={videoRef} width="100%" controls>
                  <source src="video/how-we-work.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</button>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeAboutUs