import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format.";

    if (!formData.position) newErrors.position = "Please select a position.";
    if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required.";

    if (!formData.resume) {
      newErrors.resume = "Resume is required.";
    } else {
      const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes

      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = "Only PDF or DOCX files are allowed.";
      } else if (formData.resume.size > maxSize) {
        newErrors.resume = "File size must be under 2MB.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on input change

    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    const formDataObj = {};
    formDataObj.website_careers_name = formData.name;
    formDataObj.website_careers_email = formData.email;
    formDataObj.website_careers_position = formData.position;
    formDataObj.website_careers_description = formData.coverLetter;

    if (formData.resume) {
      try {
      const s3Signature = await fetch(process.env.REACT_APP_API_URL + "/api/v1/upload/generate-s3-signin-public-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: formData.resume.name,
          fileType: formData.resume.type,
          fileSize: formData.resume.size,
          folderPath: "entech_solutions/public/resumes",
        }),
      });

      s3Signature.json().then(async (res) => {

        const uploadResponse = await fetch(res?.data, {
          method: "PUT",
          headers: {
            "Content-Type": formData.resume.type,
          },
          body: formData.resume,
        });
  
        if (!uploadResponse.ok) {
          throw new Error("Failed to upload file to S3");
        }
        //remove query params from data?.data url
        const imageURL = res?.data.split("?")[0];
  
  
        formDataObj.website_careers_resume = imageURL;
        const response = await fetch(process.env.REACT_APP_API_URL + "/api/v1/website-careers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObj),
        });
  
        if (!response.ok) throw new Error("Failed to submit application.");
  
        alert("Application submitted successfully!");
        setFormData({ name: "", email: "", position: "", coverLetter: "", resume: null });
      });
    } catch (error) {
      alert("Error uploading resume. Please try again.");
      setIsSubmitting(false);
      return;
    } finally {
      setIsSubmitting(false);
    }
    }
  };

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-10 heading-section text-center">
            <span className="subheading">Career</span>
            <h2 className="mb-4">Apply for a Position</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          {/* Position */}
          <div className="mb-3">
            <label htmlFor="position" className="form-label">Position</label>
            <Form.Select id="position" name="position" value={formData.position} onChange={handleChange}>
              <option value="">Select a position</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="product_manager">Product Manager</option>
              <option value="sales">Sales Executive</option>
              <option value="marketing">Marketing Specialist</option>
            </Form.Select>
            {errors.position && <small className="text-danger">{errors.position}</small>}
          </div>

          {/* Cover Letter */}
          <div className="mb-3">
            <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
            <textarea className="form-control" id="coverLetter" name="coverLetter" rows="3" value={formData.coverLetter} onChange={handleChange}></textarea>
            {errors.coverLetter && <small className="text-danger">{errors.coverLetter}</small>}
          </div>

          {/* Resume Upload */}
          <div className="mb-3">
            <label htmlFor="resume" className="form-label">Resume</label>
            <input type="file" className="form-control" id="resume" name="resume" onChange={handleChange} />
            {errors.resume && <small className="text-danger">{errors.resume}</small>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
