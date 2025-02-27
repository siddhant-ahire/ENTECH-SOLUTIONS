import React, { useEffect, useState, useRef } from 'react';

// In your component or App.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import AllData from '../utils/data.json'
import { Slide } from 'react-awesome-reveal';



const Header = () => {
    const location = useLocation();
    const pathSegment = location.pathname.split('/').filter(Boolean)[0];
    const pathSegment2 = location.pathname.split('/').filter(Boolean)[1];
    const [showPopover, setShowPopover] = useState(false);
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const target = useRef(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991.98);

    const popover =  (
      <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body className='d-flex justify-content-center'>
        <div className='d-flex flex-wrap'>
          {
            AllData.services.cards.map((v, index) => {
              return <Link className={`m-3 ${pathSegment2 == v.path && 'active'}`}
                to={`/services/${v.path}`}
                style={{ 
                  cursor: 'pointer', 
                  color: `${pathSegment2 == v.path ? 'var(--websitetheme)' : 'initial'}`, 
                  transition: 'color 0.3s ease'
                }}
                onClick={() => setShowPopover(false)}
                onMouseEnter={(e) => e.target.style.color = 'var(--websitetheme)'}
                onMouseLeave={(e) => e.target.style.color = 'initial'}
              >&#x2022; {v.title}</Link>
            })
          }
          </div>
      </Popover.Body>
    </Popover>
    );

    
        // Event handler to close the popover on outside clicks
        const handleClickOutside = (event) => {
            if (target.current && !target.current.contains(event.target)) {
                setShowPopover(false); // Close the popover
            }
        };
    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 991.98);
        };
        if(document &&  document.getElementById('ftco-loader')){
            document.getElementById('ftco-loader').style.display='none'    
            document.addEventListener("click", handleClickOutside, true);
        }

        window.addEventListener('resize', handleResize);
        return () =>{
        if(document &&  document.getElementById('ftco-loader')){
          window.removeEventListener('resize', handleResize);
          document.removeEventListener("click", handleClickOutside, true);
        }
        } 
        
      }, []); // Empty dependency array means this effect runs only once after the initial render
    
      useEffect(() => {
        setOpenMenu(false)
        if(window){
            window.scrollTo(0, 0);
        }
      }, [location])
  return (
    <>
          <div className="py-1 top">
        <div className="container">
          <div className="row">
            <div className="col-sm text-center text-md-left mb-md-0 mb-2 pr-md-4 d-flex topper align-items-center">
              <p className="d-flex mb-0 w-100 align-items-center">
                <Slide triggerOnce direction='left'><span className="fa fa-paper-plane mr-2"></span></Slide>
                <span className="text"><Slide triggerOnce direction='left'>{AllData?.header?.header1?.email}</Slide></span>
              </p>
            </div>
            <div className="col-sm justify-content-center d-flex mb-md-0 mb-2">
              <div className="social-media">
                <p className="mb-0 d-flex">
                <Slide triggerOnce direction='left'><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a></Slide>
                <Slide triggerOnce direction='right'><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a></Slide>
                <Slide triggerOnce direction='up'><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a></Slide>
                <Slide triggerOnce direction='up'><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-youtube"><i className="sr-only">Youtube</i></span></a></Slide>
                {/* <Slide triggerOnce direction='down'><a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a></Slide> */}
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7 d-flex topper align-items-center text-lg-right justify-content-end">
              <p className="mb-0 register-link">
              <Slide triggerOnce direction='right'><Link to={"/contact-us"} className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Inquire Now</Link></Slide>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-1 pb-4 mobile-second-header">
      <div className="container">
        <div className="row d-flex align-items-start align-items-center px-3 px-md-0">
          <div className="col-md-4 d-flex mb-2 mb-md-0">
            <Link className="navbar-brand d-flex align-items-center" to={"/"}>
            <Slide triggerOnce direction='left'><img src="/images/logo-entech3.png" width={120} height={105}/></Slide>
            </Link>
          </div>
          <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="fa fa-map"></span>
            </div>
            <div className="pr-md-4 pl-md-3 pl-3 text">
              <p className="con"><span>Free Call</span> <span><Slide triggerOnce direction='up'>{AllData?.header?.header2?.phone_number}</Slide></span></p>
              <p className="con"></p>
            </div>
          </div>
          <div className="col-md-4 d-flex topper mb-md-0 align-items-center">
            <div className="icon d-flex justify-content-center align-items-center"><span className="fa fa-paper-plane"></span>
            </div>
            <div className="text pl-3 pl-md-3">
              <p className="hr"><span>Our Location</span></p>
              <p className="con"><Slide triggerOnce direction='right'>{AllData?.header?.header2?.location_location}</Slide></p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container d-flex align-items-center">
        <button className="navbar-toggler" type="button" onClick={() => setOpenMenu(!openMenu)}>
          <span className="fa fa-bars" onClick={(e) => {
            
          }}></span> Menu
        </button>
        <Slide triggerOnce direction='up'>
        <Collapse in={openMenu}>
        <div className="navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${!pathSegment && 'active'}`}><Link to={"/"} className="nav-link">Home</Link></li>
            <li className={`nav-item  ${pathSegment == 'about-us' && 'active'}`}><Link to={"about-us"} className="nav-link">About</Link></li>
            {isLargeScreen ? (
                <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            show={showPopover}
            onToggle={(isOpen) => setShowPopover(isOpen)}
            rootClose={true}  // Utilize Bootstrap's root close utility
        >
            <li ref={target} className={`nav-item ${pathSegment == 'services' && 'active'}`}>
                <a href="javascript:void(0)" style={{ cursor: 'pointer' }} className="nav-link" onClick={() => setShowPopover(!showPopover)}>
                    Services
                </a>
            </li>
        </OverlayTrigger>
            ) :(
                <>
                    <li className="nav-item nav-item-services" onClick={() => setOpen(!open)}>
                        <a href="javascript:void(0)" style={{ cursor: 'pointer' }} className="nav-link">Services</a>
                        <Collapse in={open}>
                            <ul style={{listStyleType: 'square'}}>
                            {
                              AllData.services.cards.map((v, index) => {
                                return <li className={`mb-3 ${pathSegment2 == v.path && 'active'}`}><Link to={`/services/${v.path}`}
                                style={{ 
                                  cursor: 'pointer', 
                                  color: `${pathSegment2 == v.path ? 'var(--websitetheme)' : 'gray'}`, 
                                  transition: 'color 0.3s ease'
                                }}
                                // onMouseEnter={(e) => e.target.style.color = 'var(--websitetheme)'}
                                // onMouseLeave={(e) => e.target.style.color = 'initial'}
                                >{v.title}</Link></li>
                              })
                            }
                            </ul>
                        </Collapse>
                    </li>
                </>

            )}
            <li className={`nav-item  ${pathSegment == 'projects' && 'active'}`}><Link to={"projects"} className="nav-link">Projects</Link></li>
            {/* <li className={`nav-item  ${pathSegment == 'blogs' && 'active'}`}><Link to={"blogs"} className="nav-link">Blog</Link></li> */}
            <li className={`nav-item  ${pathSegment == 'clients' && 'active'}`}><Link to={"clients"} className="nav-link">Clients</Link></li>
            <li className={`nav-item  ${pathSegment == 'career' && 'active'}`}><Link to={"career"} className="nav-link">Career</Link></li>

          </ul>
          <Link to={"contact-us"} className="btn-custom" data-toggle="modal" data-target="#exampleModalCenter">Contact Us</Link>
        </div>
        </Collapse>
        </Slide>
      </div>
    </nav>
    <div class="collapse" id="collapseExample">
      <div class="card card-body mt-4 w-50 mx-auto">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
    </div>
    </>
  )
}

export default Header