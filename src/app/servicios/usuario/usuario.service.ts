import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getAllUsuarios(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getUsuario(id: any): Observable<any> {
    return this.httpClient.get(this.URL + "/" + id);
  }

  public creteUsuario(user: any): Observable<any> {
    return this.httpClient.post(this.URL, user);
  }

  public deleteUsuario(id: any): Observable<any> {
    return this.httpClient.delete(this.URL + "/" + id);
  }

  public updateUsuario(id: any, usuario: any) {
    return this.httpClient.put(this.URL + "/" + id, usuario);
  }

}
