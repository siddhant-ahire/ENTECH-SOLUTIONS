import React, { useEffect, useState, useRef } from 'react';
import AllData from '../../utils/data.json'
import { Bounce, Slide } from 'react-awesome-reveal';


const index = () => {

  return (
    <>
        <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <span className="subheading">clients</span>
            <h2 className="mb-4">Our Clients</h2>
          </div>
        </div>
        <div className="container mt-4">
      <div className="row">
        {AllData.clients.images.map((client, index) => (
          <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={client.image}>
              <Bounce  >
                <div className="card">
                  <img src={client.image} className="card-img-top rounded" alt={client.name} />
                  {/* <div className="card-body">
                    <h5 className="card-title">{client.name}</h5>
                  </div> */}
                </div>
              </Bounce>
            </div>
        ))}
      </div>
    </div>
      </div>
    </section>
    </>
  )
}

export default index