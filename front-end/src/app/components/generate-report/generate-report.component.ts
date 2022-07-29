import { Component, OnInit } from '@angular/core';
import { AssociateService } from 'src/app/services/associate.service';
import { LoanService } from 'src/app/services/loan.service';
import { PublicationService } from 'src/app/services/publication.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  reports: any[] = [];
  loans: any[] = [];

  time: any = {
    'Grad': 7,
    'Posgrad': 10,
    'Prof': 14
  }

  constructor(private associateService: AssociateService, private loanService: LoanService, private publicationService: PublicationService, private authService: AuthService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.authService.verifyLoggedIn();
    this.getLoans();
  }

  getLoans() {
    this.loans = [];

    this.loanService.getLoans().subscribe(
      (data: any) => {
        data.forEach((loan: any) => {
          let associate: any;
          let publication: any;

          this.associateService.getAssociate(loan.Codigo_Assoc).subscribe(
            (data: any) => {
              associate = data;
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
            }, (error: any) => {
            }
          );

          this.publicationService.getPublication(loan.ISBN).subscribe(
            (data: any) => {
              publication = data;
              loan.publication = publication;
            }, (error: any) => {

            }
          );

          this.loans.push(loan);
        })
      }, (error: any) => {
        this.modalService.modalInfo('Erro', 'Não foi possível carregar os empréstimos.');
      }
    );
  }

  reloadContent() {
    this.reports = [];

    this.loans.forEach((loan: any) => {
      if (loan.late) {
        this.reports.push(loan);
      }
    });

    if (this.reports.length === 0) {
      this.modalService.modalInfo('Atenção', 'Não há empréstimos atrasados.');
    }
  }
}
