import { LoanRepository } from '../../repositories/LoanRepository';


class DeleteLoanService {
    async execute(Codigo: number): Promise<void> {
        const loanRepository = new LoanRepository();
        
        if (!Codigo) {
            throw new Error('Código inválido!');
        }

        const loan = await loanRepository.getById(Codigo);

        if (!loan) {
            throw new Error('Empréstimo não encontrado!');
        }

        return await loanRepository.delete(Codigo);
    }
}


export { DeleteLoanService };