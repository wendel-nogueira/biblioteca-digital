import { Request, Response } from 'express';
import { UpdateAssociateService } from '../../services/update/UpdateAssociateService';


class UpdateAssociateController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nome, endereco, email, status } = request.body;
        const Codigo = parseInt(request.params.codigo);

        const updateAssociateService = new UpdateAssociateService();

        const associate = await updateAssociateService.execute(Codigo, {
            Nome: nome,
            Endereco: endereco,
            Email: email,
            Status: status
        });

        return response.status(200).json(associate);
    }
}


export { UpdateAssociateController };

