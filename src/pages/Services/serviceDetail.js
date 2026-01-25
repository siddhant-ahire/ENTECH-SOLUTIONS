import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useWebsiteStore from "../../store/websiteStore";

const ServiceDetail = () => {
  const { website } = useWebsiteStore();
  const [currentIndex, setCurrentIndex] = useState(0)
  const { id } = useParams();
  const [serviceData, setServiceData] = useState([]);

  const handleNext = () => {
    setCurrentIndex(prevIndex => {
      const maxIndex = serviceData[0].website_services_images.length - 1;
      if (prevIndex < 0) return 0; // Ensure it doesn't go negative
      if (prevIndex >= maxIndex) return 0; // Loop back if at the last index
      return prevIndex + 1;
    });
  };
  // Function to go to the next slide

  const nextSlide = () => {
    setCurrentIndex(prevIndex => {
      const maxIndex = serviceData[0]?.website_services_images?.length - 1 || 0;
      if (prevIndex < 0) return 0; // Ensure it doesn't go negative
      if (prevIndex >= maxIndex) return 0; // Loop back if at the last index
      return prevIndex + 1;
    });
  };
  const handlePrev = () => {
    setCurrentIndex(prevIndex => {
      const maxIndex = serviceData[0].website_services_images.length - 1;
      if (prevIndex <= 0) return maxIndex; // Loop back to last image if at the first index
      return prevIndex - 1;
    });
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
    setServiceData(website?.websiteServices.filter(card => card.website_services_title === id) || [])
  }, [id, website])

  return (
    <section className="ftco-section bg-half-light">
        {serviceData.length > 0 && (
          <div className="container">
            <div className="row justify-content-center pb-2">
              <div className="col-md-8 text-center heading-section">
                <span className="subheading">{serviceData[0].website_services_title}
                </span>
                <h2 className="mb-4">{serviceData[0].website_services_title2}
                </h2>
              </div>
            </div>
              <div className="mx-auto text-center heading-section">
                <div className="row mt-5">
                <div className="slider-container position-relative col-md-6">
                  <img src={serviceData[0]?.website_services_images[currentIndex]} className="img-fluid slider-image service-images" alt={`Slide ${currentIndex}`} crossOrigin="anonymous" />
                  <div onClick={handlePrev} className="btn slider-control prev-button">&#9664;</div>
                  <div onClick={handleNext} className="btn slider-control next-button">&#9654;</div>
                </div>
                <p className="w-62 mx-auto col-md-6">{serviceData[0]?.website_services_description}</p>
                </div>
              </div>
          </div>
        )}
    </section>
  );
};

export default ServiceDetail;
