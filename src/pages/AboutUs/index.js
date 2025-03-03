import React from 'react'
import HomeBlogs from '../Home/HomeBlogs'
import HomeAboutUs from '../Home/HomeAboutUs'
import { Slide } from 'react-awesome-reveal'
import { Container, Row, Col } from 'react-bootstrap'
import useWebsiteStore from '../../store/websiteStore'

const Index = () => {
  const { website } = useWebsiteStore();

  return (
    <>
      <header className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">
            {website?.websiteAboutUs?.website_about_us_title}
          </h1>
          <p className="lead">
            {website?.websiteAboutUs?.website_about_us_description}
          </p>
        </div>
      </header>

      <section className="about py-5">
        <Container>
          <h2 className="text-center mb-4">{website?.websiteAboutUs?.website_about_us_title2}</h2>
          <Row>
            <Col md={6} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <img src={`${process.env.REACT_APP_DOC_URL}${website?.websiteAboutUs?.website_about_us_img}`} className="img-fluid rounded shadow-lg" alt="About Us" crossOrigin='anonymous' />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <Slide direction="right" triggerOnce>
                <p className="text-center mb-3">
                  {website?.websiteAboutUs?.website_about_us_paragraph}
                </p>
              </Slide>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Index
