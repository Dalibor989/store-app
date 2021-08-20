import React, {useState} from "react";

function AppCustomers() {

  const [customers, setCustomer] = useState([
    {id: 0, name: 'Pero', surname: 'Peterson', age: 20},
    {id: 1, name: 'Milan', surname: 'Milanovic', age: 35},
    {id: 2, name: 'Jovana', surname: 'Jovanovic', age: 28},
  ])

  const remove = (customerId) => {
    setCustomer(customers.filter((animals, id) => id !== customerId))
  }

  return (
    <div>
      <ul>
        {customers.map((customer, id) => (
          <li key={id}>{customer.name} {customer.surname}<button onClick={() => remove(id)}>Remove Customer</button></li>
        ))}
      </ul>
    </div>
  )
}

export default AppCustomers;