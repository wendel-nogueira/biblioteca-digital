import { AssociateRepository } from '../repositories/AssociateRepository';


class ListAllAssociateService {
    async execute(): Promise<void> {
        const associateRepository = new AssociateRepository();
        
        return await associateRepository.getAll();
    }
}


export { ListAllAssociateService };