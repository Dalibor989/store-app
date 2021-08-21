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
}

export default new ProductService();