import { AssociateRepository } from '../../repositories/AssociateRepository';


class ListAssociateService {
    async execute(Codigo: number): Promise<void> {
        const associateRepository = new AssociateRepository();

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        const associate = await associateRepository.getById(Codigo);

        if (!associate) {
            throw new Error('Associado não encontrado!');
        }

        return associate;
    }
}


export { ListAssociateService };