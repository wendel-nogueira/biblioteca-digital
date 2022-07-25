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
        const loanExists = (await loans).find(loan => loan.Nro_Exemplar === Nro_Exemplar);

        if (loanExists) {
            throw new Error('Exemplar já emprestado!');
        }

        const Data_Emp = new Date();
        let Data_Devol = new Date();
        

        const associate = await associateRepository.getById(Codigo_Assoc);

        if (!associate) {
            throw new Error('Associado não encontrado!');
        }

        if (associate.Status == AssociateStatus.graduated) {
            Data_Devol.setDate(Data_Emp.getDate() + 7);
        } else if (associate.Status == AssociateStatus.posGraduated) {
            Data_Devol.setDate(Data_Emp.getDate() + 10);
        } else {
            Data_Devol.setDate(Data_Emp.getDate() + 14);
        }

        const loan = {
            Nro_Exemplar,
            ISBN,
            Codigo_Assoc,
            Data_Emp,
            Data_Devol
        };

        return await loanRepository.create(loan);
    }
}


export { CreateLoanService };