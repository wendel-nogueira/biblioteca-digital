import { LoanRepository } from '../../repositories/LoanRepository';


class UpdateLoanService {
    async execute(Codigo: number, Nro_Exemplar: number, ISBN: string, Codigo_Assoc: number): Promise<void> {
        const loanRepository = new LoanRepository();
        let update = { Nro_Exemplar, ISBN, Codigo_Assoc };

        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        Object.keys(update).forEach(key => {
            if (update[key] === undefined) {
                delete update[key];
            }
        });

        return await loanRepository.update(Codigo, update);
    }
}


export { UpdateLoanService };