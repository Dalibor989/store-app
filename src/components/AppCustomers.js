import React, {useState} from "react";
import { Link } from "react-router-dom";

function AppCustomers() {

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    surname: '',
    age: '',
  })

  const [customers, setCustomer] = useState([
    {name: 'Pero', surname: 'Peterson', age: 20},
    {name: 'Milan', surname: 'Milanovic', age: 35},
    {name: 'Jovana', surname: 'Jovanovic', age: 28},
  ])

  const removeCustomer = (customerIndex) => {
    setCustomer(customers.filter((animals, index) => index !== customerIndex))
  }

  const addCustomer = (e) => {
    e.preventDefault();

    setCustomer([...customers, newCustomer]);
    setNewCustomer({
      name: '',
      surname: '',
      age: '',
    })
  }

  const handleNameChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      name: e.target.value
    })
  }

  const handleSurnameChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      surname: e.target.value
    })
  }

  const handleAgeChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      age: e.target.value
    })
  }

  return (
    <div>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>{customer.name} {customer.surname}
          <button onClick={() => removeCustomer(index)}>Remove Customer</button>
          <Link to="/latest-purchases"></Link>
          </li>
        ))}
      </ul>
      
      <div>
        <form onSubmit={addCustomer}>
          <input required type="text" value={newCustomer.name} placeholder="Name" onChange={handleNameChange}/>
          <input required type="text" value={newCustomer.surname} placeholder="Surname" onChange={handleSurnameChange}/>
          <input required type="number" value={newCustomer.age} placeholder="Age" onChange={handleAgeChange}/>
          <button>Add</button>
        </form>
      </div>
      
    </div>
  )
}

export default AppCustomers;