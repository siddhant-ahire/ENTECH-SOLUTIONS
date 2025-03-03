import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useWebsiteStore from "../../store/websiteStore";

const ServiceDetail = () => {
  const { website } = useWebsiteStore();
  const [currentIndex, setCurrentIndex] = useState(0)
  const { id } = useParams();
  const serviceData = website?.websiteServices.filter(card => card.website_services_title === id) || [];

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === serviceData[0].website_services_images.length - 1 ? 0 : prevIndex + 1));
  };
  // Function to go to the next slide

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === serviceData[0].website_services_images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? serviceData[0].website_services_images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    // Auto slide every 3 seconds
    const intervalId = setInterval(nextSlide, 3000);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);}
  }, [currentIndex]); // Dependency array to re-run the effect when currentIndex changes

  useEffect(() => {
    setCurrentIndex(0)
  }, [id])

  return (
    <section className="ftco-section bg-half-light">
      <div className="container">
        <div className="row justify-content-center pb-2">
          <div className="col-md-8 text-center heading-section">
            <span className="subheading">OUR SERVICES
            </span>
            <h2 className="mb-4">We Offer Services
            </h2>
          </div>
        </div>
        {serviceData.length > 0 && (
          <div className="mx-auto text-center heading-section">
            <h3 className="mb-4">{serviceData[0]?.title}</h3>
            <div className="row mt-5">
            <div className="slider-container position-relative col-md-6">
              <img src={ process.env.REACT_APP_DOC_URL + serviceData[0]?.website_services_images[currentIndex]?.url} className="img-fluid slider-image service-images" alt={`Slide ${currentIndex}`} crossOrigin="anonymous" />
              <div onClick={handlePrev} className="btn slider-control prev-button">&#9664;</div>
              <div onClick={handleNext} className="btn slider-control next-button">&#9654;</div>
            </div>
            <p className="w-62 mx-auto col-md-6">{serviceData[0]?.website_services_description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDetail;
