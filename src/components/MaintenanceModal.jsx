// MaintenanceModal.js
import React from 'react';

const MaintenanceModal = ({ isOpen, setIsMaintenanceMode }) => {
  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header mx-auto mt-3">
            <h5 className="modal-title">Maintenance Mode</h5>
          </div>
          <div className="modal-body mx-auto">
            <p>Our website is currently under maintenance.</p>
          </div>
          <div className="modal-footer bg-white mx-auto">
            <button type="button" onClick={() => setIsMaintenanceMode(false)} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceModal;
