import { Request, Response } from 'express';
import { ListAllLoanService } from '../../services/listAll/ListAllLoanService';


class ListAllLoanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllLoanService = new ListAllLoanService();

        const loans = await listAllLoanService.execute();

        return response.status(200).json(loans);
    }
}


export { ListAllLoanController }