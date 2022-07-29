import { ExemplaryRepository } from '../../repositories/ExemplaryRepository';


class CreateExemplaryService {
    async execute(Numero: number, ISBN: string, Preco: number): Promise<void> {
        const exemplaryRepository = new ExemplaryRepository();

        if (!ISBN || !Preco) {
            throw new Error('Dados inválidos!');
        }

        const exemplary = {
            Numero,
            ISBN,
            Preco
        };

        const createExemplary = await exemplaryRepository.create(exemplary);

        if (!createExemplary.dataValues) {
            throw new Error('Exemplar já cadastrado!');
        }

        return createExemplary;
    }
}


export { CreateExemplaryService };