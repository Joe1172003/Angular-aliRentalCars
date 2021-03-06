import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServicesService } from 'src/app/services/car/car-services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  cars: [];
  
  constructor(private carService: CarServicesService, private router: Router) { }

  ngOnInit(): void {
    this.getCars3()
  }

  getCars3(){
    this.carService.getCars3().subscribe(res =>{
      this.cars = res.vehiculosFound3
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
