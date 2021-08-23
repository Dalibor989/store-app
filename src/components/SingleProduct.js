import React from 'react'
import { Link } from 'react-router-dom'

function SingleProduct({id, name, quantity, incrementCallback, decrementCallback}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>In stock: {quantity}</p>
      <button onClick={() => incrementCallback(id)}>+</button>
      <button onClick={() => decrementCallback(id)}>-</button>
      <Link to={`/products/${id}`}>Buy</Link>
    </div>
  )
}

export default SingleProduct;