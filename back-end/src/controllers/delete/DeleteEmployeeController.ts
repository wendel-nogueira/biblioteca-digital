import { Request, Response } from 'express';
import { DeleteEmployeeService } from '../../services/delete/DeleteEmployeeService';


class DeleteEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteEmployeeService = new DeleteEmployeeService();
        const codigo = parseInt(request.params.codigo);

        await deleteEmployeeService.execute(codigo);

        return response.status(200).json({ message: 'Funcionário deletado com sucesso!' });
    }
}


export { DeleteEmployeeController };

