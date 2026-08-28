const User = require('../models/User');

describe('User Model Unit Tests', () => {
  it('should create a user object representation correctly', () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'user',
    };

    const user = new User(userData);
    expect(user.name).toBe('Test User');
    expect(user.email).toBe('test@example.com');
    expect(user.role).toBe('user');
  });

  it('should set default role to user when role is not specified', () => {
    const user = new User({
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'secretpassword',
    });

    expect(user.role).toBe('user');
  });
});
