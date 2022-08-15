
const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Jacky, 36, jackysantiago358@yahoo.com');

    expect(employee.name).toEqual(expect.any(string));
    expect(employee.id).toEqual(expect.any(number));
    expect(employee.email).toEqual(expect.any(string));
});

test('employee name', () => {
    const employee = new Employee('Jacky, 36, jackysantiago358@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(string));
});