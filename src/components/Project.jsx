import React, { useState } from 'react';

const Project = ({ imageUrl, title, location }) => {
  let imageUrls = [imageUrl, imageUrl]
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setCurrentImageIndex(0); // Reset index on close
    setModalOpen(false)};
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length); // Cycle to next image
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + imageUrls.length - 1) % imageUrls.length); // Cycle to previous image
  };
  const Modal = ({ imageUrls }) => (
    <div style={{ display: isModalOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }}>
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: 20, backgroundColor: 'white', zIndex: 1001 }}>
      <img src={imageUrls[currentImageIndex]} alt="Project" style={{ width: '100%', height: 'auto' }} />
      <button onClick={closeModal} style={{ position: 'absolute', top: 10, right: 10 }}>Close</button>
      {imageUrls.length > 1 && (
        <>
          <button onClick={prevImage} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',  backgroundColor: 'transparent'}}><i className='fa fa-chevron-left mr-2 text-white'></i></button>
          <button onClick={nextImage} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent' }}><i className='fa fa-chevron-right mr-2 text-white'></i></button>
        </>
      )}
    </div>
  </div>
  );

  return (
    <div className="col-md-4">
      <div className="project" onClick={openModal}>
        <a  href="javascript:void(0)"  className="img image-popup d-flex align-items-center" style={backgroundImageStyle}>
          <div className="icon d-flex align-items-center justify-content-center mb-5">
            <span className="fa fa-plus"></span>
          </div>
        </a>
        <div className="text">
          <span className="subheading">Building</span>
          <h3>{title}</h3>
          <p><span className="fa fa-map-marker mr-1"></span> {location}</p>
        </div>
      </div>
      {isModalOpen && <Modal imageUrls={imageUrls} />}
    </div>
  );
};

export default Project;
