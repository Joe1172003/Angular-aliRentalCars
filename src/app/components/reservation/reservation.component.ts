import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationModel } from 'src/app/models/reservation-model';
import { ReservationService } from 'src/app/services/reservation/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  car;
  user;
  reservation: ReservationModel
  dayInit;
  dayFinal;
  
  constructor(private reservationService: ReservationService, private router: Router) { 
    this.car = JSON.parse(localStorage.getItem('car'));
    this.user = JSON.parse(localStorage.getItem('user'));
    this.reservation = new ReservationModel('','','','','','')
  }

  ngOnInit(): void {
  }


  onSubmit(){
    let diff = Number(new Date(this.dayFinal).getDay()) - Number(new Date(this.dayInit).getDay())
    console.log(diff);
    this.reservationService.saveReservation(this.reservation, this.user._id).subscribe((res: any)=>{
      if(res.message){
        alert(res.message)
      }else if(res.Reservacion){
        alert('Reservacion Hecha')
        this.router.navigateByUrl('/home')
      }else{
        alert('Ha ocurrido un error Desconocido')
      }
    })
  }

}
