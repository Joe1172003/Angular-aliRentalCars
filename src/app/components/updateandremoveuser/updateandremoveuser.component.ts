import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateandremoveuser',
  templateUrl: './updateandremoveuser.component.html',
  styleUrls: ['./updateandremoveuser.component.css']
})
export class UpdateandremoveuserComponent implements OnInit {
  user;
  value: number = 0;

  constructor(private userService: UserServicesService, private router: Router) { 
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit(): void {
  }

  updateUser(){
    this.userService.updateUsers(this.user).subscribe((res: any)=>{
      if(res.user){
        alert('Usuario Actualizado');
        this.router.navigateByUrl('');
      }else{
        alert('Usuario no actualizado, intentelo de nuevo')
      }
    })
  }

}
