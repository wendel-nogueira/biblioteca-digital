import { Request, Response } from 'express';
import { ListLoanService } from '../../services/list/ListLoanService';


class ListLoanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listLoanService = new ListLoanService();
        const Codigo = parseInt(request.params.codigo);

        const loan = await listLoanService.execute(Codigo);

        return response.status(200).json(loan);
    }
}


export { ListLoanController }