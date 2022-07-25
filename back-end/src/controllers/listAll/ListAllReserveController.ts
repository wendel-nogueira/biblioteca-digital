import { Request, Response } from 'express';
import { ListAllReserveService } from '../../services/listAll/ListAllReserveService';


class ListAllReserveController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllReserveService = new ListAllReserveService();

        const reserves = await listAllReserveService.execute();

        return response.status(200).json(reserves);
    }
}


export { ListAllReserveController }