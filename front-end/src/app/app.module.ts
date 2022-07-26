import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreatePublicationComponent } from './components/create-publication/create-publication.component';
import { CreateExemplaryComponent } from './components/create-exemplary/create-exemplary.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ListPublicationComponent } from './components/list-publication/list-publication.component';
import { CreateReserveComponent } from './components/create-reserve/create-reserve.component';
import { CreateLoanComponent } from './components/create-loan/create-loan.component';
import { CreateDevolutionComponent } from './components/create-devolution/create-devolution.component';
import { ListLoanComponent } from './components/list-loan/list-loan.component';
import { CreateRenewComponent } from './components/create-renew/create-renew.component';
import { CreateAssociateComponent } from './components/create-associate/create-associate.component';
import { RemoveReserveComponent } from './components/remove-reserve/remove-reserve.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CreatePublicationComponent,
    CreateExemplaryComponent,
    CreateEmployeeComponent,
    ListPublicationComponent,
    CreateReserveComponent,
    CreateLoanComponent,
    CreateDevolutionComponent,
    ListLoanComponent,
    CreateRenewComponent,
    CreateAssociateComponent,
    RemoveReserveComponent,
    GenerateReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
