import { LoanRepository } from '../../repositories/LoanRepository';
import { AssociateRepository } from '../../repositories/AssociateRepository';
import { AssociateStatus } from '../../interfaces/enums/AssociateStatus';


class CreateLoanService {
    async execute(Nro_Exemplar: number, ISBN: string, Codigo_Assoc: number): Promise<void> {
        const loanRepository = new LoanRepository();
        const associateRepository = new AssociateRepository();

        if (!Nro_Exemplar || !ISBN || !Codigo_Assoc) {
            throw new Error('Dados inválidos!');
        }

        const loans = loanRepository.getAll();
        const loanExists = (await loans).find(loan => loan.Nro_Exemplar === Nro_Exemplar && loan.Data_Devol === null);

        if (loanExists) {
            throw new Error('Exemplar já emprestado!');
        }

        const Data_Emp = new Date();
        const associate = await associateRepository.getById(Codigo_Assoc);

        if (!associate) {
            throw new Error('Associado não encontrado!');
        }

        const loan = {
            Nro_Exemplar,
            ISBN,
            Codigo_Assoc,
            Data_Emp
        };

        const createLoan = await loanRepository.create(loan);

        if (!createLoan.dataValues) {
            throw new Error('Emprestimo já cadastrado!');
        }
        
        return createLoan;
    }
}


export { CreateLoanService };