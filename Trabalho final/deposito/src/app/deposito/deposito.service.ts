import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DepositoService {

  url = 'http://localhost:3000/depositos';

  constructor(private http : HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  add(deposito : any) {
    return this.http.post(this.url, deposito);
  }

  del(deposito : any) {
    return this.http.delete(this.url + '/' + deposito.id, deposito);
  }
}
