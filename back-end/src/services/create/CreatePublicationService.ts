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

        return await publicationRepository.create(publication);
    }
}


export { CreatePublicationService };