import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For now, just log data to the console.
    // Here you would typically send the data to a server or email service.
  };

  return (
    <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-2">
        <div className="col-md-8 text-center heading-section">
          <span className="subheading">Contact</span>
          <h2 className="mb-4">Contact Us</h2>
        </div>
      </div>
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <div id="map-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60363.134342313366!2d73.07315729281333!3d18.98903315420793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e83e1f23f23d%3A0xe3a106c431e3fd0a!2sPanvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719431580581!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default ContactUs;
