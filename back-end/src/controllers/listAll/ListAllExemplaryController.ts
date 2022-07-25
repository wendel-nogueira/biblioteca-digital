import { Request, Response } from 'express';
import { ListAllExemplaryService } from '../../services/listAll/ListAllExemplaryService';


class ListAllExemplaryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllExemplaryService = new ListAllExemplaryService();

        const exemplaries = await listAllExemplaryService.execute();

        return response.status(200).json(exemplaries);
    }
}


export { ListAllExemplaryController }