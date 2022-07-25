import { EmployeeRepository } from '../../repositories/EmployeeRepository';
import { ICreateEmployeeService } from '../../interfaces/ICreateEmployeeService';
import { EmployeeType } from '../../interfaces/enums/EmployeeType';
import { hash } from 'bcryptjs';


class CreateEmployeeService {
    async execute({ Nome, Funcao, Email, Senha }: ICreateEmployeeService): Promise<void> {
        const employeeRepository = new EmployeeRepository();

        if (!Nome || !Funcao || !Email || !Senha) {
            throw new Error('Dados inválidos!');
        }

        const associates = employeeRepository.getAll();
        const emailExists = (await associates).find(associate => associate.Email === Email);

        if (emailExists) {
            throw new Error('Email já cadastrado!');
        }

        if (Funcao !== EmployeeType.employee && Funcao !== EmployeeType.manager) {
            throw new Error('Status inválido!');
        }

        const newPass = await hash(Senha, 12);

        const employee = {
            Nome,
            Funcao,
            Email,
            Senha: newPass
        };

        return await employeeRepository.create(employee);
    }
}


export { CreateEmployeeService };