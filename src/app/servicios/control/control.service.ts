import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private URL = 'http://localhost:8080/api/v1/users';

  constructor(private httpClient: HttpClient) { }

  public getAllControles(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getControl(id: any): Observable<any> {
    return this.httpClient.get(this.URL + "/" + id);
  }

  public creteControl(control: any): Observable<any> {
    return this.httpClient.post(this.URL, control);
  }

  public deleteControl(id: any): Observable<any> {
    return this.httpClient.delete(this.URL + "/" + id);
  }

  public updateControl(id: any, control: any) {
    return this.httpClient.put(this.URL + "/" + id, control);
  }
}
