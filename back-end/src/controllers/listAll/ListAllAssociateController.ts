import { Request, Response } from 'express';
import { ListAllAssociateService } from '../../services/listAll/ListAllAssociateService';


class ListAllAssociateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllAssociateService = new ListAllAssociateService();

        const associates = await listAllAssociateService.execute();

        return response.status(200).json(associates);
    }
}


export { ListAllAssociateController }