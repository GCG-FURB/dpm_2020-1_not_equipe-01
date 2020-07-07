import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuarios';

  constructor(
    private http : HttpClient,
    private configService: ConfigService) { }

  montaURL() {
    this.url = this.configService.get() + '/usuarios';
  }
 
  get() {
    this.montaURL();
    return this.http.get(this.url);
  }

  getById(id: any) {
    this.montaURL();
    return this.http.get(this.url + '/' + id);
  }

  update(id: any, usuario : any) {
    this.montaURL();
    return this.http.put(this.url + '/' + id, usuario);
  }

  add(usuario : any) {
    this.montaURL();
    return this.http.post(this.url, usuario);
  }

  del(usuario : any) {
    this.montaURL();
    return this.http.delete(this.url + '/' + usuario.id);
  }
}
