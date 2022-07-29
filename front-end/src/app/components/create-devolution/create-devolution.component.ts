import { Component, OnInit } from '@angular/core';
import { AssociateService } from 'src/app/services/associate.service';
import { LoanService } from 'src/app/services/loan.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-create-devolution',
  templateUrl: './create-devolution.component.html',
  styleUrls: ['./create-devolution.component.css']
})
export class CreateDevolutionComponent implements OnInit {

  allLoans: any[] = [];
  loans: any[] = [];
  associates: any[] = [];
  reserves: any[] = [];
  searchTerm: string = '';

  time: any = {
    'Grad': 7,
    'Posgrad': 10,
    'Prof': 14
  }

  constructor(private associateService: AssociateService, private loanService: LoanService, private reserveService: ReserveService, private authService: AuthService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.authService.verifyLoggedIn();

    this.getLoans();
    this.getReserves();
    this.getAssociates();
  }

  getLoans() {
    this.allLoans = [];
    this.loans = [];

    this.loanService.getLoans().subscribe(
      (loans: any[]) => {
        this.allLoans = loans;

        this.allLoans.forEach(loan => {
          this.associateService.getAssociate(loan.Codigo_Assoc).subscribe(
            (associate: any) => {
              if (!loan.Data_Devol) {
                loan.associate = associate;

                const today = new Date();
                const devolution = new Date(loan.Data_Emp);
                devolution.setDate(devolution.getDate() + this.time[associate.Status]);

                if (!loan.Data_Devol && today > devolution) {
                  loan.status = 'Atrasado';
                  loan.late = true;
                } else {
                  loan.status = 'Em dia';
                  loan.late = false;
                }

                this.loans.push(loan);
              } else {
                delete this.allLoans[this.allLoans.indexOf(loan)];
              }
            }
          );
        });
      }, (error) => {
        this.modalService.modalInfo('Erro', 'Não foi possível carregar os empréstimos.');
      }
    );
  }

  getReserves() {
    this.reserves = [];

    this.reserveService.getReserves().subscribe(
      (reserves: any[]) => {
        this.reserves = reserves;
      }
    );
  }

  getAssociates() {
    this.associates = [];

    this.associateService.getAssociates().subscribe(
      (associates: any[]) => {
        this.associates = associates;
      }
    );
  }

  reloadContent() {
    this.getLoans();
  }

  searchLoan() {
    this.loans = this.allLoans.filter(loan => {
      return loan.ISBN.toLowerCase().includes(this.searchTerm.toLowerCase()) || loan.associate.Email.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  createDevolution(codigo: number) {
    const loan = this.loans.find(loan => loan.Codigo == codigo);
    const associate = this.associates.find(associate => associate.Codigo == loan.Codigo_Assoc);
    const reserves = this.reserves.filter(reserve => reserve.ISBN == loan.ISBN && reserve.Status === 'Iniciado');

    this.modalService.modalConfirm('Atenção', 'Deseja realmente devolver o empréstimo?')
    .then((confirmed) => {
      if (confirmed) {
        this.loanService.updateLoan(codigo, { data_devolucao: new Date() }).subscribe(
          (data: any) => {
            this.modalService.modalInfo('Sucesso', 'Empréstimo devolvido com sucesso.');
            this.reloadContent();

            const today = new Date();
            const devolution = new Date(loan.Data_Emp);
            devolution.setDate(devolution.getDate() + this.time[associate.Status]);

            const days = Math.round((today.getTime() - devolution.getTime()) / (1000 * 60 * 60 * 24));

            if (today > devolution) {
              this.modalService.modalInfo('Atenção', 'O empréstimo está atrasado em ' + days + ' dias. ' + 'Sua multa é de R$ ' + (days * 1).toFixed(2) + '.');
            }

            if (reserves[0]) {
              this.reserveService.updateReserve(reserves[0].Codigo, { status: 'Avisado' }).subscribe(
                (data: any) => {
                  this.modalService.modalInfo('Sucesso', 'Um associado presente na lista de reservas foi avisado.');
                }
              );
            }
          }, (error) => {
            this.modalService.modalInfo('Erro', error.error.error);
          }
        );
      }
    })
    .catch((error) => {});
  };
}
