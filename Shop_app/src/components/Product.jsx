import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddtoCart, RemovefromCart } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'

const Product = ({ data }) => {
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch()

  function RemoveCartHandler() {
    dispatch(RemovefromCart(data.id))
    toast.error("Removed from Cart")
  }

  function AddCartHandler() {
    dispatch(AddtoCart(data))
    toast.success("Item added to Cart")
  }

  return (
    <div className="p-4 border rounded-lg shadow-md flex mb-4 flex-col items-center bg-white w-1/2 sm:w-[70%] mx-auto">
      <img
        src={data.image}
        alt={data.title}
        className="h-60 w-full object-contain rounded-lg mb-4"
      />
      <p className="font-semibold text-lg mb-2 text-center">{data.title}</p>
      <p className="text-sm text-gray-600 mb-4 text-center">{data.description}</p>
      <p className="font-bold text-lg mb-4 text-green-600">${data.price}</p>
      {cart.some((cartItem) => cartItem.id === data.id) ? (
        <button
          onClick={RemoveCartHandler}
          className="w-1/2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={AddCartHandler}
          className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default Product
