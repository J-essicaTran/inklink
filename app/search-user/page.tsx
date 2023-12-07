import Header from "../components/Header"
import UserList from "../components/UserList"

function SearchUser() {
  return (
    <div>
      <Header />
      <UserList />
      <div className="h-2 w-full mb-3 bg-pink-600 flex justify-center items-center rounded-full">
        <div className="h-1 w-full bg-white rounded-full"></div>
      </div>
    </div>
  )
}

export default SearchUser