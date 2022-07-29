import { Component, OnInit } from '@angular/core';
import { AssociateService } from 'src/app/services/associate.service';
import { PublicationService } from 'src/app/services/publication.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-create-reserve',
  templateUrl: './create-reserve.component.html',
  styleUrls: ['./create-reserve.component.css']
})
export class CreateReserveComponent implements OnInit {

  reserve = {
    email: '',
    selectedPub: ''
  };

  publications: any[] = [];
  associates: any[] = [];

  constructor(private associateService: AssociateService, private publicationService: PublicationService, private reserveService: ReserveService, private authService: AuthService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.authService.verifyLoggedIn();

    this.getPublications();
    this.getAssociates();
  }

  getPublications() {
    this.publicationService.getPublications().subscribe(
      (data: any) => {
        this.publications = data;
      }, (error) => {
        this.modalService.modalInfo('Erro', error.error.error);
      }
    );
  }

  getAssociates() {
    this.associateService.getAssociates().subscribe(
      (data: any) => {
        this.associates = data;
      }, (error) => {
        this.modalService.modalInfo('Erro', error.error.error);
      }
    );
  }

  createReserve() {
    const exist = this.associates.find(associate => associate.Email === this.reserve.email);

    if (exist) {
      const publication = this.publications.find(pub => pub.ISBN === this.reserve.selectedPub);

      const reserve = {
        isbn: publication.ISBN,
        associado: exist.Codigo,
        status: 'Iniciado'
      };

      this.reserveService.addReserve(reserve).subscribe(
        (data: any) => {
          this.modalService.modalInfo('Sucesso', 'Reserva criada com sucesso!');

          this.reserve.email = '';
          this.reserve.selectedPub = '';
        }, (error) => {
          this.modalService.modalInfo('Erro', error.error.error);
        }
      );
    } else {
      this.modalService.modalInfo('Erro', 'Associado não encontrado!');
    }
  }
}
