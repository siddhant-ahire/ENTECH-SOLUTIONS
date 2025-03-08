import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ website_contact_name: '', website_contact_email: '', website_contact_message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};

    if (!formData.website_contact_name.trim()) tempErrors.website_contact_name = 'Name is required';
    if (!formData.website_contact_email.trim()) tempErrors.website_contact_email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.website_contact_email))
      tempErrors.website_contact_email = 'Invalid website_contact_email format';
    if (!formData.website_contact_message.trim()) tempErrors.website_contact_message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/website-contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message Sent!');
        setFormData({ website_contact_name: '', website_contact_email: '', website_contact_message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      alert('Error submitting form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="website_contact_name" className="form-label">Name</label>
            <input type="text" className="form-control" id="website_contact_name" name="website_contact_name" value={formData.website_contact_name} onChange={handleChange} />
            {errors.website_contact_name && <p className="text-danger">{errors.website_contact_name}</p>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="website_contact_email" className="form-label">Email</label>
            <input type="website_contact_email" className="form-control" id="website_contact_email" name="website_contact_email" value={formData.website_contact_email} onChange={handleChange} />
            {errors.website_contact_email && <p className="text-danger">{errors.website_contact_email}</p>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="website_contact_message" className="form-label">Message</label>
            <textarea className="form-control" id="website_contact_message" name="website_contact_message" rows="3" value={formData.website_contact_message} onChange={handleChange}></textarea>
            {errors.website_contact_message && <p className="text-danger">{errors.website_contact_message}</p>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
