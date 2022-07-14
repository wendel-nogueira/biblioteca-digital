import { AssociateStatus } from './enums/AssociateStatus';


interface IUpdateAssociateService {
    Nome?: string;
    Endereco?: string;
    Email?: string;
    Status?: AssociateStatus;
}


export { IUpdateAssociateService };