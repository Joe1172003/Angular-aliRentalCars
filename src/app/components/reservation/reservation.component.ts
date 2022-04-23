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
  rid;
  
  constructor(private reservationService: ReservationService, private router: Router) { 
    this.car = JSON.parse(localStorage.getItem('car'));
    this.user = JSON.parse(localStorage.getItem('user'));
    this.reservation = new ReservationModel('','')
  }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log('entro')
    this.reservationService.saveReservation(this.reservation, this.car._id).subscribe((res: any)=>{
      console.log(4)
      if(res.message){
        console.log(1)
        alert(res.message)
      }else if(res.Reservacion){
        localStorage.setItem('reser', JSON.stringify(res.Reservacion._id))
        console.log(2)
        alert('Reservacion Hecha')
      }else{
        console.log(3)
        alert('Ha ocurrido un error Desconocido')
      }
    })
  }

  crearPDF(){
    this.rid = localStorage.getItem('reser').replace(/['"]+/g,'');
    this.reservationService.CrearPDF(this.rid).subscribe((res:any) =>{
      if(res.message){
        alert('PDF Generado')
      }
    })
  }

}
