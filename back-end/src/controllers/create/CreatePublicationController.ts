import { Request, Response } from 'express';
import { CreatePublicationService } from '../../services/create/CreatePublicationService';


class CreatePublicationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { isbn, titulo, autor, editora } = request.body;

        const createPublicationService = new CreatePublicationService();

        const publication = await createPublicationService.execute(isbn, titulo, autor, editora);

        return response.status(201).json(publication);
    }
}


export { CreatePublicationController };

