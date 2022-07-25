import { EmployeeRepository } from '../../repositories/EmployeeRepository';


class DeleteEmployeeService {
    async execute(Codigo: number): Promise<void> {
        const employeeRepository = new EmployeeRepository();
        
        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        const employee = await employeeRepository.getById(Codigo);

        if (!employee) {
            throw new Error('Funcionário não encontrado!');
        }

        return await employeeRepository.delete(Codigo);
    }
}


export { DeleteEmployeeService };