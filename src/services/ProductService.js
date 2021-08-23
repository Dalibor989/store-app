class ProductService {
  constructor() {
    this.nextId = 4;

    this.products = [{
      id: 1, 
      name: 'logitech g205',
      quantity: 20
    }, {
      id: 2,
      name: 'Dell 24inch Monitor',
      quantity: 12
    }, {
      id: 3,
      name: 'Cooler Master 500D',
      quantity: 15
    }, {
      id: 4,
      name: 'Genius U115 speakers',
      quantity: 3
    }]
  }

  getAll() {
    return [...this.products];
  }

  search(name) {
    return this.products.filter((product) => product.name === name)
  }

  increment(id) {
    const index = this.products.findIndex((product) => product.id === id)

    if(index !== -1) {
      this.products[index].quantity++;
    }

    return this.products[index].quantity;
  }

  decrement(id) {
    const index = this.products.findIndex((product) => product.id === id)

    if(index !== -1 && this.products[index].quantity > 0) {
      this.products[index].quantity--;
    }

    return this.products[index].quantity;
  }

  get(id) {
    return this.products.find((prod) => prod.id === Number(id))
}
}

export default new ProductService();