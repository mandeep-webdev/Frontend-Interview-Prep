import React, { useEffect, useState } from "react";

const Modal = ({ editingUser = null, onClose, onSubmit }) => {
  // form state
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });
  useEffect(() => {
    if (editingUser) {
      //Avoid directly assigning object reference
      setNewUser({ ...editingUser });
    }
  }, [editingUser]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newUser);
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <div className="modal-header">
          <h3>{editingUser ? "Edit User" : "Add User"}</h3>
          <button onClick={onClose}>X</button>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={newUser.name}
            placeholder="name"
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="text"
            value={newUser.email}
            placeholder="email"
            onChange={handleInputChange}
          />
          <input
            name="role"
            type="text"
            value={newUser.role}
            placeholder="role"
            onChange={handleInputChange}
          />
          <input
            name="status"
            type="text"
            value={newUser.status}
            placeholder="status"
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
