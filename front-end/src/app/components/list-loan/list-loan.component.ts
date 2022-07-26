import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../../services/associate.service';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent implements OnInit {

  constructor(private associateService: AssociateService, private loanService: LoanService) { }

  ngOnInit(): void {
    this.getLoans();
  }

  allLoans: any[] = [];
  loans: any[] = [];

  public getLoans() {
    this.loanService.getLoans().subscribe(
      (data) => {
        this.allLoans = data;
        this.getAssociates();
        this.loans = data;
        console.log(this.loans);
      }
    );
  }


  public getAssociates() {
    this.allLoans.forEach(loan => {
      this.associateService.getAssociate(loan['Codigo_Assoc']).subscribe(
        (data) => {
          loan['associado'] = data;
          this.verifyStatus();
        }
      );
    });
  }


  public verifyStatus() {
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


  search = '';


  public searchLoan() {
    if (this.search === '') {
      this.loans = this.allLoans;
      return;
    }

    this.loans = this.allLoans.filter(
      (loan: any) => loan['ISBN'].toLowerCase().includes(this.search.toLowerCase())
    );
  }



}
