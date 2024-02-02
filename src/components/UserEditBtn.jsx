import PropTypes from "prop-types";

const UserEditBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Edit
    </button>
  );
};

UserEditBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UserEditBtn;
