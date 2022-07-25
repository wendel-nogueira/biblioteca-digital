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

        return await exemplaryRepository.create(exemplary);
    }
}


export { CreateExemplaryService };