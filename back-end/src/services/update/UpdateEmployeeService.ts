import { EmployeeRepository } from '../../repositories/EmployeeRepository';
import { IUpdateEmployeeService } from '../../interfaces/IUpdateEmployeeService';
import { EmployeeType } from '../../interfaces/enums/EmployeeType';
import { hash } from 'bcryptjs';


class UpdateEmployeeService {
    async execute(Codigo: number, { Nome, Funcao, Email, Senha }: IUpdateEmployeeService): Promise<void> {
        const employeeRepository = new EmployeeRepository();
        let update = { Nome, Funcao, Email, Senha };

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        if (Funcao && Funcao !== EmployeeType.employee && Funcao !== EmployeeType.manager) {
            throw new Error('Status inválido!');
        }

        if (Senha) {
            update.Senha = await hash(Senha, 12);
        }

        Object.keys(update).forEach(key => {
            if (update[key] === undefined) {
                delete update[key];
            }
        });

        return await employeeRepository.update(Codigo, update);
    }
}


export { UpdateEmployeeService };