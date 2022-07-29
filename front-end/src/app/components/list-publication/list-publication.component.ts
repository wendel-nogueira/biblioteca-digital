import { Component, OnInit } from '@angular/core';
import { ExemplaryService } from 'src/app/services/exemplary.service';
import { PublicationService } from '../../services/publication.service';
import { LoanService } from './../../services/loan.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.css']
})
export class ListPublicationComponent implements OnInit {

  allExemplaries: any[] = [];
  exemplaries: any[] = [];
  loans: any[] = [];
  publications: any[] = [];

  search: any = '';

  constructor(private exemplaryService: ExemplaryService, private publicationService: PublicationService, private loanService: LoanService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.getExemplarys();
    this.reloadContent();
  }

  getExemplarys() {
    this.allExemplaries = [];

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

          this.allExemplaries.push(exemplary);
        });
      }
    );
  }

  reloadContent() {
    this.exemplaries = [];
  }

  searchExemplary() {
    this.exemplaries = [];

    if (this.search === '') {
      this.modalService.modalInfo('Erro', 'Por favor, informe um ISBN ou Título.');

      return;
    }

    this.allExemplaries.forEach((exemplary: any) => {
      if (exemplary.ISBN.toLowerCase().includes(this.search.toLowerCase()) || exemplary.publication.Titulo.toLowerCase().includes(this.search.toLowerCase())) {
        this.exemplaries.push(exemplary);
      }
    });
  }
}
