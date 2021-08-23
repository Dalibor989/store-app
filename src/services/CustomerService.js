class CustomerService{
    constructor() {
        this.nextId = 4;

        this.customers = [
            {
                id: 1, 
                name: 'Pero', 
                surname: 'Peterson', 
                age: 20, 
                products: [{id: 1, name: 'logitech g205'}]
            },
            {
                id: 2, 
                name: 'Milan', 
                surname: 'Milanovic', 
                age: 35, 
                products: [{id: 2, name: 'Dell 24inch Monitor'}]
            },
            {
                id: 3, 
                name: 'Jovana', 
                surname: 'Jovanovic', 
                age: 28, 
                products: [{id: 3, name: 'Cooler Master 500D'}]
            },
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

    get(id) {
        return this.customers.find((cus) => cus.id === Number(id))
    }

    addProduct(id, productName) {
        const index = this.customers.findIndex((cus) => cus.id === Number(id));
        const lastProductId = this.customers[index].products.reduce((lastId, prod) =>
        lastId > prod.id ? lastId : prod.id
        , -1)
        this.customers[index].products.push({id: lastProductId + 1, name: productName})
    }
}

export default new CustomerService();