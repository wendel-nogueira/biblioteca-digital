import { Request, Response } from 'express';
import { CreateAssociateService } from '../../services/create/CreateAssociateService';


class CreateAssociateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, endereco, email, status } = request.body;

        const createAssociateService = new CreateAssociateService();

        const associate = await createAssociateService.execute({
            Nome: nome,
            Endereco: endereco,
            Email: email,
            Status: status
        });

        return response.status(201).json(associate);
    }
}


export { CreateAssociateController };

