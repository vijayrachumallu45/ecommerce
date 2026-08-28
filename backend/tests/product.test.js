const Product = require('../models/Product');

describe('Product Model Unit Tests', () => {
  it('should instantiate a product with correct price and stock', () => {
    const product = new Product({
      name: 'Wireless Earbuds',
      description: 'High quality sound',
      price: 49.99,
      image: 'https://example.com/image.jpg',
      category: 'Electronics',
      stock: 20,
    });

    expect(product.name).toBe('Wireless Earbuds');
    expect(product.price).toBe(49.99);
    expect(product.stock).toBe(20);
    expect(product.category).toBe('Electronics');
  });
});
