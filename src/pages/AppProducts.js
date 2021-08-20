import React, {useState} from "react";
import { Link } from "react-router-dom";

function AppProducts() {
  const [products, setProduct] = useState([
    {productName: 'Speakers', quantity: 20},
    {productName: 'Keyboard', quantity: 30},
  ])

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.productName}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppProducts;