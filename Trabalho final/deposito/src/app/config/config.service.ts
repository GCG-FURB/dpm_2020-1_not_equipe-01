import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  get() {
    return this.url;
  }

  setURL(url: any) {
    this.url = 'http://'+url+':3000';
  }
}
