import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ isLoggedin, setisLoggedin }) {
    console.log("setisLoggedin:", setisLoggedin);
    console.log("isLoggedin", isLoggedin);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function SubmitHandler(event) {
    event.preventDefault();
    console.log("Form submitted! Redirecting..."); // Fixed typo: should be `preventDefault` not `preventdefault`
    setisLoggedin(true);
    navigate("/Dashboard"); 
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome User</h1>
      <p className="text-lg text-gray-600">Build skills for today, tomorrow, and beyond.</p>
      <p className="text-lg text-gray-600 mb-8">Education to future-proof your career.</p>

      <form
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
        onSubmit={SubmitHandler}
      >
        <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
        <input
          type="email"
          required
          name="email"
          placeholder="Enter email address"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block text-gray-700 font-semibold mb-2">Password</label>
        <input
          type="password"
          required
          name="password"
          placeholder="Enter Password"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <p className="text-blue-500 text-sm cursor-pointer mb-4 hover:underline">
          Forgot Password?
        </p>

        <button
          className="w-full p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
