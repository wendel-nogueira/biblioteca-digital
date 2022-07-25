import { Request, Response } from 'express';
import { UpdateExemplaryService } from '../../services/update/UpdateExemplaryService';


class UpdateExemplaryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { numero, isbn, preco } = request.body;
        const Codigo = parseInt(request.params.codigo);

        const updateExemplaryService = new UpdateExemplaryService();

        const exemplary = await updateExemplaryService.execute(Codigo, numero, isbn, preco);

        return response.status(200).json(exemplary);
    }
}


export { UpdateExemplaryController };

