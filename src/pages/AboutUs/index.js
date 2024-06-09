import React from 'react'
import HomeBlogs from '../Home/HomeBlogs'
import HomeAboutUs from '../Home/HomeAboutUs'
import { Slide } from 'react-awesome-reveal'

const index = () => {
  return (
    <>
  <header class="hero bg-primary text-white text-center py-5">
    <div class="container">
      <h1 class="display-4">Welcome to Entech Solutions</h1>
      <p class="lead">A premier engineering design and consultancy firm dedicated to transforming innovative concepts into reality.</p>
    </div>
  </header>

  <section class="about py-5">
    <div class="container">
      <h2 class="text-center mb-4">About Us</h2>
      <p class="text-center">With a rich history of delivering exceptional solutions across various industries, we specialize in providing comprehensive design, engineering, and consultancy services tailored to meet the unique needs of our clients. Our team of experienced engineers and consultants is committed to excellence, leveraging cutting-edge technology and best practices to ensure the highest standards of quality and efficiency.</p>
      <p class="text-center">At Company Name, we believe in fostering collaborative partnerships and delivering sustainable, cost-effective solutions that drive success and growth for our clients. Let us help you shape the future with innovative engineering and visionary consultancy.</p>
    </div>
  </section>


    </>
  )
}

export default index