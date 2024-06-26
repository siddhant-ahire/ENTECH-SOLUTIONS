import React from 'react'
import HomeBlogs from '../Home/HomeBlogs'
import HomeAboutUs from '../Home/HomeAboutUs'
import { Slide } from 'react-awesome-reveal'
import { Container, Row, Col } from 'react-bootstrap'

const Index = () => {
  return (
    <>
      <header className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Entech Solutions</h1>
          <p className="lead">A premier engineering design and consultancy firm dedicated to transforming innovative concepts into reality.</p>
        </div>
      </header>

      <section className="about py-5">
        <Container>
          <h2 className="text-center mb-4">About Us</h2>
          <Row>
            <Col md={6} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <img src="/images/about-1.png" className="img-fluid rounded shadow-lg" alt="About Us" />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              <Slide direction="right" triggerOnce>
                <p className="text-center mb-3">With a rich history of delivering exceptional solutions across various industries, we specialize in providing comprehensive design, engineering, and consultancy services tailored to meet the unique needs of our clients. Our team of experienced engineers and consultants is committed to excellence, leveraging cutting-edge technology and best practices to ensure the highest standards of quality and efficiency.</p>
                <p className="text-center">At Entech Solutions, we believe in fostering collaborative partnerships and delivering sustainable, cost-effective solutions that drive success and growth for our clients. Let us help you shape the future with innovative engineering and visionary consultancy.</p>
              </Slide>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Index
