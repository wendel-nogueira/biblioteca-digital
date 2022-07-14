import { AssociateRepository } from '../repositories/AssociateRepository';
import { IQueryAssociate } from '../interfaces/IQueryAssociate';


class ListAssociateService {
    async execute({ Codigo, Nome, Endereco, Email, Status }: IQueryAssociate): Promise<void> {
        const associateRepository = new AssociateRepository();
        let query = { Codigo, Nome, Endereco, Email, Status };

        Object.keys(query).forEach(key => {
            if (query[key] === undefined) {
                delete query[key];
            }
        });
        
        return await associateRepository.get(query);
    }
}


export { ListAssociateService };