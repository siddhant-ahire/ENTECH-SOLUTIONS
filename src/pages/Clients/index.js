import React, { useEffect, useState, useRef } from 'react';


const index = () => {
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
        {clients.map(client => (
          <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={client.id}>
            <div className="card">
              <img src={client.imageUrl} className="card-img-top" alt={client.name} />
              {/* <div className="card-body">
                <h5 className="card-title">{client.name}</h5>
              </div> */}
            </div>
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