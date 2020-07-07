import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  url = 'http://localhost:3000/areas';

  constructor(private http : HttpClient,private configService: ConfigService) { }

  montaURL() {
    this.url = this.configService.get() + '/areas';
  }

  get() {
    this.montaURL();
    return this.http.get(this.url);
  }

  getById(id: any) {
    this.montaURL();
    return this.http.get(this.url + '/' + id);
  }

  update(id: any, area : any) {
    this.montaURL();
    return this.http.put(this.url + '/' + id, area);
  }

  add(area : any) {
    this.montaURL();
    return this.http.post(this.url, area);
  }

  del(area : any) {
    this.montaURL();
    return this.http.delete(this.url + '/' + area.id, area);
  }
}
