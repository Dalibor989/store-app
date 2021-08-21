import React, {useState} from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

function AppProducts() {
  const [products, setProduct] = useState(ProductService.getAll())

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            Product: <span>{product.name}</span><br /> 
            In stock: <span>{product.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppProducts;