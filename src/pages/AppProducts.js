import React, {useState} from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";
import SingleProduct from "../components/SingleProduct";

function AppProducts() {
  const [search, setSearch] = useState('')
  const [products, setProduct] = useState(ProductService.getAll())

  const filteredProducts = products.filter(prod => prod.name.toLowerCase().startsWith(search.toLowerCase()))


  const setNewQuantity = (id, newQuantity) => {
    const index = products.findIndex((product) =>  product.id === id)

    setProduct(
      [...products.slice(0, index), {...products[index], quantity: newQuantity}, ...products.slice(index + 1)]
    )
  }

  const increment = (id) => {
    const newQuantity = ProductService.increment(id);
    setNewQuantity(id, newQuantity)
  }

  const decrement = (id) => {
    const newQuantity = ProductService.decrement(id);
    setNewQuantity(id, newQuantity)
  }
 
  const searchName = (name) => {
    setProduct(ProductService.search(name))
  }

  return (
    <div>
      <form onSubmit={searchName}>
        <input type="text" placeholder="Search..." onChange={({target}) => setSearch(target.value)}/>
        <button>Search</button>
      </form>
      <div>
        {filteredProducts.map((product) => (
          <SingleProduct
            key={product.id}
            id={product.id}
            name={product.name}
            quantity={product.quantity}
            incrementCallback={increment}
            decrementCallback={decrement}
          />
        ))}
      </div>
    </div>
  )
}

export default AppProducts;