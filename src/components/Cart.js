import React from 'react'
import { useCart } from '../context/cartContext'

const Cart = () => {
  
  const {products, clearCart, checkout} = useCart ()
  
  return (
    <div>
      <div>Carrito</div>
      { products.map( (p, i) => <li key={i}>{p.name}: {p.price}</li> ) }
      <button onClick={clearCart}>Limpiar carrito</button>
      <button onClick={checkout}>Terminar compra</button> 
      </div>
  )
}

export default Cart