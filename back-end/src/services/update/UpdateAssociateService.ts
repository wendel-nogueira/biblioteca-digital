import { AssociateRepository } from '../../repositories/AssociateRepository';
import { IUpdateAssociateService } from '../../interfaces/IUpdateAssociateService';
import { AssociateStatus } from '../../interfaces/enums/AssociateStatus';


class UpdateAssociateService {
    async execute(Codigo: number, { Nome, Endereco, Email, Status }: IUpdateAssociateService): Promise<void> {
        const associateRepository = new AssociateRepository();
        let update = { Nome, Endereco, Email, Status };

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        if (Status && Status !== AssociateStatus.graduated && Status !== AssociateStatus.posGraduated && Status !== AssociateStatus.teacher) {
            throw new Error('Status inválido!');
        }

        Object.keys(update).forEach(key => {
            if (update[key] === undefined) {
                delete update[key];
            }
        });

        return await associateRepository.update(Codigo, update);
    }
}


export { UpdateAssociateService };