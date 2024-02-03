import Sidebar from "./Sidebar";
import UserManagement from "../pages/UserManagement";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <UserManagement />
    </div>
  );
}
export default Dashboard;
