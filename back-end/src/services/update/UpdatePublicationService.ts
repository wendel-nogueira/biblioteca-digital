import { PublicationRepository } from '../../repositories/PublicationRepository';


class UpdatePublicationService {
    async execute(Codigo: number, ISBN: string, Titulo: string, Autor: string, Editora: string): Promise<void> {
        const publicationRepository = new PublicationRepository();
        let update = { ISBN, Titulo, Autor, Editora };

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        Object.keys(update).forEach(key => {
            if (update[key] === undefined) {
                delete update[key];
            }
        });

        return await publicationRepository.update(Codigo, update);
    }
}


export { UpdatePublicationService };