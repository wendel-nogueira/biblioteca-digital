import { Request, Response } from 'express';
import { UpdateLoanService } from '../../services/update/UpdateLoanService';


class UpdateLoanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { exemplar, isbn, associado, data_emprestimo, data_devolucao } = request.body;
        const Codigo = parseInt(request.params.codigo);

        const updateLoanService = new UpdateLoanService();

        const loan = await updateLoanService.execute(Codigo, exemplar, isbn, associado, data_emprestimo, data_devolucao);

        return response.status(200).json(loan);
    }
}


export { UpdateLoanController };

