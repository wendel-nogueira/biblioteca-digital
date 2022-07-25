import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';


class AuthenticateEmployeeService {
    async execute(email: string, pass: string): Promise<any> {
        const employeeRepository = new EmployeeRepository();

        if (!email) {
            throw new Error('Email inválido!');
        }

        const employee = await employeeRepository.getByEmail(email);

        if (!employee || !await compare(pass, employee.Senha)) {
            throw new Error('Usuário ou senha inválidos!');
        }

        const token = sign(
            { email: employee.Email }, 
            process.env.JWT_SECRET_KEY, 
            { subject: employee.Codigo.toString(), expiresIn: '1d'}
        );

        return token;
    }
}


export { AuthenticateEmployeeService };