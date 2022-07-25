import { Request, Response } from 'express';
import { DeleteReserveService } from '../../services/delete/DeleteReserveService';


class DeleteReserveController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteReserveService = new DeleteReserveService();
        const codigo = parseInt(request.params.codigo);

        await deleteReserveService.execute(codigo);

        return response.status(200).json({ message: 'Reserva deletada com sucesso!' });
    }
}


export { DeleteReserveController };

