import { useState } from "react";
import PropTypes from "prop-types";
import ReusableModal from "./Modal";

const AddUser = ({ isOpen, onClose, onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
      return;
    }

    const newUser = { name, email };

    onAddUser(newUser);

    onClose();

    setName("");
    setEmail("");
    setIsError(false);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose}>
      <div className="p-2 w-[16em] md:w-[20em]">
        <h1 className="text-2xl font-semibold mb-4">Add User</h1>
        {isError && (
          <p className="text-xs text-red-500">Please fill out all fields</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg mb-1">
              Name:
            </label>
            <input
              id="name"
              type="text"
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={handleEmailChange}
            />

            {isError && !isValidEmail(email) && (
              <p className="text-xs text-red-500">Invalid email format</p>
            )}
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Add User
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-md ml-4 transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
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
