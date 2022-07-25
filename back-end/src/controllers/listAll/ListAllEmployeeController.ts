import { Request, Response } from 'express';
import { ListAllEmployeeService } from '../../services/listAll/ListAllEmployeeService';


class ListAllEmployeeController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllEmployeeService = new ListAllEmployeeService();

        const employees = await listAllEmployeeService.execute();

        return response.status(200).json(employees);
    }
}


export { ListAllEmployeeController }