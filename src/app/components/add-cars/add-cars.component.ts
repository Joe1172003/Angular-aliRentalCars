import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/car-model';
import { CarServicesService } from 'src/app/services/car/car-services.service';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.css']
})
export class AddCarsComponent implements OnInit {
  car: CarModel
  constructor(private carService: CarServicesService, private router: Router) { 
    this.car = new CarModel('', '','','','','','');
  }

  ngOnInit(): void {
  }

  registerCar(){
    if(this.car.marca != '' && this.car.anio != '' && this.car.tarjetaDeCirculacion != ''
      && this.car.transmision != '' && this.car.precio != '' && this.car.tipoDeVehiculo != '' && this.car.modelo != ''){
          this.carService.saveCar(this.car).subscribe((res: any)=>{
            if(res.message){
              alert(res.message)
            }else if(res.vehiculoSaved){
              alert('Nuevo Carro Registrado')
              this.router.navigateByUrl('/home')
            }else{
              alert('Ha ocurrido un error desconocido, intentelo mas tarde')
            }
          })
    }else{
      alert('Ingresa todos los datos minimos para registrarte')
    }
  }



}
