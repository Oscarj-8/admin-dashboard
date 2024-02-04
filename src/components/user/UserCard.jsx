import UserEditBtn from "./UserEditBtn";
import UserDeleteBtn from "./UserDeleteBtn";
import UserViewBtn from "./UserViewBtn";
import PropTypes from "prop-types";

const UserCard = ({ user, onEdit, handleDeleteUser }) => (
  <div className="w-[300px] md:w-[400px] border rounded overflow-hidden shadow-lg bg-white mx-2 mt-4 p-6 flex flex-col gap-2">
    <div className="">
      <div className="flex items-baseline gap-1">
        <span className="font-normal md:text-lg">User name: </span>
        <p className="text-gray-700">{user.name}</p>
      </div>
      <div className="flex flex-col md:flex-row items-baseline gap-1">
        <span className="font-normal">User email: </span>
        <p className="text-gray-900 font-medium text-xs">{user.email}</p>
      </div>
    </div>
    <div className="flex justify-start gap-2">
      <UserViewBtn user={user} />
      <UserEditBtn onClick={() => onEdit(user)} />
      <UserDeleteBtn onDelete={() => handleDeleteUser(user.id)} />
    </div>
  </div>
);

UserCard.propTypes = {
  onEdit: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserCard;
