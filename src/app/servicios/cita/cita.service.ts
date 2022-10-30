import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getAllCitas(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getCita(id: any): Observable<any> {
    return this.httpClient.get(this.URL + "/" + id);
  }

  public creteCita(user: any): Observable<any> {
    return this.httpClient.post(this.URL, user);
  }

  public deleteCita(id: any): Observable<any> {
    return this.httpClient.delete(this.URL + "/" + id);
  }

  public updateCita(id: any, user: any) {
    return this.httpClient.put(this.URL + "/" + id, user);
  }
}
