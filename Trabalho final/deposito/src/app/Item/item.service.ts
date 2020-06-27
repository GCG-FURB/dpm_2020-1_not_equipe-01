import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'http://localhost:3000/items';

  constructor(private http : HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  add(item : any) {
    return this.http.post(this.url, item);
  }

  del(item : any) {
    return this.http.delete(this.url + '/' + item.id, item);
  }
}
