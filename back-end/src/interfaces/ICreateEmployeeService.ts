import { EmployeeType } from './enums/EmployeeType';


interface ICreateEmployeeService {
    Nome: string;
    Funcao: EmployeeType;
    Email: string;
    Senha: string;
}


export { ICreateEmployeeService };