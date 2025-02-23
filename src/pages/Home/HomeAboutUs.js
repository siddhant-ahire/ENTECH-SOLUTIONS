import React, { useEffect, useState, useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Slide } from 'react-awesome-reveal';
import useWebsiteStore from '../../store/websiteStore';

const HomeAboutUs = () => {
  const { website } = useWebsiteStore();
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let isActive = true;
    const videoElement = videoRef.current;

    if (showModal && videoElement) {
      videoElement.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }

    return () => {
      isActive = false;
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };
  }, [showModal]);

  return (
    <section className="ftco-section" id="about-section">
      <div className="container">
        <div className="row">
          <Slide triggerOnce direction="left" className="col-md-6 d-flex">
            <div className="img w-100 about-bg-image">
              {/* Replace backgroundImage with an <img> tag */}
              <img
                src={`${process.env.REACT_APP_DOC_URL}${website?.website_banner_about_us_img}`}
                alt="About Us"
                className="img-fluid"
                style={{ width: '100%', height: 'auto' }}
                crossOrigin='anonymous'
              />
            </div>
          </Slide>
          <div className="col-md-6 py-5 pl-md-5">
            <div className="row justify-content-center mb-4 pt-md-4">
              <div className="col-md-12 heading-section">
                <Slide triggerOnce direction="right">
                  <span className="subheading">{website?.website_banner_about_us_title}</span>
                  <h2 className="mb-4">{website?.website_banner_about_us_title2}</h2>
                  <p>
                    {website?.website_banner_about_us_pargraph}
                  </p>
                </Slide>
              </div>
            </div>

            {showModal && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <video ref={videoRef} width="100%" controls>
                    <source src="video/how-we-work.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button className="close-button" onClick={closeModal}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;