import { PublicationRepository } from '../../repositories/PublicationRepository';


class DeletePublicationService {
    async execute(Codigo: number): Promise<void> {
        const publicationRepository = new PublicationRepository();
        
        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        const publication = await publicationRepository.getById(Codigo);

        if (!publication) {
            throw new Error('Publicação não encontrada!');
        }

        return await publicationRepository.delete(Codigo);
    }
}


export { DeletePublicationService };