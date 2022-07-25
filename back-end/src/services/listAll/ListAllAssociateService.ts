import { AssociateRepository } from '../../repositories/AssociateRepository';


class ListAllAssociateService {
    async execute(): Promise<Array<any>> {
        const associateRepository = new AssociateRepository();
        
        const associates = await associateRepository.getAll();

        if (associates.length === 0) {
            throw new Error('Sem associados!');
        }

        return associates;
    }
}


export { ListAllAssociateService };