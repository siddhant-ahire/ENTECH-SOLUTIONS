import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    coverLetter: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData(prevState => ({
        ...prevState,
        resume: files[0]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would send the formData to a server here
    console.log(formData);
    alert('Application Submitted!');
  };

  return (
    <>
    <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-10 heading-section text-center">
          <span className="subheading">Career</span>
          <h2 className="mb-4">Apply for a Position</h2>
        </div>
      </div>
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
          <label htmlFor="position" className="form-label">Position:  &nbsp; &nbsp; </label>

          <Form.Select aria-label="Default select example"
            className="form-select"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select a position</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="product_manager">Product Manager</option>
            <option value="sales">Sales Executive</option>
            <option value="marketing">Marketing Specialist</option>
          </Form.Select>
        </div>
        <div className="mb-3">
          <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
          <textarea
            className="form-control"
            id="coverLetter"
            name="coverLetter"
            rows="3"
            value={formData.coverLetter}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="resume" className="form-label">Resume</label>
          <input
            type="file"
            className="form-control"
            id="resume"
            name="resume"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Application</button>
      </form>
    </div>
  </section>
  </>
  );
};

export default CareerForm;
