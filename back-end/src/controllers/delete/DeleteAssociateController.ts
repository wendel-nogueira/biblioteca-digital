import { Request, Response } from 'express';
import { DeleteAssociateService } from '../../services/delete/DeleteAssociateService';


class DeleteAssociateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteAssociateService = new DeleteAssociateService();
        const codigo = parseInt(request.params.codigo);

        await deleteAssociateService.execute(codigo);

        return response.status(200).json({ message: 'Associado deletado com sucesso!' });
    }
}


export { DeleteAssociateController };

