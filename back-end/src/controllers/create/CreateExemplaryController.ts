import { Request, Response } from 'express';
import { CreateExemplaryService } from '../../services/create/CreateExemplaryService';


class CreateExemplaryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { numero, isbn, preco } = request.body;

        const createExemplaryService = new CreateExemplaryService();

        const exemplary = await createExemplaryService.execute(numero, isbn, preco);

        return response.status(201).json(exemplary);
    }
}


export { CreateExemplaryController };

