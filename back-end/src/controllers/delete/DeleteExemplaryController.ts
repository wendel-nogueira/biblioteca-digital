import { Request, Response } from 'express';
import { DeleteExemplaryService } from '../../services/delete/DeleteExemplaryService';


class DeleteExemplaryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteExemplaryService = new DeleteExemplaryService();
        const codigo = parseInt(request.params.codigo);

        await deleteExemplaryService.execute(codigo);

        return response.status(200).json({ message: 'Exemplar deletado com sucesso!' });
    }
}


export { DeleteExemplaryController };

