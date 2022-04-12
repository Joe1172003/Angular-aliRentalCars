import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { AddCarsComponent } from './components/add-cars/add-cars.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateandremovecarComponent } from './components/updateandremovecar/updateandremovecar.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { UpdateandremoveuserComponent } from './components/updateandremoveuser/updateandremoveuser.component';
import { LoginComponent } from './components/login/login.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';

import { UserServicesService } from './services/user/user-services.service';
import { CarServicesService } from './services/car/car-services.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUsersComponent,
    AddCarsComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    UpdateandremovecarComponent,
    ReservationComponent,
    UpdateandremoveuserComponent,
    LoginComponent,
    ListCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserServicesService,
    CarServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
