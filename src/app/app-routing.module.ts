import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarsComponent } from './components/add-cars/add-cars.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { UpdateandremovecarComponent } from './components/updateandremovecar/updateandremovecar.component';
import { UpdateandremoveuserComponent } from './components/updateandremoveuser/updateandremoveuser.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'registerUser', component: RegisterUsersComponent},
  {path: 'addCar', component: AddCarsComponent},
  {path: 'update&deleteCar', component: UpdateandremovecarComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'update&deleteUser', component: UpdateandremoveuserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listCars', component: ListCarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
