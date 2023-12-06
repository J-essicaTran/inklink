import Header from "../components/Header";
import UserListAdmin from "../components/UserListAdmin";

function Admin() {
  return (
    <div>
      <Header />

      <UserListAdmin />

      <div className="h-2 w-full mb-3 bg-pink-600 flex justify-center items-center rounded-full">
        <div className="h-1 w-full bg-white rounded-full"></div>
      </div>
    </div>
  );
}

export default Admin;
