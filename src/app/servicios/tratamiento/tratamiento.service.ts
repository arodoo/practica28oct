import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
  private URL = 'http://localhost:8080/api/v1/users';

  constructor(private httpClient: HttpClient) { }

  public getAllServicios(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getServicio(id: any): Observable<any> {
    return this.httpClient.get(this.URL + '/' + id);
  }

  public creteServicio(servicio: any): Observable<any> {
    return this.httpClient.post(this.URL, servicio);
  }

  public deleteServicio(id: any): Observable<any>{
    return this.httpClient.delete(this.URL + '/' + id);
  }

  public updateUser(id: any, servicio: any){
    return this.httpClient.put(this.URL + '/' + id, servicio);
  }
}
