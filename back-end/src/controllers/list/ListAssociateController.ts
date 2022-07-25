import { Request, Response } from 'express';
import { ListAssociateService } from '../../services/list/ListAssociateService';


class ListAssociateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAssociateService = new ListAssociateService();
        const Codigo = parseInt(request.params.codigo);

        const associate = await listAssociateService.execute(Codigo);

        return response.status(200).json(associate);
    }
}


export { ListAssociateController }