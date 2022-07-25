import { PublicationRepository } from '../../repositories/PublicationRepository';


class ListAllPublicationService {
    async execute(): Promise<Array<any>> {
        const publicationRepository = new PublicationRepository();
        
        const publications = await publicationRepository.getAll();

        if (publications.length === 0) {
            throw new Error('Sem publicações!');
        }

        return publications;
    }
}


export { ListAllPublicationService };