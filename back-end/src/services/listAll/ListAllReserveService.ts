import { ReserveRepository } from '../../repositories/ReserveRepository';


class ListAllReserveService {
    async execute(): Promise<Array<any>> {
        const reserveRepository = new ReserveRepository();
        
        const reserves = await reserveRepository.getAll();

        if (reserves.length === 0) {
            throw new Error('Sem reservas!');
        }

        return reserves;
    }
}


export { ListAllReserveService };