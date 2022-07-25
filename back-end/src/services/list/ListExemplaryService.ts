import { ExemplaryRepository } from '../../repositories/ExemplaryRepository';


class ListExemplaryService {
    async execute(Codigo: number): Promise<void> {
        const exemplaryRepository = new ExemplaryRepository();

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        const exemplary = await exemplaryRepository.getById(Codigo);

        if (!exemplary) {
            throw new Error('Exemplar não encontrado!');
        }

        return exemplary;
    }
}


export { ListExemplaryService };