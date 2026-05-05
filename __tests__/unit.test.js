// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber tests
test('100-100-1000 is a valid phone number', () => {
  expect(isPhoneNumber('100-100-1000')).toBe(true);
});

test('(100) 100-1000 is a valid phone number', () => {
  expect(isPhoneNumber('(100) 100-1000')).toBe(true);
});

test('1001001000 is not a valid phone number', () => {
  expect(isPhoneNumber('1001001000')).toBe(false);
});

test('100-100-100 is not a valid phone number', () => {
  expect(isPhoneNumber('100-100-100')).toBe(false);
});

// isEmail tests
test('cool_@cool.com is a valid email', () => {
  expect(isEmail('cool_@cool.com')).toBe(true);
});

test('co@co.co is a valid email', () => {
  expect(isEmail('co@co.co')).toBe(true);
});

test('c@c.c is not a valid email', () => {
  expect(isEmail('c@c.c')).toBe(false);
});

test('cool@cool is not a valid email', () => {
  expect(isEmail('cool@cool')).toBe(false);
});

// isStrongPassword tests
test('cool is a strong password', () => {
  expect(isStrongPassword('cool')).toBe(true);
});

test('cool_cool is a strong password', () => {
  expect(isStrongPassword('cool_cool')).toBe(true);
});

test('2cool4school is not a strong password', () => {
  expect(isStrongPassword('2cool4school')).toBe(false);
});

test('lol is not a strong password', () => {
  expect(isStrongPassword('lol')).toBe(false);
});

// isDate tests
test('1/1/2000 is a valid date', () => {
  expect(isDate('1/1/2000')).toBe(true);
});

test('31/31/3005 is a valid date', () => {
  expect(isDate('31/31/3005')).toBe(true);
});

test('100/1/1000 is not a valid date', () => {
  expect(isDate('100/1/1000')).toBe(false);
});

test('a/1/2000 is not a valid date', () => {
  expect(isDate('a/1/2000')).toBe(false);
});

// isHexColor tests
test('#fff is a valid hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('ffffff is a valid hex color', () => {
  expect(isHexColor('ffffff')).toBe(true);
});

test('#ggg is not a valid hex color', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('ffff is not a valid hex color', () => {
  expect(isHexColor('ffff')).toBe(false);
});