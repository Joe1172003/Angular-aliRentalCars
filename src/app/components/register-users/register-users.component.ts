import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user/user-services.service';
import { UserModel } from 'src/app/models/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {

  user: UserModel

  constructor(private userService: UserServicesService, private router: Router) { 
    this.user = new UserModel('', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {
  }

  registerUser(){
    if(this.user.usuario != '' && this.user.password != '' && this.user.nombre != '' && this.user.apellido != ''
      && this.user.telefono != '' && this.user.dpi != '' && this.user.correo != ''){
          this.userService.register(this.user).subscribe((res: any)=>{
            if(res.message){
              alert(res.message)
            }else if(res.user){
              alert('Nuevo Usuario Registrado')
              this.router.navigateByUrl('login')
            }else{
              alert('Ha ocurrido un error desconocido, intentelo mas tarde')
            }
          })
    }else{
      alert('Ingresa todos los datos minimos para registrarte')
    }
  }
}
