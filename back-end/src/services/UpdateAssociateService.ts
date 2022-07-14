import { AssociateRepository } from '../repositories/AssociateRepository';
import { IUpdateAssociateService } from '../interfaces/IUpdateAssociateService';


class ListAssociateService {
    async execute(Codigo: number, { Nome, Endereco, Email, Status }: IUpdateAssociateService): Promise<void> {
        const associateRepository = new AssociateRepository();
        let update = { Nome, Endereco, Email, Status };

        Object.keys(update).forEach(key => {
            if (update[key] === undefined) {
                delete update[key];
            }
        });

        return await associateRepository.update(Codigo, update);
    }
}


export { ListAssociateService };