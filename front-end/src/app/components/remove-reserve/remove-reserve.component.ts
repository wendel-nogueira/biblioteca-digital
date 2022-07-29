import { Component, OnInit } from '@angular/core';
import { AssociateService } from 'src/app/services/associate.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-remove-reserve',
  templateUrl: './remove-reserve.component.html',
  styleUrls: ['./remove-reserve.component.css']
})
export class RemoveReserveComponent implements OnInit {

  associates: any[] = [];
  allReserves: any[] = [];
  reserves: any[] = [];
  searchTerm: string = '';

  constructor(private associateService: AssociateService, private reserveService: ReserveService, private authService: AuthService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.authService.verifyToken();
    this.authService.verifyLoggedIn();

    this.getReserves();
  }

  getAssociates() {
    this.associateService.getAssociates().subscribe(
      (associates: any[]) => {
        this.associates = associates;
      }, (error) => {
        this.modalService.modalInfo('Erro', error.error.error);
      }
    );
  }

  getReserves() {
    this.getAssociates();

    this.allReserves = [];

    this.reserveService.getReserves().subscribe(
      (reserves: any[]) => {
        reserves.forEach(reserve => {
          const associate = this.associates.find(associate => associate.Codigo === reserve.Codigo_Assoc);

          if (associate && reserve.Status === 'Avisado') {
            const reserveInfo = {
              codigo: reserve.Codigo,
              isbn: reserve.ISBN,
              associado: associate.Email,
              data: reserve.Data,
              status: reserve.Status
            };

            this.allReserves.push(reserveInfo);
          }
        });

        this.reserves = this.allReserves;
      }, (error) => {
        this.modalService.modalInfo('Erro', error.error.error);
      }
    );
  }

  removeReserve(codigo: number) {
    const reserve = {
      status: 'Anulado'
    }

    this.modalService.modalConfirm('Atenção', 'Deseja realmente anular esta reserva?')
      .then((confirmed) => {
        if (confirmed) {
          this.reserveService.updateReserve(codigo, reserve).subscribe(
            (reserve: any) => {
              this.modalService.modalInfo('Sucesso', 'Reserva anulada com sucesso!');

              this.reloadReserves();
            }, (error) => {
              this.modalService.modalInfo('Erro', error.error.error);
            }
          );
        }
      })
      .catch((error) => {});
  };

  searchReserve() {
    this.reserves = this.allReserves.filter(reserve => {
      return reserve.isbn.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  reloadReserves() {
    this.reserves = [];
    this.getReserves();
  }
}
