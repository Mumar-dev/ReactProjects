import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify/unstyled";
import { useNavigate } from "react-router-dom";

function Signup({ isLoggedin, setisLoggedin }) {
    console.log("isLoggedin", isLoggedin);
    console.log("setisLoggedin:", setisLoggedin);
  function StudentButtonHandler() {
    setStudent(true);
  }

  function InstructorButtonHandler() {
    setStudent(false);
  }

  const navigate = useNavigate()

  function SubmitHandler(event) {
    event.preventDefault();
    console.log("Form submitted! Redirecting...");
    if (formData.instructorPassword === formData.instructorConfirmPassword) {
      setisLoggedin(true);
      navigate("/Dashboard")
    } else {
      toast.error("Passwords do not match");
    }
  }

  const [student, setStudent] = useState(true);

  const [formData, setformData] = useState({
    studentFirstName: "",
    studentLastName: "",
    studentEmail: "",
    studentPhoneNumber: "",
    studentPassword: "",
    studentConfirmPassword: "",

    instructorFirstName: "",
    instructorLastName: "",
    instructorEmail: "",
    instructorPhoneNumber: "",
    instructorPassword: "",
    instructorConfirmPassword: "",
  });

  let forms;

  if (student) {
    forms = (
      <form
        className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-lg"
        action="/Dashboard"
        onSubmit={SubmitHandler}
      >
        <label className="w-full text-gray-700 font-semibold">First Name</label>
        <input
          type="text"
          required
          placeholder="Enter first name"
          name="studentFirstName"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Last Name</label>
        <input
          type="text"
          required
          placeholder="Enter last name"
          name="studentLastName"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter email address"
          name="studentEmail"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Phone Number</label>
        <input
          type="number"
          required
          placeholder="Enter phone number"
          name="studentPhoneNumber"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Create Password</label>
        <input
          type="password"
          required
          placeholder="Enter password"
          name="studentPassword"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Confirm Password</label>
        <input
          type="password"
          required
          placeholder="Confirm password"
          name="studentConfirmPassword"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Create Account
        </button>
      </form>
    );
  } else {
    forms = (
      <form
        className="flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-lg"
        action="/Dashboard"
        onSubmit={SubmitHandler}
      >
        <label className="w-full text-gray-700 font-semibold">First Name</label>
        <input
          type="text"
          required
          placeholder="Enter first name"
          name="instructorFirstName"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Last Name</label>
        <input
          type="text"
          required
          placeholder="Enter last name"
          name="instructorLastName"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Email Address</label>
        <input
          type="email"
          required
          placeholder="Enter email address"
          name="instructorEmail"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Phone Number</label>
        <input
          type="number"
          required
          placeholder="Enter phone number"
          name="instructorPhoneNumber"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Create Password</label>
        <input
          type="password"
          required
          placeholder="Enter password"
          name="instructorPassword"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="w-full text-gray-700 font-semibold">Confirm Password</label>
        <input
          type="password"
          required
          placeholder="Confirm password"
          name="instructorConfirmPassword"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Create Account
        </button>
      </form>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome User</h1>
      <p className="text-lg text-gray-600">Build skills for today, tomorrow, and beyond.</p>
      <p className="text-lg text-gray-600 mb-8">Education to future-proof your career.</p>

      <div className="flex gap-4 mb-6">
        <button
          onClick={StudentButtonHandler}
          className={`p-2 px-4 font-semibold rounded-lg ${
            student ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Student
        </button>
        <button
          onClick={InstructorButtonHandler}
          className={`p-2 px-4 font-semibold rounded-lg ${
            !student ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Instructor
        </button>
      </div>

      {forms}

      <ToastContainer />
    </div>
  );
}

export default Signup;
