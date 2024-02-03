import { useState } from "react";
import PropTypes from "prop-types";
import ReusableModal from "../Modal";

const AddUser = ({ isOpen, onClose, onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
      return;
    }
    try {
      const newUser = { name, email, address, gender };

      onAddUser(newUser);

      onClose();

      setName("");
      setEmail("");
      setAddress("");
      setGender("male");
    } catch (error) {
      console.error(error);
    }
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
      <div className="p-2 w-[16em] md:w-[26em]">
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
          <div>
            <label htmlFor="email" className="block text-lg mb-1">
              Address:
            </label>
            <input
              id="address"
              type="text"
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Gender:</label>
            <div className="flex items-center space-x-4">
              <label htmlFor="male" className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                />
                <span className="ml-2">Male</span>
              </label>
              <label htmlFor="female" className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
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
