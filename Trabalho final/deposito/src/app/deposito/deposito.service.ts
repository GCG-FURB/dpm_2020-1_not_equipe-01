import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  url = 'http://localhost:3000/depositos';

  constructor(private http : HttpClient,private configService: ConfigService) { }

  montaURL() {
    this.url = this.configService.get() + '/depositos';
  }

  get() {
    this.montaURL();
    return this.http.get(this.url);
  }

  getById(id: any) {
    this.montaURL();
    return this.http.get(this.url + '/' + id);
  }

  update(id: any, deposito : any) {
    this.montaURL();
    return this.http.put(this.url + '/' + id, deposito);
  }

  add(deposito : any) {
    this.montaURL();
    return this.http.post(this.url, deposito);
  }

  del(deposito : any) {
    this.montaURL();
    return this.http.delete(this.url + '/' + deposito.id, deposito);
  }
}
