import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: string;
  user: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.token = localStorage.getItem('tokenUsers');
    if(this.token == null){
      console.log('No estas logeado, por favor inicia sesión');
    }
  }

  onSubmit(){
    this.router.navigateByUrl('registerUser')
  }

  logOut(){
    this.token = '';
    localStorage.clear();
    if(this.router.url == '/home'){
      location.reload()
    }else{
      this.router.navigateByUrl('/home');
    } 
  }
}
