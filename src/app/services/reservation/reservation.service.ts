import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  endpoint = 'http://localhost:3800/reserva/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) { }

  saveReservation(dataReservation, idV){
    let params = JSON.stringify(dataReservation);
    return this.http.post(this.endpoint + 'reservaciones/' + idV, params, this.httpOptions).pipe(
      map(this.extractData)
    )
  }

  CrearPDF(idR){
    let headers = new HttpHeaders({
      'Content-Type': 'application/pdf',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.get(this.endpoint + 'CrearPDF/' + idR, {headers: headers}).pipe(
      map(this.extractData)
    )
  }

  buscarReservacion(idR){
    let headers = new HttpHeaders({
      'Content-Type': 'application.json',
      'Authorization': localStorage.getItem('tokenUsers')
    })
    return this.http.get(this.endpoint + 'findOneCar/' + idR, {headers: headers}).pipe()
  }
}
