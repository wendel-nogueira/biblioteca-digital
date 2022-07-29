import { Component, OnInit } from '@angular/core';
import { AssociateService } from 'src/app/services/associate.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-create-associate',
  templateUrl: './create-associate.component.html',
  styleUrls: ['./create-associate.component.css']
})
export class CreateAssociateComponent implements OnInit {

  associate = {
    name: '',
    address: '',
    email: '',
    status: ''
  }

  constructor(private associateService: AssociateService, private authService: AuthService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.authService.verifyLoggedIn();
  }

  verifyFields() {
    if (this.associate.name === '' || this.associate.address === '' || this.associate.email === '' || this.associate.status === '') {
      this.modalService.modalInfo('Erro', 'Preencha todos os campos!');

      return false;
    }

    return true;
  }

  createAssociate() {
    if (this.verifyFields()) {
      const associate = {
        nome: this.associate.name,
        endereco: this.associate.address,
        email: this.associate.email,
        status: this.associate.status
      }

      this.associateService.addAssociate(associate).subscribe(
        (data: any) => {
          this.modalService.modalInfo('Sucesso', 'Associado criado com sucesso!');

          this.associate.name = '';
          this.associate.address = '';
          this.associate.email = '';
          this.associate.status = '';
        }, (error) => {
          this.modalService.modalInfo('Erro', error.error.error);
        }
      );
    }
  }
}
