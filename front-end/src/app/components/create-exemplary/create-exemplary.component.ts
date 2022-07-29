import { Component, OnInit } from '@angular/core';
import { ExemplaryService } from 'src/app/services/exemplary.service';
import { PublicationService } from 'src/app/services/publication.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-create-exemplary',
  templateUrl: './create-exemplary.component.html',
  styleUrls: ['./create-exemplary.component.css']
})
export class CreateExemplaryComponent implements OnInit {

  exemplary = {
    number: null,
    isbn: '',
    price: null
  };

  constructor(private exemplaryService: ExemplaryService, private publicationService: PublicationService, private authService: AuthService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.authService.verifyLoggedIn();
    this.getPublications();
  }

  publications: any[] = [];

  getPublications() {
    this.publicationService.getPublications().subscribe(
      (data: any) => {
        this.publications = data;
      }, (error) => {
        this.modalService.modalInfo('Erro', error.error.error);
      });
  }

  verifyFields() {
    if (this.exemplary.number === null || this.exemplary.isbn === '' || this.exemplary.price === null) {
      this.modalService.modalInfo('Erro', 'Preencha todos os campos!');

      return false;
    }

    return true;
  }

  createExemplary() {
    if (this.verifyFields()) {
      const exemplary = {
        numero: this.exemplary.number,
        isbn: this.exemplary.isbn,
        preco: this.exemplary.price
      }

      this.exemplaryService.addExemplary(exemplary).subscribe(
        (data: any) => {
          this.modalService.modalInfo('Sucesso', 'Exemplar criado com sucesso!');

          this.exemplary.number = null;
          this.exemplary.isbn = '';
          this.exemplary.price = null;
        }, (error) => {
          this.modalService.modalInfo('Erro', error.error.error);
        }
      );
    }
  }
}
