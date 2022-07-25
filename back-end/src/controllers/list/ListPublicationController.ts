import { Request, Response } from 'express';
import { ListPublicationService } from '../../services/list/ListPublicationService';


class ListPublicationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listPublicationService = new ListPublicationService();
        const Codigo = parseInt(request.params.codigo);

        const publication = await listPublicationService.execute(Codigo);

        return response.status(200).json(publication);
    }
}


export { ListPublicationController }