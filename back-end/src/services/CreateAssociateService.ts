import { AssociateRepository } from '../repositories/AssociateRepository';
import { ICreateAssociateService } from '../interfaces/ICreateAssociateService';


class CreateAssociateService {
    async execute({ Nome, Endereco, Email, Status }: ICreateAssociateService): Promise<void> {
        const associateRepository = new AssociateRepository();
        const emailExists = await associateRepository.get({ Email: Email });

        if (emailExists) {
            throw new Error('Email já cadastrado!');
        }

        const associate = {
            Nome,
            Endereco,
            Email,
            Status
        };

        return await associateRepository.create(associate);
    }
}


export { CreateAssociateService };