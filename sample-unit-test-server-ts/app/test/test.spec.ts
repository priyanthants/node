import { expect } from 'chai';
import 'mocha';
import Service from "../src/service";

const service: Service = new Service();

describe('getAnEmployeeSuccess', () => {
  it('should return one employee', () => {
    const result = service.getOneEmployee(1);
    expect(result.employeeId).to.equal(1);
    expect(result.employeeName).to.equal('john');
  });
});

describe('getAnEmployeeFailed', () => {
  it('should return false', () => {
    const result = service.getOneEmployee(2);
    expect(result).to.equal(false);
  });
});

describe('getAllEmployees', () => {
  it('should return array of employee', () => {
    const result = service.getAllEmployees();
    expect(result[0].employeeId).to.equal(1);
    expect(result[0].employeeName).to.equal('john');
  });
});

describe('createAEmployee', () => {
  it('should return saved employee', () => {
    const result = service.createAEmployee({employeeName:'smith'});
    expect(result.employeeId).to.equal(2);
    expect(result.employeeName).to.equal('smith');
  });
});

describe('updateAEmployeeSuccess', () => {
  it('should return true', () => {
    const result = service.updateAEmployee(2,{employeeName:'wick'});
    expect(result).to.equal(true);
  });
});

describe('updateAEmployeeFailed', () => {
  it('should return false', () => {
    const result = service.updateAEmployee(3,{employeeName:'wick'});
    expect(result).to.equal(false);
  });
});

describe('deleteEmployeeSuccess', () => {
  it('should return true', () => {
    const result = service.deleteEmployee(2);
    expect(result).to.equal(true);
  });
});

describe('deleteEmployeeFailed', () => {
  it('should return false', () => {
    const result = service.deleteEmployee(3);
    expect(result).to.equal(false);
  });
});