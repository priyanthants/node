import EmployeeService from "./EmployeeService";
import EmployeeRepository from "../respoitory/EmployeeRepository";
import  EmployeeRepositoryImpl from "../respoitory/EmployeeRepositoryImpl"
import Employee from "../model/Employee";

export default class  EmployeeServiceImpl implements EmployeeService{
    public employeeRepository:EmployeeRepository;
    constructor(){
        this.employeeRepository=new EmployeeRepositoryImpl()
    }

    create(data: Employee) {
        return this.employeeRepository.create(data);
    }    
    
    findOne(id: number) {
        return this.employeeRepository.getOne(id);
    }

    findAll(): Employee[] {
        return this.employeeRepository.findAll();
    }

    update(id: number, data: Employee) {
        return this.employeeRepository.update(id,data);
    }
    delete(id: number) {
        return this.employeeRepository.delete(id);
    }


}