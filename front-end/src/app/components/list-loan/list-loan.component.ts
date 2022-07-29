import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../../services/associate.service';
import { LoanService } from '../../services/loan.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent implements OnInit {

  allLoans: any[] = [];
  loans: any[] = [];
  searchTerm: string = '';

  constructor(private associateService: AssociateService, private loanService: LoanService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.getLoans();
  }

  getLoans() {
    this.loanService.getLoans().subscribe(
      (data) => {
        this.allLoans = data;
        this.getAssociates();
      }, (error) => {
        this.modalService.modalInfo('Erro', error.error.error);
      }
    );
  }

  getAssociates() {
    this.allLoans.forEach(loan => {
      this.associateService.getAssociate(loan['Codigo_Assoc']).subscribe(
        (data) => {
          loan['associate'] = data;
          this.verifyStatus();
        }, (error) => {
          this.modalService.modalInfo('Erro', error.error.error);
        }
      );
    });
  }

  verifyStatus() {
    this.allLoans.forEach(loan => {
      const dia = new Date();
      const dev = new Date(loan['Data_Devol']);

      if (dev.getTime() < dia.getTime()) {
        loan['status'] = 'Devolvido';
      } else {
        loan['status'] = 'Em atraso';
      }
    });
  }

  searchLoan() {
    this.loans = [];

    if (this.searchTerm === '') {
      this.modalService.modalInfo('Erro', 'Por favor, informe um nome ou email.');

      return;
    }

    this.loans = this.allLoans.filter(loan => {
      return loan.associate.Nome.toLowerCase().includes(this.searchTerm.toLowerCase()) || loan.associate.Email.toLowerCase().includes(this.searchTerm.toLowerCase());
    });

    if (this.loans.length === 0) {
      this.modalService.modalInfo('Erro', 'Nenhum empréstimo encontrado.');
    }
  }

  reloadContent() {
    this.getLoans();
    this.loans = [];
  }
}
