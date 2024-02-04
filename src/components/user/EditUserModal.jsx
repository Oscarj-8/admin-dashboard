import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReusableModal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const EditUserModal = ({ isOpen, onClose, user, onUpdateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
      setGender(user.gender);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ ...user, name, email, address, gender });
    onClose();
  };

  if (!user) return null;

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose}>
      <div className="p-2 w-[18em] md:w-[26em]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl">Edit User</h1>
          <FontAwesomeIcon
            icon={faClose}
            className="text-2xl text-slate-00 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <hr className="mb-4 border-gray-400" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col  w-full items-stretch justify-center">
            <label className="text-lg">Name:</label>
            <input
              type="text"
              className="border rounded-sm py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col  w-full items-stretch justify-center">
            <label className="text-lg">Email:</label>
            <input
              type="email"
              className="border rounded-sm py-2 px-3 w-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col  w-full items-stretch justify-center">
            <label className="text-lg">Address:</label>
            <input
              type="text"
              className="border rounded-sm py-2 px-3 w-full focus:outline-none focus:border-blue-500"
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
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md ml-2 transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ReusableModal>
  );
};

EditUserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }),
  onUpdateUser: PropTypes.func.isRequired,
};

export default EditUserModal;
