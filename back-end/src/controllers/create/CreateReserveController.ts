import { Request, Response } from 'express';
import { CreateReserveService } from '../../services/create/CreateReserveService';


class CreateReserveController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { isbn, associado, status } = request.body;

        const createReserveService = new CreateReserveService();

        const reserve = await createReserveService.execute({
            ISBN: isbn,
            Codigo_Assoc: associado,
            Status: status
        });

        return response.status(201).json(reserve);
    }
}


export { CreateReserveController };

