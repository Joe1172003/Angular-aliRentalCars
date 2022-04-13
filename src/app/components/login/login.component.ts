import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin;

  constructor(private userService: UserServicesService, private router: Router) { 
    this.userLogin = {
      email: '',
      password: '',
      gettoken: 'true'
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.userLogin.email != ''){
      if(this.userLogin.password != ''){
        this.userService.login(this.userLogin).subscribe((res: any)=>{
          if(res.message){
            alert(res.message);
          }else if(res.token){
            localStorage.setItem('tokenUsers', res.token);
            console.log(res.token, res.user)
            res.user.password = ""
            localStorage.setItem('user', JSON.stringify(res.user));
            sessionStorage.setItem('tokenUsers', res.token)
            alert('Bienvenido' + res.user.usuario)
            this.router.navigateByUrl('');
          }else{
            alert('Ha ocurrido un error')
          }
        })
      }else{
        alert('Ingrese una contraseña')
      }
    }else{
      alert('Ingrese un correo electronico')
    }
  }

}
