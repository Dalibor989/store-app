import React, {useState} from "react";
import { Link } from "react-router-dom";
import CustomerService from "../services/CustomerService"

function AppCustomers() {

  const [newCustomer, setNewCustomer] = useState({
    name: '',
    surname: '',
    age: '',
  })

  const [customers, setCustomer] = useState(CustomerService.getAll())

  const removeCustomer = (id) => {
    const isDeleted = CustomerService.remove(id);

    if (isDeleted) {
      setCustomer(customers.filter((customers) => customers.id !== id));
    }
  
  }

  const addCustomer = (e) => {
    e.preventDefault();

    const newCus = CustomerService.create(newCustomer);
    
    setCustomer([...customers, newCus]);
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
        {customers.map((customer) => (
          <li key={customer.id}>{customer.id} {customer.name} {customer.surname}
          <button onClick={() => removeCustomer(customer.id)}>Remove Customer</button>
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