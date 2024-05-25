import React from "react";
import { useParams } from "react-router-dom";
import AllData from "../../utils/data.json"
import ServiceItem2 from "../../components/ServiceItem2";
const ServiceDetail = () => {
  const { id } = useParams();
  const serviceData = AllData.services.cards.filter(card => card.path == id) || [];

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
        <img className="w-50" src={serviceData[0].image} />
        <p className="w-50 mx-auto mt-5">{serviceData[0].description}</p>
      </div>
      )}
    </div>
  </section>
  );
};

export default ServiceDetail;