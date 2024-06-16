import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllData from "../../utils/data.json";
import ServiceItem2 from "../../components/ServiceItem2"; // Import if you need this component

const ServiceDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { id } = useParams();
  const serviceData = AllData.services.cards.filter(card => card.path === id) || [];

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === serviceData[0].images.length - 1 ? 0 : prevIndex + 1));
  };
  // Function to go to the next slide

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === serviceData[0].images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? serviceData[0].images.length - 1 : prevIndex - 1));
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
            <span className="subheading">{AllData.homepage.services.small_heading}</span>
            <h2 className="mb-4">{AllData.homepage.services.heading}</h2>
          </div>
        </div>
        {serviceData.length > 0 && (
          <div className="mx-auto text-center heading-section">
            <h3 className="mb-4">{serviceData[0].title}</h3>
            <div className="row mt-5">
            <div className="slider-container position-relative col-md-6">
              <img src={serviceData[0].images[currentIndex]} className="img-fluid slider-image service-images" alt={`Slide ${currentIndex}`} />
              <div onClick={handlePrev} className="btn slider-control prev-button">&#9664;</div>
              <div onClick={handleNext} className="btn slider-control next-button">&#9654;</div>
            </div>
            <p className="w-62 mx-auto col-md-6">{serviceData[0].description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDetail;
