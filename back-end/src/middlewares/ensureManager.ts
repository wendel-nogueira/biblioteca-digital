import { Request, Response, NextFunction} from 'express';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { EmployeeType } from '../interfaces/enums/EmployeeType';


export async function ensureManager(request: Request, response: Response, next: NextFunction) {
    const employeeRepository = new EmployeeRepository();
    
    const { codigo } = request.body;
    const employee = await employeeRepository.getById(codigo);

    if (employee.Funcao === EmployeeType.manager){
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}