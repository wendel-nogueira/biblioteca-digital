import { Request, Response } from 'express';
import { CreateEmployeeService } from '../../services/create/CreateEmployeeService';


class CreateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, funcao, email, senha } = request.body;

        const createEmployeeService = new CreateEmployeeService();

        const employee = await createEmployeeService.execute({
            Nome: nome,
            Funcao: funcao,
            Email: email,
            Senha: senha
        });

        return response.status(201).json(employee);
    }
}


export { CreateEmployeeController };

