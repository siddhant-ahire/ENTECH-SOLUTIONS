import React from 'react'

const HomeRequestQuote = () => {
    const backgroundImageStyle3 = {
        backgroundImage: "url('images/bg_2.jpg')"
      };
    
  return (
    <>
        <section className="ftco-intro">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="img" style={backgroundImageStyle3}>
              <div className="overlay"></div>
              <h2>Providing Personalized and High Quality Services</h2>
              <p>We can manage your dream building A small river named Duden flows by their place</p>
              <p class="mb-0"><a href="#" class="btn btn-primary px-4 py-3">Request A Quote</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeRequestQuote