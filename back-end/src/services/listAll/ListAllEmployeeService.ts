import { EmployeeRepository } from '../../repositories/EmployeeRepository';


class ListAllEmployeeService {
    async execute(): Promise<Array<any>> {
        const employeeRepository = new EmployeeRepository();
        
        const employees = await employeeRepository.getAll();

        if (employees.length === 0) {
            throw new Error('Sem funcionários!');
        }

        return employees;
    }
}


export { ListAllEmployeeService };