// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import ReusableModal from "./Modal";

// const EditUserModal = ({ isOpen, onClose, user, onUpdateUser }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     if (user) {
//       setName(user.name);
//       setEmail(user.email);
//     }
//   }, [user]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdateUser({ ...user, name, email });
//     onClose();
//   };

//   if (!user) return null;

//   return (
//     <ReusableModal isOpen={isOpen} onClose={onClose}>
//       <div>
//         <h1 className="text-xl mb-4">Edit User</h1>
//         <hr className="mb-4" />
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-2 items-start"
//         >
//           <div className="flex gap-4 w-fullitems-stretch justify-center">
//             <label className="text-lg">Name:</label>
//             <input
//               type="text"
//               className="border w-full rounded-sm border-slate-800"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="flex gap-4 w-full items-stretch justify-center">
//             <label className="text-lg">Email:</label>
//             <input
//               type="email"
//               className="border rounded-sm w-full border-slate-800"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="flex gap-4">
//             <button
//               type="submit"
//               className="border px-4 py-2 bg-blue-500 text-white rounded-md"
//             >
//               Save
//             </button>
//             <button
//               onClick={onClose}
//               className="border px-4 py-2 bg-gray-500 text-white rounded-md"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </ReusableModal>
//   );
// };

// EditUserModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   user: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//   }),
//   onUpdateUser: PropTypes.func.isRequired,
// };

// export default EditUserModal;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReusableModal from "./Modal";

const EditUserModal = ({ isOpen, onClose, user, onUpdateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ ...user, name, email, address });
    onClose();
  };

  if (!user) return null;

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose}>
      <div className="p-2 w-[18em] md:w-[26em]">
        <h1 className="text-xl  mb-4">Edit User</h1>
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
  onUpdateUser: PropTypes.func.isRequired,
};

export default EditUserModal;
