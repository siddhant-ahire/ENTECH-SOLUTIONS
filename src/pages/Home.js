import React, { useEffect, useState, useRef } from 'react';
import ServiceItem from '../components/ServiceItem';
import ServiceItem2 from '../components/ServiceItem2';
import Counter from '../components/Counter';
import Project from '../components/Project';
// In your component or App.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TestimonialItem from '../components/TestimonialItem';
import Slider from 'react-slick';
import BlogEntry from '../components/BlogEntry';
import CustomSlider from '../components/CustomSlider';


const Home = () => {
  const images = [
    "images/bg_1.jpg",
    "images/bg_2.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    document.getElementById('ftco-loader').style.display='none'
    const intervalId = setInterval(() => {
      setCurrentIndex(current => (current + 1) % images.length);
    }, 5000); // Change image every 5000 ms (5 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };
  const nextImage = () => {
    setCurrentIndex(current => (current + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(current => (current - 1 + images.length) % images.length);
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null); // Using useRef to reference the video element

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let isActive = true; // Flag to check component's mounted state
    const videoElement = videoRef.current;
  
    if (showModal && videoElement) {
      videoElement.play().then(() => {
        if (!isActive) {
          videoElement.pause();
        }
      }).catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  
    return () => {
      isActive = false; // Update flag on cleanup
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    };
  }, [showModal]);
  const backgroundImageStyle2 = {
    backgroundImage: "url('images/about.jpg')"
  };

  const videoBackgroundImageStyle2 = {
    backgroundImage: "url('images/about-2.jpg')"
  };
  const backgroundImageStyle3 = {
    backgroundImage: "url('images/bg_2.jpg')"
  };

  const backgroundImageStyle4 = {
    backgroundImage: "url('images/about-3.jpg')"
  };

    // Example data array
    const projects = [
      { imageUrl: "images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
      { imageUrl: "images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
      { imageUrl: "images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
      { imageUrl: "images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
      { imageUrl: "images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" },
      { imageUrl: "images/project-1.jpg", title: "Building A Condominium", location: "San Francisco, California, USA" }
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    const testimonials = [
      { imageUrl: "images/person_1.jpg", quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.", name: "Jeff Freshman", position: "Guest" },
      { imageUrl: "images/person_2.jpg", quote: "Far far away, behind the word sdfsdf, far from the sdfsdfsdf Vokalia and Consonantia, there live the blind texts.", name: "Jeff Freshman", position: "Guest" },
      // Add more testimonials as needed
    ];
    const blogs = [
      { imageUrl: 'images/image_1.jpg', date: 'Sept. 06, 2020', author: 'Admin', comments: '3', title: 'Best for any industrial & business solution', link: 'blog-single.html', readMoreLink: 'blog.html' },
      { imageUrl: 'images/image_2.jpg', date: 'Sept. 06, 2020', author: 'Admin', comments: '3', title: 'Best for any industrial & business solution', link: 'blog-single.html', readMoreLink: 'blog.html' },
      { imageUrl: 'images/image_3.jpg', date: 'Sept. 06, 2020', author: 'Admin', comments: '3', title: 'Best for any industrial & business solution', link: 'blog-single.html', readMoreLink: 'blog.html' },
      // Add more blog entries as needed
    ];
    const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="py-1 top">
        <div className="container">
          <div className="row">
            <div className="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
              <p className="mb-0 w-100">
                <span className="fa fa-paper-plane"></span>
                <span className="text">youremail@email.com</span>
              </p>
            </div>
            <div className="col-sm justify-content-center d-flex mb-md-0 mb-2">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
              <p className="mb-0 register-link">
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Inquire Now</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-5 mobile-second-header">
      <div className="container">
        <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
          <div className="col-md-4 d-flex mb-2 mb-md-0">
            <a className="navbar-brand d-flex align-items-center" href="index.html">
            <img src="images/logo-entech.png" width={130} height={70}/>
            </a>
          </div>
          <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="fa fa-map"></span>
            </div>
            <div className="pr-md-4 pl-md-3 pl-3 text">
              <p className="con"><span>Free Call</span> <span>+1 234 456 78910</span></p>
              <p className="con">Call Us Now 24/7 Customer Support</p>
            </div>
          </div>
          <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
            <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-paper-plane"></span>
            </div>
            <div className="text pl-3 pl-md-3">
              <p className="hr"><span>Our Location</span></p>
              <p className="con">198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container d-flex align-items-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars" onClick={(e) => {
            
          }}></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
            <li className="nav-item" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover" ><a href="javascript:void(0)" style={{cursor:'pointer'}} className="nav-link">Services</a></li>
            <li className="nav-item"><a href="project.html" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Clients</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Career</a></li>

          </ul>
          <a href="#" className="btn-custom" data-toggle="modal" data-target="#exampleModalCenter">Contact Us</a>
        </div>
      </div>
    </nav>
    </div>
    <section className="hero-wrap js-fullheight" style={backgroundImageStyle} data-stellar-background-ratio="0.5">
  <div className="overlay"></div>
  <div className="container">
    <div className="row no-gutters slider-text js-fullheight align-items-center" data-scrollax-parent="true">
      <div className="col-lg-6">
        <div className="mt-5">
          <h1 className="mb-4">We Build <br/>Great Projects</h1>
          <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
          <p>
            <a href="#" className="btn btn-primary mr-2">Our Services</a>
            <a href="#" className="btn btn-white" data-toggle="modal" data-target="#exampleModalCenter">Request A Quote</a>
          </p>
        </div>
      </div>
    </div>
    {/* New div for buttons with flex styles */}
    <div style={{
      position: 'absolute', 
      top: '50%', 
      left: 0, 
      right: 0, 
      display: 'flex', 
      justifyContent: 'space-between', 
      width: '100%'
    }}>
      <button onClick={prevImage} className="btn btn-arrow-left" style={{ marginLeft: '10px' }}><i className='fa fa-chevron-left mr-2 text-white'></i></button>
      <button onClick={nextImage} className="btn btn-arrow-right" style={{ marginRight: '10px' }}><i className='fa fa-chevron-right mr-2 text-white'></i></button>
    </div>
  </div>
</section>
    <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
      <div className="container mobile-highlight-points">
        <div className="row no-gutters d-flex">
          <ServiceItem 
            icon="flaticon-engineer-1" 
            title="Quality Construction" 
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
          <ServiceItem 
            icon="flaticon-worker-1" 
            title="Professional Liability" 
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
          <ServiceItem 
            icon="flaticon-engineer" 
            title="Dedicated To Our Clients" 
            description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
          />
        </div>
      </div>
    </section>
    <section className="ftco-section" id="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="about-wrap img w-100" style={backgroundImageStyle2}>
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-crane"></span>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-5 pl-md-5">
          <div className="row justify-content-center mb-4 pt-md-4">
            <div className="col-md-12 heading-section">
              <span className="subheading">Welcome to Wilcon</span>
              <h2 className="mb-4">Wilcon A Construction Company</h2>
              <div className="d-flex about">
                <div className="icon"><span className="flaticon-hammer"></span></div>
                <h3>We're in this business since 1975 and We provide the best industrial services</h3>
              </div>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="d-flex video-image align-items-center mt-md-4">
                <a  href="javascript:void(0)" className="video img d-flex align-items-center justify-content-center" onClick={openModal} style={videoBackgroundImageStyle2}>
                  <span className="fa fa-play-circle"></span>
                </a>
                <h4 className="ml-4">This is how we work on our clients, Watch video</h4>
              </div>
            </div>
          </div>

          {showModal && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 10 }}>
              <div style={{ width: '80%', position: 'fixed', top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
                <video ref={videoRef} width="100%" controls>
                  <source src="video/how-we-work.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>Close</button>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
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
    <section className="ftco-section bg-half-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <span className="subheading">Our Services</span>
            <h2 className="mb-4">We Offer Services</h2>
          </div>
        </div>
        <div className="row">
          <ServiceItem2 
            backgroundUrl="images/services-1.jpg" 
            icon="flaticon-architect" 
            title="Architecture" 
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <ServiceItem2 
            backgroundUrl="images/services-2.jpg" 
            icon="flaticon-worker" 
            title="Renovation" 
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <ServiceItem2 
            backgroundUrl="images/services-3.jpg" 
            icon="flaticon-hammer" 
            title="Construction" 
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter">
      <div className="img image-overlay" style={backgroundImageStyle4}></div>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-6 py-5 bg-secondary aside-stretch">
            <div className="heading-section heading-section-white p-4 pl-md-0 py-md-5 pr-md-5">
              <span className="subheading">Wilcon A Construction Company</span>
              <h2 className="mb-4">Best Provider for Industrial Services</h2>
              <h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="row">
              <Counter icon="flaticon-engineer" number="48,000" text="Project Completed" />
              <Counter icon="flaticon-worker-1" number="54,900" text="Happy Customers" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Our Global Work Industries</span>
            <h2 className="mb-4">Latest Projects</h2>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <Project key={index} imageUrl={project.imageUrl} title={project.title} location={project.location} />
          ))}
        </div>
      </div>
    </section>
    <section className="ftco-section ftco-no-pt ftco-no-pb testimony-section img">
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 p-4 pl-md-0 py-md-5 pr-md-5 aside-stretch d-flex align-items-center">
            <div className="heading-section heading-section-white">
              <span className="subheading" style={{ color: "#fff" }}>Read Testimonials</span>
              <h2 className="mb-4" style={{ fontSize: "50px" }}>It's always a joy to hear that the work we do has positively reviews</h2>
            </div>
          </div>
          <div className="col-md-6 pl-md-5 py-4 py-md-5 aside-stretch-right">
            {/* <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <TestimonialItem key={index} {...testimonial} />
              ))}
            </Slider> */}
            <CustomSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-10 heading-section text-center">
            <span className="subheading">Our Blog</span>
            <h2 className="mb-4">Latest Blog Updates</h2>
          </div>
        </div>
        <div className="row d-flex">
          {blogs.map((blog, index) => (
            <BlogEntry key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
    <footer className="ftco-footer">
      <div className="container mb-5 pb-4">
        <div className="row">
          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2 d-flex align-items-center">About</h2>
              <p>Far far away, behind the word mountains, far from the countries.</p>
              <ul className="ftco-footer-social list-unstyled mt-4">
                <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                <li><a href="#"><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Links</h2>
              <div className="d-flex">
                <ul className="list-unstyled mr-md-4">
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Project</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>About Us</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Services</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Blog Posts</a></li>
                </ul>
                <ul className="list-unstyled ml-md-5">
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Clients</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
                  <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Career</a></li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Customer Services</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Prompt Delivery</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Reliable Equipment</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>New Heavy Equipment</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="fa fa-map-marker mr-3"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                  <li><a href="#"><span className="fa fa-phone mr-3"></span><span className="text">+2 392 3929 210</span></a></li>
                  <li><a href="#"><span className="fa fa-paper-plane mr-3"></span><span className="text">info@yourdomain.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aside-stretch py-3">
              <p className="mb-0">
                Copyright &copy;{currentYear} ENTECH SOLUTIONS. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;
