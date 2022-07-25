import { EmployeeType } from './enums/EmployeeType';


interface IUpdateEmployeeService {
    Nome?: string;
    Funcao?: EmployeeType;
    Email?: string;
    Senha?: string;
}


export { IUpdateEmployeeService };