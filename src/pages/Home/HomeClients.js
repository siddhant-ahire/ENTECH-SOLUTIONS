import React from 'react';
import Slider from 'react-slick';

const Index = () => {
  const clients = [
    { id: 1, name: 'Client 1', imageUrl: 'images/logo-entech2.png' },
    { id: 2, name: 'Client 2', imageUrl: 'images/logo-entech2.png' },
    { id: 3, name: 'Client 3', imageUrl: 'images/logo-entech2.png' },
    { id: 4, name: 'Client 3', imageUrl: 'images/logo-entech2.png' },
    { id: 5, name: 'Client 3', imageUrl: 'images/logo-entech2.png' },
    { id: 6, name: 'Client 3', imageUrl: 'images/logo-entech2.png' },
    { id: 7, name: 'Client 3', imageUrl: 'images/logo-entech2.png' },
    { id: 8, name: 'Client 3', imageUrl: 'images/logo-entech2.png' },
    { id: 9, name: 'Client 3', imageUrl: 'images/logo-entech2.png' },
    // Add more clients as needed
  ];

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
            {clients.map(client => (
              <div key={client.id}>
                <div className="card">
                  <img src={client.imageUrl} className="card-img-top" alt={client.name} />
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
