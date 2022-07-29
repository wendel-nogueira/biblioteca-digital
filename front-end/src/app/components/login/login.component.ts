import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken() != null) {
      this.router.navigate(['/']);
    }
  }

  verifyFields() {
    if (this.user.email === '' || this.user.password === '') {
      this.modalService.modalInfo('Erro', 'Preencha todos os campos!');

      return false;
    }

    return true;
  }


  login() {
    if (this.verifyFields()) {
      this.authService.login(this.user.email, this.user.password).subscribe(
        (data) => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveType(data.type);

          window.location.reload();
        }, (err) => {
          this.modalService.modalInfo('Erro', err.error.error);
        }
      );
    }
  }
}
