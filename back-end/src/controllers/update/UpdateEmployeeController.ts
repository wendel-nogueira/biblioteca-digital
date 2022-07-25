import { Request, Response } from 'express';
import { UpdateEmployeeService } from '../../services/update/UpdateEmployeeService';


class UpdateEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, funcao, email, senha } = request.body;
        const Codigo = parseInt(request.params.codigo);

        const updateEmployeeService = new UpdateEmployeeService();

        const employee = await updateEmployeeService.execute(Codigo, {
            Nome: nome,
            Funcao: funcao,
            Email: email,
            Senha: senha
        });

        return response.status(200).json(employee);
    }
}


export { UpdateEmployeeController };

