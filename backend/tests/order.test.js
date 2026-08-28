const Order = require('../models/Order');

describe('Order Model Unit Tests', () => {
  it('should set default status to Pending for new orders', () => {
    const order = new Order({
      user: '60c72b2f9b1d8b0015b6d111',
      products: [
        {
          product: '60c72b2f9b1d8b0015b6d222',
          name: 'Running Shoes',
          price: 89.99,
          quantity: 1,
          image: 'https://example.com/shoes.jpg',
        },
      ],
      totalAmount: 89.99,
      shippingAddress: {
        address: '123 Main St',
        phone: '+1 555-0199',
      },
    });

    expect(order.status).toBe('Pending');
    expect(order.paymentMethod).toBe('Cash on Delivery');
    expect(order.totalAmount).toBe(89.99);
  });
});
