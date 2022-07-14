import { AssociateStatus } from './enums/AssociateStatus';


interface IQueryAssociate {
    Codigo?: number;
    Nome?: string;
    Endereco?: string;
    Email?: string;
    Status?: AssociateStatus;
}


export { IQueryAssociate };