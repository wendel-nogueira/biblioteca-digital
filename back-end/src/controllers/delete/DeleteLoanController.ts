import { Request, Response } from 'express';
import { DeleteLoanService } from '../../services/delete/DeleteLoanService';


class DeleteLoanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteLoanService = new DeleteLoanService();
        const codigo = parseInt(request.params.codigo);

        await deleteLoanService.execute(codigo);

        return response.status(200).json({ message: 'Empréstimo deletado com sucesso!' });
    }
}


export { DeleteLoanController };

