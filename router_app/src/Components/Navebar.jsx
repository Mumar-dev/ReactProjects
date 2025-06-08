import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Navebar({ isLoggedin, setisLoggedin }) {
  function logoutHandler() {
    setisLoggedin(false);
    toast.success("LogOut Successful");
  }

  let buttons;

  if (isLoggedin) {
    buttons = (
      <div className="flex gap-4">
        <Link to="/Home">
          <button
            onClick={logoutHandler}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Log Out
          </button>
        </Link>
        <Link to="/Dashboard">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Dashboard
          </button>
        </Link>
      </div>
    );
  } else {
    buttons = (
      <div className="flex gap-4">
        <Link to="/Login">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Login
          </button>
        </Link>
        <Link to="/Signup">
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
            Signup
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
      <div className="flex justify-evenly items-center py-4">
  
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800">Router-App</h1>
        </Link>

       
        <div>
          <ul className="flex gap-8 text-lg font-medium text-gray-600">
            <li>
              <Link to="/" className="hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-800">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div>{buttons}</div>
      </div>
    </div>
  );
}

export default Navebar;
