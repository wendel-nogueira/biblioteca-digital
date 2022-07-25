import { ReserveStatus } from './enums/ReserveStatus';


interface IUpdateReserveService {
    ISBN?: string;
    Codigo_Assoc?: number;
    Status?: ReserveStatus;
}


export { IUpdateReserveService };