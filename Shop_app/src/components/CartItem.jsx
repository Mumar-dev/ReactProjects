import React from 'react'
import { MdDelete } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { RemovefromCart } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'

const CartItem = ({ data }) => {
  const dispatch = useDispatch()

  function RemoveToCartHandler() {
    dispatch(RemovefromCart(data.id))
    toast.success("Item Removed from Cart")
  }

  return (
    <div className="p-4 border rounded-lg flex w-1/2 h-60 items-center gap-4">
      <img src={data.image} alt="cart-Product-Image" className="h-20 w-20 object-cover rounded-lg" />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{data.title}</h2>
        <p className="text-sm text-gray-600">{data.description}</p>
        <p className="font-bold text-lg">${data.price}</p>
      </div>
      <button onClick={RemoveToCartHandler} className="bg-red-500 text-white p-2 rounded-lg">
        <MdDelete />
      </button>
    </div>
  )
}

export default CartItem
