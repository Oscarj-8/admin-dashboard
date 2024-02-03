import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserEditBtn = ({ user }) => {
  return (
    <Link to={`/userInfo/${user.id}`}>
      <button className="px-4 w-[5em] py-2 bg-yellow-500 text-white rounded-md">
        View
      </button>
    </Link>
  );
};

UserEditBtn.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserEditBtn;
