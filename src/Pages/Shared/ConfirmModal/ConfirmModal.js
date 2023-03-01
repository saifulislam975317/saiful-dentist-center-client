import React from "react";

const ConfirmModal = ({ cancelModal, handleDeleteDoctor, doctorInfo }) => {
  return (
    <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you Sure? want to delete?</h3>
          <p className="py-4">if you delete this item. you can't recover it.</p>
          <div className="modal-action">
            <button onClick={cancelModal} className="btn btn-warning">
              Cancel
            </button>
            <label
              onClick={() => handleDeleteDoctor(doctorInfo)}
              htmlFor="confirm-modal"
              className="btn"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
