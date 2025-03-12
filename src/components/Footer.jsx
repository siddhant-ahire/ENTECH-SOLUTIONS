import React from 'react'
import { Link } from 'react-router-dom'
import AllData from "../utils/data.json";
import useWebsiteStore from '../store/websiteStore';

const Footer = () => {
  const { website } = useWebsiteStore();

  return (
    <>
        <footer className="ftco-footer">
      <div className="container mb-5 pb-4">
        <div className="row">
          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2 d-flex align-items-center">About</h2>
              <p>{website?.websiteFooter?.website_footer_title} <br></br> {website?.websiteFooter?.website_footer_title2}</p>
              <ul className="ftco-footer-social list-unstyled mt-4">
                {website?.websiteFooter?.website_footer_twitter && (
                  <li>
                    <a href={website.websiteFooter.website_footer_twitter}>
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                )}

                {website?.websiteFooter?.website_footer_facebook && (
                  <li>
                    <a href={website.websiteFooter.website_footer_facebook}>
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                )}

                {website?.websiteFooter?.website_footer_instagram && (
                  <li>
                    <a href={website.websiteFooter.website_footer_instagram}>
                      <span className="fa fa-instagram"></span>
                    </a>
                  </li>
                )}

                {website?.websiteFooter?.website_footer_youtube && (
                  <li>
                    <a href={website.websiteFooter.website_footer_youtube}>
                      <span className="fa fa-youtube"></span>
                    </a>
                  </li>
                )}

                {website?.websiteFooter?.website_footer_linkedin && (
                  <li>
                    <a href={website.websiteFooter.website_footer_linkedin}>
                      <span className="fa fa-linkedin"></span>
                    </a>
                  </li>
                )}
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
                  <li><Link to="clients"><span className="fa fa-chevron-right mr-2"></span>Clients</Link></li>
                </ul>
                <ul className="list-unstyled ml-md-5">
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
                {Array.isArray(website?.websiteServices) && website?.websiteServices?.map(v => {
                   return <li><a href={`/services/${v?.website_services_title}`}><span className="fa fa-chevron-right mr-2"></span>{v?.website_services_title}</a></li>
                })}
              </ul>
            </div>
          </div>

          <div className="col-lg col-md-6">
            <div className="ftco-footer-widget">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="fa fa-map-marker mr-3"></span><span className="text">{website?.websiteFooter?.website_footer_address}</span></li>
                  <li><a href="#"><span className="fa fa-phone mr-3"></span><span className="text">{website?.websiteFooter?.website_footer_phone_number}</span></a></li>
                  <li><a href="#"><span className="fa fa-paper-plane mr-3"></span><span className="text">{website?.websiteFooter?.website_footer_email} {website?.websiteFooter?.website_footer_email2}</span></a></li>
                  
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
                {website?.websiteFooter?.website_footer_copyright}
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