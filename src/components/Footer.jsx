import React from 'react'
import { Link } from 'react-router-dom'
import AllData from "../utils/data.json";

const Footer = () => {
  return (
    <>
        <footer className="ftco-footer">
      <div className="container mb-5 pb-4">
        <div className="row">
          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2 d-flex align-items-center">About</h2>
              <p>{AllData.footer.about_text} <br></br> {AllData.footer.about_text2}</p>
              <ul className="ftco-footer-social list-unstyled mt-4">
                <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                <li><a href="#"><span className="fa fa-youtube"></span></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Links</h2>
              <div className="d-flex">
                <ul className="list-unstyled mr-md-4">
                  <li><Link to="projects"><span className="fa fa-chevron-right mr-2"></span>Project</Link></li>
                  <li><Link to="about-us"><span className="fa fa-chevron-right mr-2"></span>About Us</Link></li>
                  <li><Link to="services"><span className="fa fa-chevron-right mr-2"></span>Services</Link></li>
                  <li><Link to="blogs"><span className="fa fa-chevron-right mr-2"></span>Blog Posts</Link></li>
                </ul>
                <ul className="list-unstyled ml-md-5">
                  <li><Link to="clients"><span className="fa fa-chevron-right mr-2"></span>Clients</Link></li>
                  <li><Link to="contact-us"><span className="fa fa-chevron-right mr-2"></span>Contact</Link></li>
                  <li><Link to="career"><span className="fa fa-chevron-right mr-2"></span>Career</Link></li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                {AllData.footer.services.map(v => {
                   return <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>{v}</a></li>
                })}
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="fa fa-map-marker mr-3"></span><span className="text">{AllData.footer.address}</span></li>
                  <li><a href="#"><span className="fa fa-phone mr-3"></span><span className="text">{AllData.footer.phone}</span></a></li>
                  <li><a href="#"><span className="fa fa-paper-plane mr-3"></span><span className="text">{AllData.footer.email} {AllData.footer.email2}</span></a></li>
                  
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
                Copyright &copy;2024 ENTECH SOLUTIONS. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer