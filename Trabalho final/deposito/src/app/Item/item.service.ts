import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'http://localhost:3000/items';

  constructor(private http : HttpClient,private configService: ConfigService) { }

  montaURL() {
    this.url = this.configService.get() + '/items';
  }

  get() {
    this.montaURL();
    return this.http.get(this.url);
  }

  getById(id: any) {
    this.montaURL();
    return this.http.get(this.url + '/' + id);
  }

  update(id: any, item : any) {
    this.montaURL();
    return this.http.put(this.url + '/' + id, item);
  }

  add(item : any) {
    this.montaURL();
    return this.http.post(this.url, item);
  }

  del(item : any) {
    this.montaURL();
    return this.http.delete(this.url + '/' + item.id, item);
  }
}
