import { Component, OnInit } from '@angular/core';
import { AssociateService } from 'src/app/services/associate.service';
import { LoanService } from 'src/app/services/loan.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { PublicationService } from 'src/app/services/publication.service';
import { ExemplaryService } from 'src/app/services/exemplary.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {

  associates: any[] = [];
  email: string = '';
  selectedPublication: any = '';
  publications: any[] = [];
  associate: any = {};
  reserves: any[] = [];
  loans: any[] = [];
  exemplaries: any[] = [];

  constructor(private associateService: AssociateService, private loanService: LoanService, private reserveService: ReserveService, private publicationService: PublicationService, private modalService: ModalServiceService, private exemplaryService: ExemplaryService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.verifyToken();
    this.authService.verifyLoggedIn();

    this.getExemplarys();
    this.getPublications();
    this.getAssociates();
    this.getReserves();
  }

  getExemplarys() {
    this.exemplaries = [];

    this.exemplaryService.getExemplaries().subscribe(
      (data) => {
        data.forEach((exemplary: any) => {
          exemplary.lastLoan = null;
          exemplary.status = 'Disponível';

          this.publicationService.getPublication(exemplary.ISBN).subscribe(
            (data) => {
              exemplary.publication = data;
            }
          );

          this.loanService.getLoans().subscribe(
            (data) => {
              data.forEach((loan: any) => {
                if (loan.ISBN === exemplary.ISBN && loan.Nro_Exemplar === exemplary.Numero) {
                  exemplary.lastLoan = loan;

                  if (loan.Data_Devol === null) {
                    exemplary.status = 'Emprestado';
                  }
                }
              });
            }
          );

          this.exemplaries.push(exemplary);
        });
      }
    );
  }

  getPublications() {
    this.publications = [];

    this.publicationService.getPublications().subscribe(
      (data) => {
        this.publications = data;
      }, (error) => {
        this.modalService.modalInfo('Erro', 'Erro ao buscar publicações!');
      }
    );
  }

  getAssociates() {
    this.associates = [];

    this.associateService.getAssociates().subscribe(
      (data) => {
        this.associates = data;
      }
    );
  }

  getReserves() {
    this.reserves = [];

    this.reserveService.getReserves().subscribe(
      (data) => {
        data.forEach((reserve: any) => {
          if (reserve.Status === 'Avisado') {
            this.reserves.push(reserve);
          }
        });
      }
    );
  }

  updateInfo() {
    this.associate = this.associates.find(associate => associate.Email === this.email);

    if (this.associate === undefined) {
      this.modalService.modalInfo('Erro', 'Associado não encontrado!');
    }
  }

  verifyFields() {
    if (this.email === '' || this.selectedPublication === undefined || this.selectedPublication === '') {
      this.modalService.modalInfo('Erro', 'Preencha todos os campos!');

      return false;
    }

    return true;
  }

  createLoan() {
    if (this.verifyFields()) {
      const exemplaries = this.exemplaries.filter(exemplary => exemplary.publication.ISBN === this.selectedPublication && exemplary.status === 'Disponível');
      let exemplariesQuantity = exemplaries.length;

      if (exemplariesQuantity === 0) {
        this.modalService.modalInfo('Erro', 'Não há exemplares disponíveis para esta publicação!');
        return;
      }

      let isAssociate = false;

      this.reserves.forEach((reserve: any) => {
        if (reserve.Codigo_Assoc === this.associate.Codigo) {
          isAssociate = true;
        }

        if (reserve.ISBN === this.selectedPublication) {
          exemplariesQuantity--;
        }
      });

      if (!isAssociate && exemplariesQuantity === 0) {
        this.modalService.modalInfo('Erro', 'Não há exemplares disponíveis para esta publicação!');
        return;
      }

      const loan = {
        exemplar: exemplaries[0].Numero,
        isbn: exemplaries[0].ISBN,
        associado: this.associate.Codigo
      }

      this.loanService.addLoan(loan).subscribe(
        (data) => {
          console.log(data);
          this.modalService.modalInfo('Sucesso', 'Empréstimo realizado com sucesso!');

          this.getExemplarys();
          this.email = '';
        }, (error) => {
          console.log(error);
          this.modalService.modalInfo('Erro', 'Erro ao realizar empréstimo!');
        }
      );
    }
  }
}
