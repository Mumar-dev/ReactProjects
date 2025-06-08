import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"

const Navebar = () => {
  return (
    <div className= "top-0 bg-black shadow-md z-10 mb-10 flex items-center justify-between p-4">
      <NavLink to="/" className="text-xl font-bold">
        <img src="https://via.placeholder.com/150x50" alt="LOGO" className="h-10" />
      </NavLink>
      <div className="flex gap-4 items-center">
        <NavLink to="/" className="text-whit hover:text-green-500 transition">
          Home
        </NavLink>
        <NavLink to="/cart" className="relative text-whit-700 hover:text-green-500 transition">
          <FaShoppingCart size={24} />
        </NavLink>
      </div>
    </div>
  )
}

export default Navebar
