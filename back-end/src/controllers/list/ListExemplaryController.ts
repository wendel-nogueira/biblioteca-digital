import { Request, Response } from 'express';
import { ListExemplaryService } from '../../services/list/ListExemplaryService';


class ListExemplaryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listExemplaryService = new ListExemplaryService();
        const Codigo = parseInt(request.params.codigo);

        const exemplary = await listExemplaryService.execute(Codigo);

        return response.status(200).json(exemplary);
    }
}


export { ListExemplaryController }