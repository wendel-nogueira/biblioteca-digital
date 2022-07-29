import { AssociateRepository } from '../../repositories/AssociateRepository';
import { ICreateAssociateService } from '../../interfaces/ICreateAssociateService';
import { AssociateStatus } from '../../interfaces/enums/AssociateStatus';


class CreateAssociateService {
    async execute({ Nome, Endereco, Email, Status }: ICreateAssociateService): Promise<void> {
        const associateRepository = new AssociateRepository();

        if (!Nome || !Endereco || !Email || !Status) {
            throw new Error('Dados inválidos!');
        }

        const associates = associateRepository.getAll();
        const emailExists = (await associates).find(associate => associate.Email === Email);

        if (emailExists) {
            throw new Error('Email já cadastrado!');
        }

        if (Status !== AssociateStatus.graduated && Status !== AssociateStatus.posGraduated && Status !== AssociateStatus.teacher) {
            throw new Error('Status inválido!');
        }

        const associate = {
            Nome,
            Endereco,
            Email,
            Status
        };

        const createAssociate = await associateRepository.create(associate);

        if (!createAssociate.dataValues) {
            throw new Error('Associado já cadastrado!');
        }

        return createAssociate;
    }
}


export { CreateAssociateService };