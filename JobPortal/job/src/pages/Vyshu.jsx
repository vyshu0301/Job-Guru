import React, { useState } from "react";
import axios from 'axios';

function Vyshu() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register-user', formData);
      console.log(response.data);
      setSuccessMessage("Account created successfully!");
      // Optionally, clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      });
      // Hide the success message after a few seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error("Error submitting the form:", err);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">SignUp</h2>
        {successMessage && (
          <div className="mb-4 text-green-500 text-center">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Create Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="create Password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Vyshu;
