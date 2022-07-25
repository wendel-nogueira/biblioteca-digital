import { Request, Response } from 'express';
import { ListReserveService } from '../../services/list/ListReserveService';


class ListReserveController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listReserveService = new ListReserveService();
        const Codigo = parseInt(request.params.codigo);

        const reserve = await listReserveService.execute(Codigo);

        return response.status(200).json(reserve);
    }
}


export { ListReserveController }