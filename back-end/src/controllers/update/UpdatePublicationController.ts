import { Request, Response } from 'express';
import { UpdatePublicationService } from '../../services/update/UpdatePublicationService';


class UpdatePublicationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { isbn, titulo, autor, editora } = request.body;
        const Codigo = parseInt(request.params.codigo);

        const updatePublicationService = new UpdatePublicationService();

        const publication = await updatePublicationService.execute(Codigo, isbn, titulo, autor, editora);

        return response.status(200).json(publication);
    }
}


export { UpdatePublicationController };

