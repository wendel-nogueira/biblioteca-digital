import { Request, Response } from 'express';
import { CreateLoanService } from '../../services/create/CreateLoanService';


class CreateLoanController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { exemplar, isbn, associado } = request.body;

        const createLoanService = new CreateLoanService();

        const loan = await createLoanService.execute(exemplar, isbn, associado);

        return response.status(201).json(loan);
    }
}


export { CreateLoanController };

