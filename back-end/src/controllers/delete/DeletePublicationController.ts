import { Request, Response } from 'express';
import { DeletePublicationService } from '../../services/delete/DeletePublicationService';


class DeletePublicationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deletePublicationService = new DeletePublicationService();
        const codigo = parseInt(request.params.codigo);

        await deletePublicationService.execute(codigo);

        return response.status(200).json({ message: 'Publicação deletada com sucesso!' });
    }
}


export { DeletePublicationController };

