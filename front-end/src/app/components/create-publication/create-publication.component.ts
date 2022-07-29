import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  publication = {
    isbn: '',
    title: '',
    author: '',
    publishingCompany: ''
  };

  constructor(private publicationService: PublicationService, private authService: AuthService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.authService.verifyLoggedIn();
  }

  verifyFields() {
    if (this.publication.isbn === '' || this.publication.title === '' || this.publication.author === '' || this.publication.publishingCompany === '') {
      this.modalService.modalInfo('Erro', 'Preencha todos os campos!');

      return false;
    }

    return true;
  }

  createPublication() {
    if (this.verifyFields()) {
      const publication = {
        isbn: this.publication.isbn,
        titulo: this.publication.title,
        autor: this.publication.author,
        editora: this.publication.publishingCompany
      }

      this.publicationService.addPublication(publication).subscribe(
        (data: any) => {
          this.modalService.modalInfo('Sucesso', 'Publicação criada com sucesso!');

          this.publication.isbn = '';
          this.publication.title = '';
          this.publication.author = '';
          this.publication.publishingCompany = '';
        }, (error) => {
          this.modalService.modalInfo('Erro', error.error.error);
        }
      );
    }
  }
}
