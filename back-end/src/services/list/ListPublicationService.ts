import { PublicationRepository } from '../../repositories/PublicationRepository';


class ListPublicationService {
    async execute(Codigo: number): Promise<void> {
        const publicationRepository = new PublicationRepository();

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        const publication = await publicationRepository.getById(Codigo);

        if (!publication) {
            throw new Error('Publicação não encontrada!');
        }

        return publication;
    }
}


export { ListPublicationService };