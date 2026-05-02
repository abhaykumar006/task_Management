import { describe, it, expect } from 'vitest';
import { getCurrentDate, getCurrentDay, formatDate, isPreviousDate, currentDate } from '../../utils/common-utils';

describe('common-utils', () => {
  describe('getCurrentDate', () => {
    it('should return current date in long format', () => {
      const result = getCurrentDate();
      const expected = new Date().toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
      });
      expect(result).toBe(expected);
    });
  });

  describe('getCurrentDay', () => {
    it('should return current day of week', () => {
      const result = getCurrentDay();
      const expected = new Date().toLocaleDateString("en-GB", { weekday: "long" });
      expect(result).toBe(expected);
    });
  });

  describe('formatDate', () => {
    it('should format date string to DD MMM YYYY format', () => {
      const result = formatDate('2026-03-15');
      expect(result).toBe('15 Mar 2026');
    });
  });

  describe('isPreviousDate', () => {
    it('should return true for past dates', () => {
      const pastDate = '2020-01-01';
      const current = new Date('2026-01-01');
      expect(isPreviousDate(pastDate, current)).toBe(true);
    });

    it('should return false for future dates', () => {
      const futureDate = '2030-01-01';
      const current = new Date('2026-01-01');
      expect(isPreviousDate(futureDate, current)).toBe(false);
    });

    it('should return false for same date', () => {
      const date1 = '2026-01-01';
      const date2 = new Date('2026-01-01');
      expect(isPreviousDate(date1, date2)).toBe(false);
    });

    it('should return false for null inputs', () => {
      expect(isPreviousDate(null, null)).toBe(false);
      expect(isPreviousDate('2026-01-01', null)).toBe(false);
    });
  });

  describe('currentDate', () => {
    it('should be a Date object', () => {
      expect(currentDate).toBeInstanceOf(Date);
    });
  });
});
