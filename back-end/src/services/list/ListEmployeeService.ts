import { EmployeeRepository } from '../../repositories/EmployeeRepository';


class ListEmployeeService {
    async execute(Codigo: number): Promise<void> {
        const employeeRepository = new EmployeeRepository();

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        const employee = await employeeRepository.getById(Codigo);

        if (!employee) {
            throw new Error('Funcionário não encontrado!');
        }

        return employee;
    }
}


export { ListEmployeeService };