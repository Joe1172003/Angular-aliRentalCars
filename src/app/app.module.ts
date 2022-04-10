import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { AddCarsComponent } from './components/add-cars/add-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUsersComponent,
    AddCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
