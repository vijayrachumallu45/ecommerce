const discountService = require('../services/discountService');

describe('DiscountService Coupon System Tests', () => {
  it('should validate percentage discount WELCOME10 for qualifying subtotal', () => {
    const result = discountService.applyCouponCode('WELCOME10', 100);
    expect(result.valid).toBe(true);
    expect(result.discountAmount).toBe(10);
    expect(result.finalSubtotal).toBe(90);
  });

  it('should reject WELCOME10 if subtotal is below minimum threshold', () => {
    const result = discountService.applyCouponCode('WELCOME10', 15);
    expect(result.valid).toBe(false);
    expect(result.discountAmount).toBe(0);
    expect(result.message).toContain('minimum order subtotal of $20');
  });

  it('should validate fixed amount discount SAVE50 for orders over $200', () => {
    const result = discountService.applyCouponCode('SAVE50', 250);
    expect(result.valid).toBe(true);
    expect(result.discountAmount).toBe(50);
    expect(result.finalSubtotal).toBe(200);
  });

  it('should handle unrecognized coupon codes gracefully', () => {
    const result = discountService.applyCouponCode('INVALID_CODE', 100);
    expect(result.valid).toBe(false);
    expect(result.discountAmount).toBe(0);
    expect(result.message).toContain('is not recognized');
  });
});
