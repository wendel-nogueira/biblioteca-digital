import { ExemplaryRepository } from '../../repositories/ExemplaryRepository';


class ListAllExemplaryService {
    async execute(): Promise<Array<any>> {
        const exemplaryRepository = new ExemplaryRepository();
        
        const exemplaries = await exemplaryRepository.getAll();

        if (exemplaries.length === 0) {
            throw new Error('Sem exemplares!');
        }

        return exemplaries;
    }
}


export { ListAllExemplaryService };