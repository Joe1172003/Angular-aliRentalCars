import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServicesService } from 'src/app/services/car/car-services.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  cars: [];
  

  constructor(private carService: CarServicesService, private router: Router) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(res =>{
      this.cars = res.vehiculosFound
    })
  }

  onSubmit(){
    this.router.navigateByUrl('reservation')
  }

  getCar(automovilId){
    this.carService.getCar(automovilId).subscribe((res:any) =>{
      if(res.message){
        alert('carro encontrado');
        localStorage.setItem('car', JSON.stringify(res.vFound))
        this.router.navigateByUrl('reservation')
      }else{
        alert('Error Desconocido')
      }
    })
  }
}
