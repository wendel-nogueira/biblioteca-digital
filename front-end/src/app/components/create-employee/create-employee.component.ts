import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee = {
    name: '',
    function: '',
    email: '',
    password: ''
  };

  constructor(private employeeService: EmployeeService, private authService: AuthService, private modalService: ModalServiceService) { }

  ngOnInit(): void {
    this.authService.verifyToken();
    this.authService.verifyLoggedIn();
    this.authService.verifyManager();
  }

  verifyFields() {
    if (this.employee.name === '' || this.employee.function === '' || this.employee.email === '' || this.employee.password === '') {
      this.modalService.modalInfo('Erro', 'Preencha todos os campos!');

      return false;
    }

    return true;
  }

  createEmployee() {
    if (this.verifyFields()) {
      const employee = {
        nome: this.employee.name,
        funcao: this.employee.function,
        email: this.employee.email,
        senha: this.employee.password
      };

      this.employeeService.addEmployee(employee).subscribe(
        (data: any) => {
          this.modalService.modalInfo('Sucesso', 'Funcionári@ criado com sucesso!');

          this.employee.name = '';
          this.employee.function = '';
          this.employee.email = '';
          this.employee.password = '';
        }, (error) => {
          this.modalService.modalInfo('Erro', error.error.error);
        }
      );
    }
  }
}
