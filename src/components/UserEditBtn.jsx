import PropTypes from "prop-types";

const UserEditBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 w-[5em] py-2 bg-blue-700 text-white rounded-md"
    >
      Edit
    </button>
  );
};

UserEditBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UserEditBtn;
