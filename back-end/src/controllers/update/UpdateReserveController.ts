import { Request, Response } from 'express';
import { UpdateReserveService } from '../../services/update/UpdateReserveService';


class UpdateReserveController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { isbn, associado, status } = request.body;
        const Codigo = parseInt(request.params.codigo);

        const updateReserveService = new UpdateReserveService();

        const reserve = await updateReserveService.execute(Codigo, {
            ISBN: isbn,
            Codigo_Assoc: associado,
            Status: status
        });

        return response.status(200).json(reserve);
    }
}


export { UpdateReserveController };

