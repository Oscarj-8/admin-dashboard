import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();

  const stringId = id.toString();

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((user) => user.id === stringId);

  if (!user) {
    return <p>User not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-4">User Details</h1>
        <div className="mb-4">
          <p className="text-lg font-semibold">Name:</p>
          <p className="text-gray-800">{user.name}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Email:</p>
          <p className="text-gray-800">{user.email}</p>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
