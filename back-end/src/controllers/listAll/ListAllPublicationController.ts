import { Request, Response } from 'express';
import { ListAllPublicationService } from '../../services/listAll/ListAllPublicationService';


class ListAllPublicationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllPublicationService = new ListAllPublicationService();

        const publications = await listAllPublicationService.execute();

        return response.status(200).json(publications);
    }
}


export { ListAllPublicationController }