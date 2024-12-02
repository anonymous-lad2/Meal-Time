import React from 'react'
import { useSelector } from 'react-redux';
import ItemList from '../components/ItemList';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
  return (
    
    <div className='text-center w-6/12 m-auto'>
        <ItemList items = {cartItems} />
    </div>
  )
}

export default Cart;