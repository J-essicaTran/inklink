import Header from "../components/Header";
import UserListAdmin from "../components/UserListAdmin";

function Admin() {
  return (
    <div>
      <Header />

      <div className="h-2 w-full mt-3 bg-pink-600 flex justify-center items-center rounded-full">
        <div className="h-1 w-full bg-white rounded-full"></div>
      </div>

      <div className="h-full w-full rounded-lg p-3 bg-neutral-900">
        <UserListAdmin />
      </div>
    </div>
  );
}

export default Admin;
