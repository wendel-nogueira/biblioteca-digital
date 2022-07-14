import { AssociateStatus } from './enums/AssociateStatus';


interface ICreateAssociateService {
    Nome: string;
    Endereco: string;
    Email: string;
    Status: AssociateStatus;
}


export { ICreateAssociateService };