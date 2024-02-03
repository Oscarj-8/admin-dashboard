// import { useState } from "react";
// import PropTypes from "prop-types";
// import ReusableModal from "./Modal";

// const AddUser = ({ isOpen, onClose, onAddUser }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newUser = { name, email };

//     onAddUser(newUser);

//     onClose();

//     setName("");
//     setEmail("");
//   };

//   return (
//     <ReusableModal isOpen={isOpen} onClose={onClose}>
//       <div>
//         <h1 className="text-xl mb-4">Add User</h1>
//         <hr className="mb-4" />
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-2 items-start"
//         >
//           <div
//             className="flex gap-4 w-fullitems-stretch justify-center
//           "
//           >
//             <label className="text-lg">Name:</label>
//             <input
//               type="text"
//               className="border w-full rounded-sm border-slate-800"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div
//             className="flex gap-4 w-full items-stretch justify-center
//           "
//           >
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
//               className="border px-4 py-2 broder bg-slate-600 text-white rounded-md"
//             >
//               Add User
//             </button>
//             <button className="border px-4 py-2  bg-slate-600 text-white rounded-md">
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </ReusableModal>
//   );
// };

// AddUser.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   onAddUser: PropTypes.func.isRequired,
// };

// export default AddUser;

// AddUser.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import ReusableModal from "./Modal";

const AddUser = ({ isOpen, onClose, onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email };

    onAddUser(newUser);

    onClose();

    setName("");
    setEmail("");
  };

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose}>
      <div>
        <h1 className="text-xl mb-4">Add User</h1>
        <hr className="mb-4" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 items-start"
        >
          <div className="flex gap-4 w-full items-stretch justify-center">
            <label className="text-lg">Name:</label>
            <input
              type="text"
              className="border w-full rounded-sm border-slate-800"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full items-stretch justify-center">
            <label className="text-lg">Email:</label>
            <input
              type="email"
              className="border rounded-sm w-full border-slate-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="border px-4 py-2 bg-slate-600 text-white rounded-md"
            >
              Add User
            </button>
            <button
              onClick={onClose}
              className="border px-4 py-2 bg-gray-500 text-white rounded-md"
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
