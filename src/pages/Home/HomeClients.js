import React from 'react';
import Slider from 'react-slick';
import AllData from '../../utils/data.json'

const Index = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="ftco-section bg-light pt-5">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <span className="subheading">Clients</span>
            <h2 className="mb-4">Our Clients</h2>
          </div>
        </div>
        <div className="">
          <Slider {...settings}>
          {AllData.homepage.clients.images.map(client => (
              <div key={client.image}>
                <div className="card ml-4 mr-4">
                  <img src={client.image} className="card-img-top rounded" alt={client.name} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Index;
