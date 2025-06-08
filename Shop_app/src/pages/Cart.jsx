import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'


const Cart = ( ) => {

  const {cart} = useSelector( (state) => state)

  const [totalamount, setTotalamount] = useState(0)


  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalamount(total);
  }, [cart]); 
  

  return (
    <div>

      {
      cart.length > 0 ? (

        <div>
          {
             cart.map ( (item, index) => (

            <CartItem data={item}  dataIndex={index}/>
              
            ))
          }



          <div>
            <p>Your Cart</p>

            <h2>Summary</h2>

            <p>Total Items {cart.length}</p>

            <p>Total Amount ${totalamount}</p>

            <button>Chekout Now</button>


          </div>

        </div>

      ) : (
        <div>
          <p>Your Cart Is Empty</p>
          <NavLink to={"/"}>
              <button>
                  Shop Now
              </button>
          </NavLink>
        </div>
      )
}
      
    </div>
  )
}

export default Cart