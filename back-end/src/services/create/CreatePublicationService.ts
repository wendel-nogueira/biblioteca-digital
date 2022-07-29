import { PublicationRepository } from '../../repositories/PublicationRepository';


class CreatePublicationService {
    async execute(ISBN: string, Titulo: string, Autor: string, Editora: string): Promise<void> {
        const publicationRepository = new PublicationRepository();

        if (!ISBN || !Titulo || !Autor || !Editora) {
            throw new Error('Dados inválidos!');
        }

        const publication = {
            ISBN,
            Titulo,
            Autor,
            Editora
        };

        const createPublication = await publicationRepository.create(publication);

        if (!createPublication.dataValues) {
            throw new Error('Publicação já cadastrada!');
        }

        return createPublication;
    }
}


export { CreatePublicationService };