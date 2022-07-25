import { Request, Response } from 'express';
import { AuthenticateEmployeeService } from '../services/AuthenticateEmployeeService';


class AuthenticateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const authenticateEmployeeService = new AuthenticateEmployeeService();
        const { email, senha } = request.body;

        const token = await authenticateEmployeeService.execute(email, senha);

        return response.status(200).json(token);
    }
}


export { AuthenticateEmployeeController }