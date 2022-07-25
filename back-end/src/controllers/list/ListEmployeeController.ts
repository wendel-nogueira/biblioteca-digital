import { Request, Response } from 'express';
import { ListEmployeeService } from '../../services/list/ListEmployeeService';


class ListEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listEmployeeService = new ListEmployeeService();
        const Codigo = parseInt(request.params.codigo);

        const employee = await listEmployeeService.execute(Codigo);

        return response.status(200).json(employee);
    }
}


export { ListEmployeeController }