import Sidebar from "./components/Sidebar";
import UserList from "./pages/UserList";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <UserList />
    </div>
  );
}
