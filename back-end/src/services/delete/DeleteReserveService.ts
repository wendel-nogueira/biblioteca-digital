import { ReserveRepository } from '../../repositories/ReserveRepository';


class DeleteReserveService {
    async execute(Codigo: number): Promise<void> {
        const reserveRepository = new ReserveRepository();
        
        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        const reserve = await reserveRepository.getById(Codigo);

        if (!reserve) {
            throw new Error('Reserva não encontrada!');
        }

        return await reserveRepository.delete(Codigo);
    }
}


export { DeleteReserveService };