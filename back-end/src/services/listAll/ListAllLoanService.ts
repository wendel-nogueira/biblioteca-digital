import { LoanRepository } from '../../repositories/LoanRepository';


class ListAllLoanService {
    async execute(): Promise<Array<any>> {
        const loanRepository = new LoanRepository();
        
        const loans = await loanRepository.getAll();

        if (loans.length === 0) {
            throw new Error('Sem empréstimos!');
        }

        return loans;
    }
}


export { ListAllLoanService };