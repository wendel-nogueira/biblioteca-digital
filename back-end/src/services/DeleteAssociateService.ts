import { AssociateRepository } from '../repositories/AssociateRepository';


class DeleteAssociateService {
    async execute(Codigo: number): Promise<void> {
        const associateRepository = new AssociateRepository();
        
        return await associateRepository.delete(Codigo);
    }
}


export { DeleteAssociateService };