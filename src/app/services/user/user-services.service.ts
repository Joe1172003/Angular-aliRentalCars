import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  endpoint = 'http://localhost:3000/api/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }
  constructor(private http: HttpClient) { }


  login(dataUser){
    let params = JSON.stringify(dataUser);
    return this.http.post(this.endpoint + 'login', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }

  register(dataUser){
    let params = JSON.stringify(dataUser);
    return this.http.post(this.endpoint + 'registerUser', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }

  getUsers():Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.get(this.endpoint + 'listUsers', {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  deleteUser(){
    let headers = new HttpHeaders({
      'Content-Type': 'application.json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.delete(this.endpoint + 'deleteCar', {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  updateUsers(dataUser){
    let params = JSON.stringify(dataUser)
    let userId = dataUser.userId
    let headers = new HttpHeaders({
      'Content-Type': 'application.json',
      'authorization': localStorage.getItem('tokenUsers')
    })
    console.log(localStorage.getItem('tokenUsers'))
    return this.http.put(this.endpoint + 'updateUser', params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }
}
