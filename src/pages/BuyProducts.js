import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'
import ProductService from '../services/ProductService';
import CustomerService from '../services/CustomerService';

function BuyProducts () {
  const {id} = useParams();
  const history = useHistory();
  const customers = CustomerService.getAll();
  const [product, setProduct] = useState(ProductService.get(id));
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0].id);

  const handleChangeCustomer = (e) => {
    setSelectedCustomer(e.target.value)
  }

  const handleConfirm = () => {
    CustomerService.addProduct(selectedCustomer, product.name)

    const newQuantity = ProductService.decrement(id);

    setProduct({...product, quantity: newQuantity})
  }

  const handleCancel = () => {
    history.push('/products')
  }

  return (
    <div>
      <p>Name: {product.name}</p>
      <p>In stock: {product.quantity}</p>
      <select onChange={handleChangeCustomer} value={selectedCustomer}>
        {customers.map((cus) => (<option key={cus.id} value={cus.id}>{cus.name} {cus.surname}</option>))}
      </select>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default BuyProducts;