class CustomerService{
    constructor() {
        this.nextId = 4;

        this.customers = [
            {id: 1, name: 'Pero', surname: 'Peterson', age: 20},
            {id: 2, name: 'Milan', surname: 'Milanovic', age: 35},
            {id: 3, name: 'Jovana', surname: 'Jovanovic', age: 28},
        ]
    }

    create(newCustomer) {
        this.customers.push({id: this.nextId, ...newCustomer})
        this.nextId++;
        return this.customers[this.customers.length-1]
    }

    remove(customerIndex) {
        this.customers.slice(customerIndex, 1);

        return true;
    }

    getAll() {
        return [...this.customers];
    }
}

export default new CustomerService();