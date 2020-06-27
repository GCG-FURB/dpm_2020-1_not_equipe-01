import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuarios';

  constructor(
    private http : HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  add(usuario : any) {
    return this.http.post(this.url, usuario);
  }

  del(usuario : any) {
    return this.http.delete(this.url + '/' + usuario.id);
  }
}
