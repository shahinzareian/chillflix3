import { add, min } from './math';

describe('math helpers', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(add(3, 5)).toBe(8);
    });
  });
  fdescribe('min', () => {
    it('should min two numbers correctly', () => {
      expect(min(10, 5)).toBe(5);
    });
  });
});
