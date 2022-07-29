import { ReserveRepository } from '../../repositories/ReserveRepository';
import { ICreateReserveService } from '../../interfaces/ICreateReserveService';
import { ReserveStatus } from '../../interfaces/enums/ReserveStatus';


class CreateReserveService {
    async execute({ ISBN, Codigo_Assoc, Status }: ICreateReserveService): Promise<void> {
        const reserveRepository = new ReserveRepository();

        if (!ISBN || !Codigo_Assoc || !Status) {
            throw new Error('Dados inválidos!');
        }

        if (Status !== ReserveStatus.avoided && Status !== ReserveStatus.initiated && Status !== ReserveStatus.warned) {
            throw new Error('Status inválido!');
        }

        const Data = new Date();

        const reserve = {
            ISBN,
            Codigo_Assoc,
            Data,
            Status
        };

        const createReserve = await reserveRepository.create(reserve);

        if (!createReserve.dataValues) {
            throw new Error('Reserva já cadastrada!');
        }

        return createReserve;
    }
}


export { CreateReserveService };