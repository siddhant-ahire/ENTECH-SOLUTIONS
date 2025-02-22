import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import useWebsiteStore from '../../store/websiteStore';

const HomeCarousel = () => {
  const { website } = useWebsiteStore();
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract image URLs when `website` updates
  useEffect(() => {
    if (website?.website_banner_images) {
      const imageUrls = website.website_banner_images.map(
        (image) => `${process.env.REACT_APP_DOC_URL}${image.url}`
      );
      setImages(imageUrls);
    }
  }, [website]);

  useEffect(() => {
    if (document?.getElementById('ftco-loader')) {
      document.getElementById('ftco-loader').style.display = 'none';
    }
  }, []);

  // Start auto-slide only when images are available
  useEffect(() => {
    if (images.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex(current => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]); // Updated dependency

  const nextImage = () => {
    setCurrentIndex(current => (current + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(current => (current - 1 + images.length) % images.length);
  };

  return (
    <>
      {images.length > 0 && (
        <section className="hero-wrap js-fullheight" data-stellar-background-ratio="0.5">
          <img
            src={images[currentIndex]}
            crossOrigin="anonymous"
            alt="carousel"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1
            }}
          />
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
              <div className="col-lg-6">
                <div className="mt-5">
                  <Slide triggerOnce direction='left'>
                    <h1 className="mb-4">ENTECH SOLUTIONS</h1>
                  </Slide>
                  <Slide triggerOnce direction='up'>
                    <Link to={"services"} className="btn btn-primary mr-2">Our Services</Link>
                  </Slide>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%'
            }}>
              <button onClick={prevImage} className="btn btn-arrow-left" style={{ marginLeft: '10px' }}>
                <i className='fa fa-chevron-left mr-2 text-white'></i>
              </button>
              <button onClick={nextImage} className="btn btn-arrow-right" style={{ marginRight: '10px' }}>
                <i className='fa fa-chevron-right mr-2 text-white'></i>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HomeCarousel;
