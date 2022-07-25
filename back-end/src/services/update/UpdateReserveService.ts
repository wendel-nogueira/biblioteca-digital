import { ReserveRepository } from '../../repositories/ReserveRepository';
import { IUpdateReserveService } from '../../interfaces/IUpdateReserveService';
import { ReserveStatus } from '../../interfaces/enums/ReserveStatus';


class UpdateReserveService {
    async execute(Codigo: number, { ISBN, Codigo_Assoc, Status }: IUpdateReserveService): Promise<void> {
        const reserveRepository = new ReserveRepository();
        let update = { ISBN, Codigo_Assoc, Status };

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        if (Status && Status !== ReserveStatus.avoided && Status !== ReserveStatus.initiated && Status !== ReserveStatus.warned) {
            throw new Error('Status inválido!');
        }

        Object.keys(update).forEach(key => {
            if (update[key] === undefined) {
                delete update[key];
            }
        });

        return await reserveRepository.update(Codigo, update);
    }
}


export { UpdateReserveService };