import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CarServicesService {
  endpoint = 'http://localhost:3000/vehiculos/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  httpOptionsHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
  }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) { }

  saveCar(dataCar){
    let params = JSON.stringify(dataCar);
    return this.http.post(this.endpoint + 'addCar', params, this.httpOptionsHeaders).pipe(
      map(this.extractData)
    )
  }

  deleteCar(automovilId){
    let headers = new HttpHeaders({
      'Content-Type': 'application.json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.delete(this.endpoint + 'deleteCar/'+ automovilId, {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  getCar(){
    let headers = new HttpHeaders({
      'Content-Type': 'application.json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.get(this.endpoint + 'listCar', {headers: headers}).pipe()
  }

  getCars():Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.get(this.endpoint + 'listCars', {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  getCars3():Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.get(this.endpoint + 'listCars3', {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  updateCar(dataCar){
    let params = JSON.stringify(dataCar)
    let automovilId = dataCar.automovilId
    let headers = new HttpHeaders({
      'Content-Type': 'application.json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.put(this.endpoint + 'updateCar/' + automovilId, params, this.httpOptions).pipe(
      map(this.extractData)
    )

  }
}
