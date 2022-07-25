import { ExemplaryRepository } from '../../repositories/ExemplaryRepository';


class UpdateExemplaryService {
    async execute(Codigo: number, Numero: number, ISBN: string, Preco: number): Promise<void> {
        const exemplaryRepository = new ExemplaryRepository();
        let update = { Numero, ISBN, Preco };

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        Object.keys(update).forEach(key => {
            if (update[key] === undefined) {
                delete update[key];
            }
        });

        return await exemplaryRepository.update(Codigo, update);
    }
}


export { UpdateExemplaryService };