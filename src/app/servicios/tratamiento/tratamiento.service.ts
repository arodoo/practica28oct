import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {
  private URL = 'http://localhost:8080/api/v1/users';

  constructor(private httpClient: HttpClient) { }

  public getAllTratamientos(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getTratamiento(id: any): Observable<any> {
    return this.httpClient.get(this.URL + '/' + id);
  }

  public creteTratamiento(servicio: any): Observable<any> {
    return this.httpClient.post(this.URL, servicio);
  }

  public deleteTratamiento(id: any): Observable<any>{
    return this.httpClient.delete(this.URL + '/' + id);
  }

  public updateTratamiento(id: any, servicio: any){
    return this.httpClient.put(this.URL + '/' + id, servicio);
  }
}
