// AddUserForm.js
import { useState } from "react";
import PropTypes from "prop-types";
import ReusableModal from "./ReusableModal";

const AddUser = ({ isOpen, onClose, onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation if needed
    onAddUser({ name, email });
    onClose();
  };

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose} width="40%">
      <div>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add User</button>
        </form>
      </div>
    </ReusableModal>
  );
};

AddUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default AddUser;
