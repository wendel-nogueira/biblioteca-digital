import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAssociateComponent } from './components/create-associate/create-associate.component';
import { CreateDevolutionComponent } from './components/create-devolution/create-devolution.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { CreateExemplaryComponent } from './components/create-exemplary/create-exemplary.component';
import { CreateLoanComponent } from './components/create-loan/create-loan.component';
import { CreatePublicationComponent } from './components/create-publication/create-publication.component';
import { CreateRenewComponent } from './components/create-renew/create-renew.component';
import { CreateReserveComponent } from './components/create-reserve/create-reserve.component';
import { ListLoanComponent } from './components/list-loan/list-loan.component';
import { ListPublicationComponent } from './components/list-publication/list-publication.component';
import { RemoveReserveComponent } from './components/remove-reserve/remove-reserve.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'associado', component: CreateAssociateComponent },
  { path: 'devolucao', component: CreateDevolutionComponent },
  { path: 'funcionarios', component: CreateEmployeeComponent },
  { path: 'exemplar', component: CreateExemplaryComponent },
  { path: 'emprestimo', component: CreateLoanComponent },
  { path: 'publicacao', component: CreatePublicationComponent },
  { path: 'renovar', component: CreateRenewComponent },
  { path: 'reservar', component: CreateReserveComponent },
  { path: 'emprestimos', component: ListLoanComponent },
  { path: 'publicacoes', component: ListPublicationComponent },
  { path: 'remover-reserva', component: RemoveReserveComponent },
  { path: 'relatorio', component: GenerateReportComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
