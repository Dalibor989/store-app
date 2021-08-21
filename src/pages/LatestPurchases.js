import React from "react";
import { useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService"

function LatestPurchases() {
  const {id} = useParams();

  const customer = CustomerService.get(id)

  return (
    <div>
      <h1>Latest Purchases</h1>
      <p>{customer.name} {customer.surname}</p>
      <ul>
        {customer.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default LatestPurchases;