import { ReserveStatus } from './enums/ReserveStatus';


interface ICreateReserveService {
    ISBN: string;
    Codigo_Assoc: number;
    Status: ReserveStatus;
}


export { ICreateReserveService };