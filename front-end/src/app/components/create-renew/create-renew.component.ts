import { Component, OnInit } from '@angular/core';
import { AssociateService } from 'src/app/services/associate.service';
import { LoanService } from 'src/app/services/loan.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-create-renew',
  templateUrl: './create-renew.component.html',
  styleUrls: ['./create-renew.component.css']
})
export class CreateRenewComponent implements OnInit {

  email = '';
  associates: any[] = [];
  loans: any[] = [];
  selectedLoan: any = '';
  reserves: any[] = [];

  time: any = {
    'Grad': 7,
    'Posgrad': 10,
    'Prof': 14
  }

  constructor(private associateService: AssociateService, private loanService: LoanService, private reserveService: ReserveService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.getAssociates();
  }

  getAssociates() {
    this.associateService.getAssociates().subscribe(
      (data: any[]) => {
        this.associates = data;
      }, (error) => {
        this.modalService.modalInfo('Erro', error.error.error);
      }
    );
  }

  getReserves() {
    this.reserveService.getReserves().subscribe(
      (data: any[]) => {
        this.reserves = data;
      }, (error) => {
        this.modalService.modalInfo('Erro', error.error.error);
      }
    );
  }

  verifyFields() {
    if (this.email === '' || this.selectedLoan === undefined || this.selectedLoan === '') {
      this.modalService.modalInfo('Erro', 'Preencha todos os campos!');

      return false;
    }

    return true;
  }

  updateInfo() {
    const associate: any = this.associates.find(associate => associate.Email === this.email);
    const today = new Date();

    this.loans = [];
    this.selectedLoan = '';

    if (this.email === '') {
      return;
    }

    if (associate) {
      this.getReserves();

      this.loanService.getLoans().subscribe(
        (data: any[]) => {
          data.forEach(loan => {
            const dev: Date = new Date(loan.Data_Emp);
            const reserveExi = this.reserves.find(r => r.ISBN === loan.ISBN && r.Status === 'Iniciado');

            dev.setDate(dev.getDate() + this.time[associate.Status]);

            if (associate.Codigo === loan.Codigo_Assoc && (today.getDate() === dev.getDate() && today.getMonth() === dev.getMonth() && today.getFullYear() === dev.getFullYear()) && !reserveExi) {
              this.loans.push(loan);
            }
          });

          if (this.loans.length === 0) {
            this.modalService.modalInfo('Erro', 'Não há empréstimos para renovar!');
          }
        }
      );
    } else {
      this.modalService.modalInfo('Erro', 'Associado não encontrado!');

      return;
    }

  }

  renewLoan() {
    const data = new Date();
    const renew = {
      data_emprestimo: data,
    }

    if (this.verifyFields()) {
      this.loanService.updateLoan(this.selectedLoan, renew).subscribe(
        (data: any) => {
          this.modalService.modalInfo('Sucesso', 'Empréstimo renovado com sucesso!');

          this.selectedLoan = '';
          this.email = '';
        }, (error) => {
          this.modalService.modalInfo('Erro', error.error.error);
        }
      );
    }
  }
}
